// components/sections/ProductDetail.tsx
"use client"
import { useState } from "react"
import Link from "next/link"
import { Product } from "@/types"

function formatNaira(n: number) {
    return "₦" + n.toLocaleString("en-NG")
}

export default function ProductDetail({ product }: { product: Product }) {
    const [activeVariant, setActiveVariant] = useState(0)
    const [payMode, setPayMode] = useState<"direct" | "plan" | null>(null)
    const [planMonths, setPlanMonths] = useState(12)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const variant = product.variants[activeVariant]
    const deposit = Math.round(variant.price * 0.3)
    const monthly = Math.round((variant.price - deposit) / planMonths)

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative h-80 md:h-96 bg-slate-900 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 max-w-7xl mx-auto w-full">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-300 text-sm mb-4 hover:text-white transition-colors w-fit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M10 7H4M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        All Products
                    </Link>
                    <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">{product.tagline}</span>
                    <h1 className="text-white font-bold text-4xl md:text-5xl">{product.name}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left — info */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-slate-900 font-bold text-2xl mb-3">
                                What is a {product.name.replace(/s$/, "")}?
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">{product.description}</p>
                        </div>

                        {/* Variants */}
                        <div>
                            <h2 className="text-slate-900 font-bold text-2xl mb-5">Choose Your Model</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {product.variants.map((v, i) => (
                                    <button
                                        key={v.name}
                                        onClick={() => setActiveVariant(i)}
                                        className={`flex flex-col items-start p-5 rounded-2xl border-2 text-left transition-all ${activeVariant === i
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-slate-200 hover:border-slate-300"
                                            }`}
                                    >
                                        <span className={`text-sm font-bold mb-1 ${activeVariant === i ? "text-orange-600" : "text-slate-800"}`}>
                                            {v.name}
                                        </span>
                                        <span className="text-xs text-slate-400 mb-3">{v.capacity}</span>
                                        <span className={`text-2xl font-bold ${activeVariant === i ? "text-orange-500" : "text-slate-700"}`}>
                                            {formatNaira(v.price)}
                                        </span>
                                        <ul className="mt-3 space-y-1">
                                            {v.highlights.map((h) => (
                                                <li key={h} className="flex items-center gap-2 text-xs text-slate-500">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                ))}
                            </div>

                            {/* Specs table */}
                            <div className="rounded-2xl border border-slate-100 overflow-hidden">
                                <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
                                    <p className="text-slate-700 font-semibold text-sm">
                                        {variant.name} — Specifications
                                    </p>
                                </div>
                                <div className="divide-y divide-slate-100">
                                    {variant.specs.map(({ label, value }) => (
                                        <div key={label} className="flex items-center justify-between px-5 py-3.5">
                                            <span className="text-slate-500 text-sm">{label}</span>
                                            <span className="text-slate-800 font-semibold text-sm">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Use cases */}
                        <div>
                            <h2 className="text-slate-900 font-bold text-2xl mb-4">Best For</h2>
                            <div className="flex flex-wrap gap-3">
                                {product.useCases.map((u) => (
                                    <span key={u} className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                                        {u}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h2 className="text-slate-900 font-bold text-2xl mb-5">Frequently Asked Questions</h2>
                            <div className="space-y-3">
                                {product.faq.map(({ q, a }, i) => (
                                    <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
                                        >
                                            <span className="text-slate-800 font-medium text-sm">{q}</span>
                                            <svg
                                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                className={`shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                                            >
                                                <path d="M4 6l4 4 4-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        {openFaq === i && (
                                            <div className="px-5 pb-4">
                                                <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — sticky purchase */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                            <div className="px-6 py-5" style={{ backgroundColor: "#0F172A" }}>
                                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">{variant.name}</p>
                                <p className="text-white font-bold text-3xl">{formatNaira(variant.price)}</p>
                                <p className="text-slate-400 text-xs mt-1">Installed price · Lagos & Abuja</p>
                            </div>

                            <div className="bg-white px-6 py-5 space-y-4">
                                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                                    <button
                                        onClick={() => setPayMode("direct")}
                                        className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${payMode === "direct" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
                                    >
                                        Pay Direct
                                    </button>
                                    <button
                                        onClick={() => setPayMode("plan")}
                                        className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${payMode === "plan" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
                                    >
                                        Pay Small Small
                                    </button>
                                </div>

                                {payMode === "direct" && (
                                    <div className="space-y-3">
                                        <div className="rounded-xl bg-slate-50 px-4 py-4 text-center">
                                            <p className="text-slate-500 text-xs mb-1">Full payment</p>
                                            <p className="text-slate-900 font-bold text-2xl">{formatNaira(variant.price)}</p>
                                            <p className="text-slate-400 text-xs mt-1">Includes installation & 1-yr support</p>
                                        </div>
                                        <div className="space-y-1.5">
                                            {["Free site inspection", "Same-day installation", "1-year after-sales support", "25-yr panel warranty"].map((b) => (
                                                <div key={b} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <circle cx="7" cy="7" r="6" fill="#FFF7ED" />
                                                        <path d="M4.5 7l2 2 3-3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {b}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {payMode === "plan" && (
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-slate-600 text-xs font-medium mb-2">Spread over how many months?</p>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[6, 12, 24].map((m) => (
                                                    <button
                                                        key={m}
                                                        onClick={() => setPlanMonths(m)}
                                                        className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${planMonths === m
                                                            ? "border-orange-500 bg-orange-50 text-orange-600"
                                                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                                                            }`}
                                                    >
                                                        {m} mo
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-orange-50 px-4 py-4 space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">Deposit (30%)</span>
                                                <span className="font-semibold text-slate-800">{formatNaira(deposit)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">Then monthly</span>
                                                <span className="font-bold text-orange-600 text-lg">{formatNaira(monthly)}</span>
                                            </div>
                                            <p className="text-orange-500 text-xs">0% interest · 0 hidden fees</p>
                                        </div>
                                    </div>
                                )}

                                {payMode === null && (
                                    <p className="text-slate-400 text-sm text-center py-2">
                                        Select how you'd like to pay above
                                    </p>
                                )}

                                <a
                                    href="#"
                                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110 ${!payMode ? "opacity-50 pointer-events-none" : ""}`}
                                    style={{ backgroundColor: "#F97316" }}
                                >
                                    {payMode === "plan" ? "Apply for Payment Plan" : payMode === "direct" ? "Order Now" : "Select Payment Method"}
                                </a>
                                <a href="#" className="flex items-center justify-center text-sm text-slate-400 hover:text-slate-600 transition-colors py-1">
                                    Or request a free quote first →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}