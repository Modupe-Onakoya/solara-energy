import Link from "next/link"


export default function HomePaySmallSmall() {


    const perks = [
        { value: "30%", label: "Deposit to start" },
        { value: "0%", label: "Interest rate" },
        { value: "24", label: "Months max plan" },
        { value: "24hrs", label: "Approval time" },
    ]

    const steps = [
        {
            step: "01",
            title: "Pick your system",
            desc: "Choose the solar system that fits your home or business needs and budget.",
        },
        {
            step: "02",
            title: "Choose a plan",
            desc: "Spread the balance over 6, 12, or 24 months — zero interest, zero hidden fees.",
        },
        {
            step: "03",
            title: "Pay 30% deposit",
            desc: "Make your initial deposit and we begin installation immediately.",
        },
        {
            step: "04",
            title: "Enjoy solar power",
            desc: "Your system is live. Pay the rest monthly while saving on electricity.",
        },
    ]


    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Pay Small Small</p>
                    <h2 className="text-slate-900 font-bold text-4xl leading-tight">
                        Solar Now, <br className="sm:hidden" /> Pay Later
                    </h2>
                    <p className="text-slate-500 text-lg mt-3 max-w-lg mx-auto">
                        30% deposit gets your system installed. Spread the rest over 6, 12, or 24 months — zero interest, zero hidden fees.
                    </p>
                </div>

                {/* Image + Steps */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

                    {/* Image */}
                    <div className="relative rounded-3xl overflow-hidden h-96">
                        <img
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format"
                            alt="Solar installation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />

                        {/* Floating card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                            <p className="text-white font-bold text-lg">Family Home System</p>
                            <p className="text-slate-300 text-sm mb-3">3kW · ₦850,000 total</p>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-slate-400 text-xs">Deposit</p>
                                    <p className="text-white font-bold">₦255,000</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs">Then monthly</p>
                                    <p className="text-orange-400 font-bold">₦24,792/mo</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs">For</p>
                                    <p className="text-white font-bold">24 months</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((item, idx) => (
                            <div key={item.step} className="flex gap-4 items-start">
                                <span className="text-orange-500 font-bold text-sm shrink-0 w-8">{item.step}</span>
                                <div>
                                    <p className="text-slate-900 font-semibold text-sm">{item.title}</p>
                                    <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                        {/* CTA */}
                        <Link
                            href="/pay-small-small"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors mt-2"
                        >
                            Calculate My Plan
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Perks strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {perks.map((perk) => (
                        <div key={perk.label} className="bg-slate-50 rounded-2xl p-5 text-center">
                            <p className="text-orange-500 font-bold text-3xl">{perk.value}</p>
                            <p className="text-slate-500 text-sm mt-1">{perk.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

