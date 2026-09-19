"use client";

import { createClient } from "@/lib/client";
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const supabase = createClient()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
            alert(error.message)
        }
        console.log({ name, email, password });
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h1>Create Account</h1>

            <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border max-w-lg"

            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border max-w-lg"

            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border max-w-lg"

            />

            <button type="submit"
                className="border max-w-lg"
            >Sign Up</button>

        </form>
    );
}