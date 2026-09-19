"use client";

import { createClient } from "@/lib/client";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const supabase = createClient()
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true)


        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            setError(error.message)
        }
    }

    return loading ?
        <div>
            <h1>loading.....</h1>
        </div>
        :
        (

            <form className="flex flex-col" onSubmit={handleSubmit}>
                <h1>Login</h1>

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
                >Login</button>
            </form>
        );
}