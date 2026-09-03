"use client"
import { useState } from "react"
import { products } from "@/data/product"



export default function Products() {
    const [active, setActive] = useState(0);
    const p = products[active];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                    <div>
                        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Our Products</p>
                        <h2 className="text-slate-900 font-bold text-4xl leading-tight">Built for the Sun,<br />Made for You</h2>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-orange-500 transition-colors shrink-0">
                        View all products
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Tab list */}
                    <div className="lg:col-span-2 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {products.map((prod, i) => (
                            <button
                                key={prod.name}
                                onClick={() => setActive(i)}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 shrink-0 lg:shrink border ${active === i
                                    ? "bg-slate-900 border-slate-900 shadow-lg"
                                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                            >
                                <span
                                    className="w-2 h-2 rounded-full shrink-0"
                                    style={{ backgroundColor: active === i ? prod.color : "#CBD5E1" }}
                                />
                                <div>
                                    <p className={`font-semibold text-sm ${active === i ? "text-white" : "text-slate-800"}`}>{prod.name}</p>
                                    <p className={`text-xs mt-0.5 ${active === i ? "text-slate-300" : "text-slate-400"}`}>{prod.tagline}</p>
                                </div>
                                {prod.badge && (
                                    <span
                                        className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
                                        style={{ backgroundColor: active === i ? "rgba(255,255,255,0.15)" : "#FFF7ED", color: active === i ? "white" : "#F97316" }}
                                    >
                                        {prod.badge}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Detail panel */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            <div className="relative h-64 bg-slate-200">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-white font-bold text-2xl">{p.name}</span>
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-slate-600 text-base leading-relaxed mb-6">{p.desc}</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-400 text-xs mb-1">Starting price</p>
                                        <p className="text-slate-900 font-bold text-2xl">{p.price}</p>
                                    </div>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
                                        style={{ backgroundColor: "#F97316" }}
                                    >
                                        Get Quote
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
