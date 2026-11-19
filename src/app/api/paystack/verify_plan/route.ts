import { createClient, createClientAdmin } from "@/lib/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            return NextResponse.json({ message: "Kindly login" }, { status: 401 })
        }

        const { reference, amount, id } = await request.json() // amount is in NAIRA
        const expectedKobo = Math.round(Number(amount) * 100)

        const response = await fetch(
            `https://api.paystack.co/transaction/verify/${reference}`,
            { headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` } }
        )
        const result = await response.json()

        if (!response.ok || !result.status || !result.data) {
            return NextResponse.json({ message: "Could not verify payment" }, { status: 400 })
        }

        if (
            result.data.status !== "success" ||
            result.data.currency !== "NGN" ||
            result.data.amount !== expectedKobo // Paystack returns kobo
        ) {
            return NextResponse.json({ message: "Payment was not successful" }, { status: 400 })
        }

        const supabaseAdmin = await createClientAdmin()
        const { data: updated, error } = await supabaseAdmin
            .from("payment_plans")
            .update({ status: "active", total_amount: amount }) // saved in Naira
            .eq("id", id)
            .eq("user_id", user.id) // only the owner's plan
            .select()

        if (error || !updated || updated.length === 0) {
            return NextResponse.json({ message: "Update failed" }, { status: 500 })
        }

        return NextResponse.json({ message: "success" }, { status: 200 })
    } catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong"
        return NextResponse.json({ message }, { status: 500 })
    }
}