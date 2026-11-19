import { createClient, createClientAdmin } from "@/lib/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { id, reference, amountTransacted } = await request.json();
    const supabaseAdmin = await createClientAdmin()
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

    const { data: updated, error } = await supabaseAdmin.from("payment")
        .update({
            status: "success",
            amount: amountTransacted,
            currency: "naira"

        })
        .eq("id", id)
        .select()

    if (error) {
        return Response.json(error.message)
    }

    return NextResponse.json({
        data, error
    });
}