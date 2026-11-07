"use client"

import { createClient } from "@/lib/client"
import { FormEvent, useState } from "react"
import { z } from "zod"


const passwordSchema = z.object({
    newPassword: z.string().min(6, "At least 6 characters"),
    confirmPassword: z.string().min(1, "please confirm your password")
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})
export default function ChangePassword() {
    const supabase = createClient()
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const result = passwordSchema.safeParse({ newPassword, confirmPassword })
        if (!result.success) {
            setMessage(result.error.issues[0].message)
            return
        }

        setLoading(true)
        const { error } = await supabase.auth.updateUser({ password: newPassword })
        setLoading(false)

        if (error) {
            setMessage(error.message)
            return
        }

        setMessage("Password updated")
        setNewPassword("")
        setConfirmPassword("")
    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
            <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border p-2"
            />
            <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2"
            />
            <button type="submit" disabled={loading} className="border p-2 disabled:opacity-50">
                {loading ? "Updating..." : "Update password"}
            </button>
            {message && <p>{message}</p>}
        </form>
    )
}