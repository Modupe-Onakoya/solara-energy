import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    const { email, amount } = await request.json()

    try {

        const response = await fetch(" https://api.paystack.co/transaction/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
            body: JSON.stringify({
                email, amount
            })

        })
        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json()

        return NextResponse.json({ message: data }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ messge: error }, { status: 400 })
    }



}