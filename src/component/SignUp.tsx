"use client";

import { createClient } from "@/lib/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
    const supabase = createClient();
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signUp({ email, password });

        if (error) {
            setLoading(false);
            setError(error.message);
            return;
        }

        console.log({ name, email, password });
        router.push("/");
    }

    return (
        <main className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl"
            >
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#0F172A]">
                        Create Account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Start managing your solar energy smarter.
                    </p>
                </div>

                {error && (
                    <p className="mb-5 rounded-lg bg-red-50 p-3 text-sm text-red-500">
                        {error}
                    </p>
                )}

                <div className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0F172A] focus:ring-2 focus:ring-slate-200"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0F172A] focus:ring-2 focus:ring-slate-200"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0F172A] focus:ring-2 focus:ring-slate-200"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-[#0F172A] py-3 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="font-medium text-[#0F172A] hover:underline"
                    >
                        Login
                    </a>
                </p>
            </form>
        </main>
    );
}