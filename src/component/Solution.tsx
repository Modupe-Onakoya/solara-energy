import Link from "next/link";

const cards = [
    {
        to: "/solutions/home-solar",
        image: "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=600&h=400&fit=crop&auto=format",
        title: "Home Solar Systems",
        desc: "Complete solar setups for every home size. Installed in one day, backed by 25-year warranty.",
    },
    {
        to: "/solutions/business-solar",
        image: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=600&h=400&fit=crop&auto=format",
        title: "Business Solar Systems",
        desc: "Cut operating costs and protect your business from outages. Scalable from 5kW to 1MW.",
    },
    {
        to: "/solutions/solar-appliances",
        image: "https://images.unsplash.com/photo-1730807908064-c087959dd52c?w=600&h=400&fit=crop&auto=format",
        title: "Solar Home Appliances",
        desc: "DC-powered fans, TVs, fridges and lights that run directly from solar — zero inverter loss.",
    },
];

export default function Solution() {
    return (
        <section className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                    <div>
                        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Solutions</p>
                        <h2 className="text-slate-900 font-bold text-4xl">The Right Fit<br />for Every Need</h2>
                    </div>
                    <Link href={"/"} className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-orange-500 transition-colors shrink-0">
                        Explore all solutions
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map(({ to, image, title, desc }) => (
                        <Link key={to} href={"/"} className="group rounded-2xl overflow-hidden border border-slate-100 bg-white hover:shadow-lg transition-all hover:-translate-y-1 duration-200">
                            <div className="relative h-52 overflow-hidden bg-slate-200">
                                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-slate-900 font-bold text-lg mb-2">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                                <span className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                                    Learn more
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
