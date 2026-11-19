import { createClient } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";
import { recommmendation } from "@/data/recommendation";

export async function POST(request: NextRequest) {
    try {
        const { recommend } = await request.json()
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ message: "invalid user" }, { status: 401 })
        }

        // const plan = recommmendation.find((item) => item.system === recommend)
        // if (!plan) {
        //     return NextResponse.json({ message: "Invalid system" }, { status: 400 })
        // }

        // const nairaAmount = Number(plan.price.replace(/[^0-9]/g, ""))

        const response = await fetch("https://api.paystack.co/transaction/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
            body: JSON.stringify({
                email: user.email,
                amount: 100000, // Paystack expects kobo
            }),
        })

        const result = await response.json()

        if (!response.ok) {
            console.log(result)
            return NextResponse.json(
                { message: result.message ?? "Paystack error" },
                { status: 400 }
            )
        }

        return NextResponse.json({ message: result.data }, { status: 200 })
    } catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong"
        console.log(error)
        return NextResponse.json({ message }, { status: 500 })
    }
}