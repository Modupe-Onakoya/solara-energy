"use client"

import { createClient } from "@/lib/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter()
    const supabase = createClient()


    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error.message);
            return;
        }

        router.push("/login");
    };
    return (
        <button className="border border-slate-300 rounded-lg px-4 py-2 text-sm hover:bg-slate-50" onClick={handleLogout}>
            Log Out
        </button>
    )
}