import { reasons } from "@/data/whyUs";

export default function WhyUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Why SolarFlow</p>
                        <h2 className="text-slate-900 font-bold text-4xl leading-tight mb-5">
                            Nigeria's Most<br />Trusted Solar Brand
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            We don't just sell panels — we design, install, and maintain complete power systems that keep working for decades. Over 2,400 satisfied customers can't be wrong.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                                Book a Free Consultation
                            </a>
                            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 text-sm border border-slate-200 hover:bg-slate-50 transition-all">
                                See Case Studies
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-5 mt-10 pt-8 border-t border-slate-100">
                            {["NAFDAC Approved", "ISO 9001:2015", "NEMSA Certified"].map((b) => (
                                <div key={b} className="flex items-center gap-2 text-sm text-slate-500">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 4.9H15L10.6 9 12.4 14 8 11 3.6 14l1.8-5L1 5.9h5.2L8 1z" fill="#F97316" /></svg>
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {reasons.map(({ icon, title, desc }) => (
                            <div key={title} className="rounded-2xl p-5 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
                                <span className="text-2xl block mb-3">{icon}</span>
                                <h4 className="text-slate-800 font-semibold text-sm mb-1.5 group-hover:text-orange-600 transition-colors">{title}</h4>
                                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}