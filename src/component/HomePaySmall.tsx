import Link from "next/link";

export default function HomePaySmall() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2" style={{ backgroundColor: "#0F172A" }}>
                    {/* Image side */}
                    <div className="relative min-h-72 lg:min-h-0">
                        <img
                            src="https://images.unsplash.com/photo-1758687126877-b37052a20a4d?w=700&h=500&fit=crop&auto=format"
                            alt="Happy family at home"
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #0F172A 100%)" }} />
                        {/* Floating payment card */}
                        <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-6 py-4 max-w-xs">
                            <p className="text-slate-400 text-xs mb-1 uppercase tracking-wide">Monthly from</p>
                            <p className="text-slate-900 font-bold text-3xl">₦21,000</p>
                            <p className="text-slate-400 text-xs mt-1">0% interest · 24-month plan</p>
                        </div>
                    </div>

                    {/* Copy */}
                    <div className="p-10 lg:p-14 flex flex-col justify-center space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wide">0% Interest Financing</span>
                        </div>
                        <h2 className="text-white font-bold text-4xl leading-tight">
                            Solar Now,<br />
                            <span style={{ color: "#F97316" }}>Pay Small Small</span>
                        </h2>
                        <p className="text-slate-300 text-base leading-relaxed">
                            Own a complete solar system with just 30% deposit. Spread the balance over 6, 12, or 24 months — zero interest, zero hidden charges. Approval in 24 hours.
                        </p>
                        <ul className="space-y-2">
                            {["30% deposit to start", "0% interest on all plans", "6, 12 or 24-month options", "₦450K system = ₦21K/month"].map((b) => (
                                <li key={b} className="flex items-center gap-2 text-slate-300 text-sm">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <Link href="/pay-small-small" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm w-fit transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                            See Payment Plans
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
