import { createClient } from "@/lib/client"
import { FormEvent, useState } from "react"


export default function ChangePassword() {
    const supabase = createClient()
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (newPassword !== confirmPassword) {
            return
        }

    }


    return (
        <div>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button>
                confirm
            </button>
        </div>
    )
}