import { createClient } from "@/lib/client"

export async function POST() {

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        return Response.json(
            { message: "Kindly login" },
            { status: 401 }
        );
    }
    const { data, error } = await supabase.from("payment").insert({
        status: "pending",
        user_id: user.id
    }).select("id").single()

    if (error) {
        return Response.json(
            { message: "Could not create payment" },
            { status: 500 }
        );
    }

    return Response.json({ message: "success", data: data });

}