import Link from "next/link";

const teasers = [
    {
        to: "/system-recommendation",
        image: "https://images.unsplash.com/photo-1589276534126-adef63a95e05?w=700&h=480&fit=crop&auto=format",
        badge: "Interactive Tool",
        badgeColor: "#10B981",
        title: "Design Your Solar System",
        desc: "Not sure which system you need? Pick the appliances you want to power — lights, fridge, AC, pump — and our designer instantly builds the perfect system for your home.",
        cta: "Try the System Designer",
    },
    {
        to: "/electricity-cost",
        image: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=700&h=480&fit=crop&auto=format",
        badge: "Savings Calculator",
        badgeColor: "#F97316",
        title: "See How Much You Could Save",
        desc: "Enter your monthly electricity bill and we'll calculate your exact savings, payback period, and 20-year return on investment — in seconds.",
        cta: "Calculate My Savings",
    },
];

export default function Tools() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Free Tools</p>
                    <h2 className="text-slate-900 font-bold text-4xl">Find Your Perfect System</h2>
                    <p className="text-slate-500 text-lg mt-3 max-w-md mx-auto">Two free tools to help you make the right decision — no sales pressure.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {teasers.map(({ to, image, badge, badgeColor, title, desc, cta }, idx) => (
                        <Link
                            key={idx}
                            href={to}
                            className="group relative rounded-3xl overflow-hidden flex flex-col min-h-80 transition-all hover:-translate-y-1 hover:shadow-2xl duration-300"
                        >
                            {/* Background image */}
                            <img
                                src={image}
                                alt={title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.95) 40%, rgba(15,23,42,0.3) 100%)" }} />

                            {/* Content */}
                            <div className="relative mt-auto p-8 space-y-3">
                                <span
                                    className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                                    style={{ backgroundColor: badgeColor }}
                                >
                                    {badge}
                                </span>
                                <h3 className="text-white font-bold text-2xl leading-tight">{title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                                <div className="inline-flex items-center gap-2 text-white font-semibold text-sm pt-1 group-hover:gap-3 transition-all">
                                    {cta}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
