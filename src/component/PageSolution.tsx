"use client"
import { Solution } from "@/types";
import { useState } from "react";
import Link from "next/link";

function fmt(n: number) {
    return "₦" + n.toLocaleString("en-NG");
}
export default function PageSolution({ solution }: { solution: Solution }) {
    const [selected, setSelected] = useState<number | null>(null);
    const [payMode, setPayMode] = useState<"direct" | "plan">("direct");
    const [months, setMonths] = useState(12);


    const sys = selected !== null ? solution.systems[selected] : null;
    const deposit = sys ? Math.round(sys.price * 0.3) : 0;
    const monthly = sys ? Math.round((sys.price - deposit) / months) : 0;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative pt-16" style={{ backgroundColor: "#0F172A" }}>
                <div className="absolute inset-0">
                    <img src={solution.heroImage} alt={solution.title} className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0F172A 55%, rgba(15,23,42,0.5) 100%)" }} />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 py-16">
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-slate-400 text-sm mb-6 hover:text-white transition-colors">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10 7H4M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        All Solutions
                    </Link>
                    <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">{solution.subtitle}</p>
                    <h1 className="text-white font-bold text-5xl mb-5">{solution.title}</h1>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{solution.description}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-14">
                {/* Systems */}
                <h2 className="text-slate-900 font-bold text-3xl mb-2">Choose Your System</h2>
                <p className="text-slate-500 mb-8">Click any system to see full specifications and payment options.</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {solution.systems.map((s, i) => {
                        const active = selected === i;
                        return (
                            <button key={s.name} onClick={() => setSelected(active ? null : i)}
                                className={`group rounded-2xl overflow-hidden border-2 text-left transition-all duration-200 ${active ? "border-orange-500 shadow-xl" : "border-slate-100 hover:border-slate-300 hover:shadow-md"}`}>
                                <div className="relative h-48 bg-slate-200 overflow-hidden">
                                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    {active && (
                                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    )}
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-white font-bold text-lg">{s.name}</p>
                                        <p className="text-slate-300 text-sm">{s.capacity}</p>
                                    </div>
                                </div>
                                <div className="p-5 bg-white">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-2xl font-bold ${active ? "text-orange-500" : "text-slate-800"}`}>{fmt(s.price)}</span>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${active ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-500"}`}>{active ? "Selected ✓" : "Select"}</span>
                                    </div>
                                    <p className="text-slate-500 text-xs font-medium mb-2">Powers:</p>
                                    <ul className="space-y-1">
                                        {s.powers.slice(0, 4).map((p) => (
                                            <li key={p} className="flex items-center gap-2 text-xs text-slate-500">
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                {p}
                                            </li>
                                        ))}
                                        {s.powers.length > 4 && <li className="text-xs text-orange-500 font-medium">+{s.powers.length - 4} more</li>}
                                    </ul>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Detail + payment */}
                {sys && (
                    <div className="rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-16">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                                <h3 className="text-slate-900 font-bold text-2xl mb-1">{sys.name}</h3>
                                <p className="text-slate-400 text-sm mb-6">{sys.capacity} System</p>
                                <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 overflow-hidden mb-6">
                                    {sys.specs.map(({ label, value }) => (
                                        <div key={label} className="flex items-center justify-between px-5 py-3.5">
                                            <span className="text-slate-500 text-sm">{label}</span>
                                            <span className="text-slate-800 font-semibold text-sm">{value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-wide font-semibold mb-3">What It Powers</p>
                                    <div className="flex flex-wrap gap-2">
                                        {sys.powers.map((p) => (
                                            <span key={p} className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{p}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-slate-900 font-bold text-2xl mb-6">Payment Options</h3>
                                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-6">
                                    {(["direct", "plan"] as const).map((m) => (
                                        <button key={m} onClick={() => setPayMode(m)}
                                            className={`py-3 rounded-lg text-sm font-semibold transition-all ${payMode === m ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}>
                                            {m === "direct" ? "💳 Pay in Full" : "📆 Pay Small Small"}
                                        </button>
                                    ))}
                                </div>
                                {payMode === "direct" ? (
                                    <div className="space-y-4">
                                        <div className="rounded-2xl bg-slate-50 p-6 text-center">
                                            <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Total Price</p>
                                            <p className="text-slate-900 font-bold text-4xl">{fmt(sys.price)}</p>
                                            <p className="text-slate-400 text-xs mt-2">Includes installation + 1-yr support</p>
                                        </div>
                                        <Link href="/quote" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                                            Order Now — {fmt(sys.price)}
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-2">
                                            {[6, 12, 24].map((m) => (
                                                <button key={m} onClick={() => setMonths(m)}
                                                    className={`py-3 rounded-xl text-sm font-semibold border transition-all ${months === m ? "border-orange-500 bg-orange-50 text-orange-600" : "border-slate-200 text-slate-600 hover:border-slate-300"}`}>
                                                    {m} months
                                                </button>
                                            ))}
                                        </div>
                                        <div className="rounded-2xl p-5 space-y-3" style={{ backgroundColor: "#FFF7ED" }}>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">Deposit today (30%)</span>
                                                <span className="font-semibold text-slate-800">{fmt(deposit)}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-500 text-sm">Monthly for {months} months</span>
                                                <span className="font-bold text-orange-500 text-2xl">{fmt(monthly)}</span>
                                            </div>
                                            <p className="text-orange-500 text-xs border-t border-orange-200 pt-2">0% interest · 0 hidden fees</p>
                                        </div>
                                        <Link href="/quote?plan=installment" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                                            Apply for Installment Plan
                                        </Link>
                                    </div>
                                )}
                                <Link href="/quote" className="flex items-center justify-center text-sm text-slate-400 hover:text-slate-600 transition-colors py-3">
                                    Request a free quote first →
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Benefits */}
                <div>
                    <h2 className="text-slate-900 font-bold text-3xl mb-8">Why Choose This Solution</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {solution.benefits.map(({ icon, title, desc }) => (
                            <div key={title} className="rounded-2xl border border-slate-100 p-5 hover:border-orange-200 hover:bg-orange-50/30 transition-all">
                                <span className="text-2xl block mb-3">{icon}</span>
                                <h4 className="text-slate-800 font-semibold text-sm mb-1.5">{title}</h4>
                                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
