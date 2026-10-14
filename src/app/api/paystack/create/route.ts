import { createClient } from "@/lib/server"

export async function POST() {

    const supabase = await createClient()
    const { data: { user }, error: getUserError } = await supabase.auth.getUser()
    console.log("User:", user);
    console.log("Auth error:", getUserError);
    console.log("User ID:", user?.id);
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
    console.log("Inserted payment:", data);

    if (error) {
        return Response.json(
            { message: error.message },
            { status: 500, }


        );
    }

    return Response.json({ message: "success", iden: data });

}