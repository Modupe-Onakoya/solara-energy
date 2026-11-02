import { createClient, createClientAdmin } from "@/lib/server";
import { create } from "domain";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const supabaseAdmin = await createClientAdmin()
    const { reference, amount, id } = await request.json()
    console.log(id)
    console.log("hii")
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {

        headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },

    })

    const data = await response.json()

    if (data.data.amount !== amount || data.data.status !== "success" || data.data.currency !== "NGN") {

        return NextResponse.json(
            { message: "Payment was not successful" },
            { status: 400 }
        );

    }

    // const { data: UserData, error } = await supabase.from("payment_plans").update({
    //     status: "active",
    // }).eq("id", id)
    const { data: updated, error } = await supabaseAdmin
        .from("payment_plans")
        .update({ status: "active" })
        .eq("id", id)
        .select()

    console.log({ id, updated, error })

    if (error) {
        return NextResponse.json({ messagr: `update table error ${error.message}` })
    }

    return NextResponse.json({
        message: "success"
    }, { status: 200 })

}
