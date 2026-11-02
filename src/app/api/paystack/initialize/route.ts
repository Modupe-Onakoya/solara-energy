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

        const plan = recommmendation.find((item) => item.system === recommend)
        if (!plan) {
            return NextResponse.json({ message: "Invalid system" }, { status: 400 })
        }
        const number = Number(plan.price.replace(/[^0-9]/g, ""))


        const response = await fetch("https://api.paystack.co/transaction/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
            body: JSON.stringify({
                email: user.email, amount: number
            })

        })
        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            throw new Error(errorData.message);
        }

        const { data } = await response.json()

        return NextResponse.json({ message: data }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ messge: error }, { status: 400 })
    }



}