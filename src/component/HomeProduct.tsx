import Link from "next/link"

export default function HomeProducts() {



    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className=" mb-14">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Our Products</p>
                    <h2 className="text-slate-900 font-bold text-4xl leading-tight">Built for the Sun, Made for You</h2>
                    <p className="text-slate-500 text-lg mt-3 max-w-md ">
                        From starter home systems to commercial powerhouses — we have the right solution for every need and budget.
                    </p>
                </div>

                {/* Image + Write up */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-14">

                    {/* Image */}
                    <div className="relative rounded-3xl overflow-hidden h-96">
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=500&fit=crop&auto=format"
                            alt="Solar products"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                        {/* Floating stat */}
                        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                            <p className="text-white font-bold text-2xl">3 Product Lines</p>
                            <p className="text-slate-300 text-sm">Home · Business · Industrial</p>
                        </div>
                    </div>

                    {/* Write up */}
                    <div className="space-y-6">
                        <h3 className="text-slate-900 font-bold text-3xl leading-snug">
                            Every home deserves reliable power
                        </h3>
                        <p className="text-slate-500 text-base leading-relaxed">
                            Whether you're powering a small apartment or a large commercial facility, our solar product lines are designed to match your exact needs — with no overselling and no shortcuts.
                        </p>

                        {/* Three quick points */}
                        <div className="space-y-4">
                            {[
                                { title: "Starter Systems", desc: "Perfect for small homes and apartments. Covers lights, fans and phone charging." },
                                { title: "Family Systems", desc: "Powers your fridge, TV, and AC comfortably through the night." },
                                { title: "Commercial Systems", desc: "Heavy-duty solutions for businesses, schools and large facilities." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                                    <div>
                                        <p className="text-slate-900 font-semibold text-sm">{item.title}</p>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
                        >
                            View All Products
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
