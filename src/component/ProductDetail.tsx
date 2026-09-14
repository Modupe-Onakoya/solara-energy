// components/sections/ProductDetail.tsx
"use client"
import { useState } from "react"
import Link from "next/link"
import { Product } from "@/types"



function fmt(n: number) {
    return "₦" + n.toLocaleString("en-NG");
}

export default function ProductDetail({ product }: { product: Product }) {
    ;
    const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
    const [payMode, setPayMode] = useState<"direct" | "plan">("direct");
    const [planMonths, setPlanMonths] = useState(12);
    const [openFaq, setOpenFaq] = useState<number | null>(null);


    const variant = selectedVariant !== null ? product.variants[selectedVariant] : null;
    const deposit = variant ? Math.round(variant.price * 0.3) : 0;
    const monthly = variant ? Math.round((variant.price - deposit) / planMonths) : 0;

    return (
        <div className="min-h-screen bg-white">
            {/* Page hero */}
            <div className="relative pt-16" style={{ backgroundColor: "#0F172A" }}>
                <div className="max-w-7xl mx-auto px-6 py-14">
                    <Link href="/products" className="inline-flex items-center gap-2 text-slate-400 text-sm mb-6 hover:text-white transition-colors">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10 7H4M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        All Products
                    </Link>
                    <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">{product.tagline}</p>
                    <h1 className="text-white font-bold text-5xl mb-4">{product.name}</h1>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{product.description}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-14">
                {/* Choose model heading */}
                <div className="mb-8">
                    <h2 className="text-slate-900 font-bold text-3xl mb-2">Choose Your Model</h2>
                    <p className="text-slate-500">Click a model to see full specifications and payment options.</p>
                </div>

                {/* Model cards */}
                <div className="grid sm:grid-cols-2 gap-6 mb-14">
                    {product.variants.map((v, i) => {
                        const active = selectedVariant === i;
                        return (
                            <button
                                key={v.name}
                                onClick={() => setSelectedVariant(active ? null : i)}
                                className={`group rounded-2xl overflow-hidden border-2 text-left transition-all duration-200 ${active ? "border-orange-500 shadow-xl" : "border-slate-100 hover:border-slate-300 hover:shadow-md"
                                    }`}
                            >
                                {/* Model image */}
                                <div className="relative h-56 bg-slate-200 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={v.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    {active && (
                                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    )}
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-white font-bold text-xl">{v.name}</p>
                                        <p className="text-slate-300 text-sm">{v.capacity}</p>
                                    </div>
                                </div>
                                {/* Card footer */}
                                <div className="p-5 bg-white">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-2xl font-bold ${active ? "text-orange-500" : "text-slate-800"}`}>{fmt(v.price)}</span>
                                        <span className={`text-sm font-semibold px-3 py-1 rounded-full transition-colors ${active ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                                            {active ? "Selected ✓" : "Select"}
                                        </span>
                                    </div>
                                    <ul className="space-y-1">
                                        {v.highlights.map((h) => (
                                            <li key={h} className="flex items-center gap-2 text-sm text-slate-500">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Detail + payment panel (shown after selecting a model) */}
                {variant && (
                    <div className="rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-16">
                        <div className="grid lg:grid-cols-2">
                            {/* Specs */}
                            <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                                <h3 className="text-slate-900 font-bold text-2xl mb-1">{variant.name}</h3>
                                <p className="text-slate-400 text-sm mb-6">{variant.capacity}</p>
                                <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 overflow-hidden mb-6">
                                    {variant.specs.map(({ label, value }) => (
                                        <div key={label} className="flex items-center justify-between px-5 py-3.5">
                                            <span className="text-slate-500 text-sm">{label}</span>
                                            <span className="text-slate-800 font-semibold text-sm">{value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-wide font-semibold mb-3">Best For</p>
                                    <div className="flex flex-wrap gap-2">
                                        {product.useCases.map((u) => (
                                            <span key={u} className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{u}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Payment */}
                            <div className="p-8">
                                <h3 className="text-slate-900 font-bold text-2xl mb-6">How Would You Like to Pay?</h3>
                                {/* Toggle */}
                                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-6">
                                    {(["direct", "plan"] as const).map((m) => (
                                        <button
                                            key={m}
                                            onClick={() => setPayMode(m)}
                                            className={`py-3 rounded-lg text-sm font-semibold transition-all ${payMode === m ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
                                        >
                                            {m === "direct" ? "💳 Pay in Full" : "📆 Pay Small Small"}
                                        </button>
                                    ))}
                                </div>

                                {payMode === "direct" ? (
                                    <div className="space-y-4">
                                        <div className="rounded-2xl bg-slate-50 p-6 text-center">
                                            <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Total Price</p>
                                            <p className="text-slate-900 font-bold text-4xl">{fmt(variant.price)}</p>
                                            <p className="text-slate-400 text-xs mt-2">Includes installation + 1-yr support</p>
                                        </div>
                                        <ul className="space-y-2">
                                            {["Free site inspection", "Same-day installation", "1-year after-sales support", "25-yr panel warranty"].map((b) => (
                                                <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#FFF7ED" /><path d="M4.5 7l2 2 3-3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/quote" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                                            Order Now — {fmt(variant.price)}
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <p className="text-slate-600 text-sm font-medium">Spread balance over:</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[6, 12, 24].map((m) => (
                                                <button key={m} onClick={() => setPlanMonths(m)}
                                                    className={`py-3 rounded-xl text-sm font-semibold border transition-all ${planMonths === m ? "border-orange-500 bg-orange-50 text-orange-600" : "border-slate-200 text-slate-600 hover:border-slate-300"}`}>
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
                                                <span className="text-slate-500 text-sm">Monthly for {planMonths} months</span>
                                                <span className="font-bold text-orange-500 text-2xl">{fmt(monthly)}</span>
                                            </div>
                                            <div className="pt-1 border-t border-orange-200 flex justify-between text-xs text-slate-400">
                                                <span>0% interest</span><span>0 hidden fees</span><span>Cancel anytime</span>
                                            </div>
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

                {/* FAQ */}
                <div className="max-w-2xl">
                    <h2 className="text-slate-900 font-bold text-3xl mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {product.faq.map(({ q, a }, i) => (
                            <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors">
                                    <span className="text-slate-800 font-medium text-sm pr-4">{q}</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        className={`shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>
                                        <path d="M4 6l4 4 4-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                {openFaq === i && (
                                    <div className="px-5 pb-4"><p className="text-slate-500 text-sm leading-relaxed">{a}</p></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
