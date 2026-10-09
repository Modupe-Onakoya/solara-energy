import { createClient } from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { id, reference, amountTransacted } = await request.json();
    const supabase = createClient()

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
        }
    )

    const data = await response.json();
    if (data.data.status !== "success") {
        return NextResponse.json(
            { message: "Payment was not successful" },
            { status: 400 }
        );
    }

    const expectedAmount = amountTransacted;
    const expectedCurrency = "NGN";

    if (
        data.data.status !== "success" ||
        data.data.amount !== expectedAmount ||
        data.data.currency !== expectedCurrency
    ) {
        return NextResponse.json(
            { message: "Payment verification failed" },
            { status: 400 }
        );
    }

    const { error } = await supabase.from("payment").update({
        reference: reference,
        status: "success",
        currency: data.data.currency,
        amount: data.data.amount
    }).eq("id", id)

    if (error) {
        return Response.json(error.message)
    }

    return NextResponse.json({
        message: "Payment verified successfully",
        transaction: data.data,
    });
}