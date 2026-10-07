import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { reference } = await request.json();

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

    const expectedAmount = 45000000;
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
}