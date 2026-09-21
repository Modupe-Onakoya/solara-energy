// app/dashboard/page.tsx
import { createClient } from "@/lib/server"
import { redirect } from "next/navigation"
// import LogoutButton from "@/components/ui/LogoutButton"

export default async function Dashboard() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) redirect("/login")

    // format date joined
    const dateJoined = new Date(user.created_at).toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Header */}
            <div className="bg-white border-b border-slate-100 px-6 py-4">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <h1 className="text-slate-900 font-bold text-xl">My Dashboard</h1>
                    {/* <LogoutButton /> */}
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">

                {/* Welcome Card */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-6">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-1">
                        Welcome back
                    </p>
                    <h2 className="text-slate-900 font-bold text-2xl">{user.email}</h2>
                    <p className="text-slate-400 text-sm mt-1">Member since {dateJoined}</p>
                </div>

                {/* Stats Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Quotes Requested", value: "0" },
                        { label: "Calculations Done", value: "0" },
                        { label: "Saved Products", value: "0" },
                        { label: "Payment Plans", value: "0" },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm px-4 py-5 text-center">
                            <p className="text-slate-900 font-bold text-3xl">{stat.value}</p>
                            <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* My Quotes */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-6">
                    <h3 className="text-slate-900 font-bold text-lg mb-4">My Quotes</h3>
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 4v12M4 10h12" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="text-slate-500 text-sm">No quotes yet</p>
                        <a href="/#quote" className="text-orange-500 text-sm font-semibold mt-1 hover:underline">
                            Request a quote →
                        </a>
                    </div>
                </div>

                {/* My Calculations */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-6">
                    <h3 className="text-slate-900 font-bold text-lg mb-4">My Calculations</h3>
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 4v12M4 10h12" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="text-slate-500 text-sm">No calculations yet</p>
                        <a href="/electricity-cost" className="text-orange-500 text-sm font-semibold mt-1 hover:underline">
                            Calculate your savings →
                        </a>
                    </div>
                </div>

                {/* My Saved Products */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-6">
                    <h3 className="text-slate-900 font-bold text-lg mb-4">My Saved Products</h3>
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 4v12M4 10h12" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="text-slate-500 text-sm">No saved products yet</p>
                        <a href="/products" className="text-orange-500 text-sm font-semibold mt-1 hover:underline">
                            Browse products →
                        </a>
                    </div>
                </div>

                {/* My Payment Plans */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-6">
                    <h3 className="text-slate-900 font-bold text-lg mb-4">My Payment Plans</h3>
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 4v12M4 10h12" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="text-slate-500 text-sm">No payment plans yet</p>
                        <a href="/pay-small-small" className="text-orange-500 text-sm font-semibold mt-1 hover:underline">
                            Apply for a plan →
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}