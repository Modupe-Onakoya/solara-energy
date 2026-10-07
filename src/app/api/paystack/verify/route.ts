import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { reference } = await request.json();

    console.log("Transaction reference:", reference);

    return NextResponse.json({
        message: "Reference received",
    });
}