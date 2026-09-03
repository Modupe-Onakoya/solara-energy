import { solutions } from "@/data/solution";

export default function Solutions() {
    return (
        <section className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Solutions</p>
                    <h2 className="text-slate-900 font-bold text-4xl">The Right Fit for Every Need</h2>
                    <p className="text-slate-500 text-lg mt-3 max-w-xl mx-auto">Whether you're powering a single room or an entire factory, we have a solution that works.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map(({ icon, title, desc, features, image }) => (
                        <div key={title} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative h-48 bg-slate-200 overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 -mt-10 relative bg-white border border-slate-100 shadow-sm">
                                    {icon}
                                </div>
                                <h3 className="text-slate-900 font-bold text-xl mb-2">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#FFF7ED" /><path d="M4.5 7l2 2 3-3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                                    Learn more
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
