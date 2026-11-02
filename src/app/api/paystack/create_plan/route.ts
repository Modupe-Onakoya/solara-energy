import { createClient } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";


export async function POST() {
    console.log("create_plan")
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return NextResponse.json({
            message: "Error from create database getting user: No user"
        }, { status: 401 })
    }

    const { data: userData, error } = await supabase.from("payment_plans").insert({
        user_id: user.id,
        status: "pending"
    }).select("id").single()
    if (error) {
        return NextResponse.json({
            message: `Error from insert row ${error.message} `
        }, { status: 401 })
    }

    console.log("create_plan done")
    return NextResponse.json(
        { message: userData, user_email: user.email }, { status: 200 }
    )

}