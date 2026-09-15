"use client"
import Link from "next/link";
import { produce } from "@/data/produce";

function formatNaira(n: number) {
    return "₦" + n.toLocaleString("en-NG");
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="py-20 text-center" style={{ backgroundColor: "#0F172A" }}>
                <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
                <h1 className="text-white font-bold text-5xl mb-4">Built for the Sun</h1>
                <p className="text-slate-400 text-lg max-w-lg mx-auto">Everything you need for a complete, reliable solar power system — sourced, installed, and warranted by SolarFlow.</p>
            </div>

            {/* Product grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {produce.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/products/${p.slug}`}
                            className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 duration-200"
                        >
                            <div className="relative h-52 bg-slate-200 overflow-hidden">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <span className="absolute top-4 left-4 text-2xl">{p.icon}</span>
                            </div>
                            <div className="p-5">
                                <p className="text-orange-500 text-xs font-semibold uppercase tracking-wide mb-1">{p.tagline}</p>
                                <h3 className="text-slate-900 font-bold text-xl mb-2">{p.name}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">{p.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-800 font-bold">{formatNaira(p.variants[0].price)} <span className="text-slate-400 font-normal text-xs">starting</span></span>
                                    <span className="inline-flex items-center gap-1 text-orange-500 text-sm font-semibold group-hover:gap-2 transition-all">
                                        View Product
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
