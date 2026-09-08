export default function Consultation() {
    return (
        <section className="py-20" style={{ backgroundColor: "#0F172A" }}>
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    <span className="text-orange-400 text-xs font-semibold tracking-wide uppercase">Limited Free Consultations This Month</span>
                </div>

                <h2 className="text-white font-bold leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    Ready to Stop Paying<br />
                    <span style={{ color: "#F97316" }}>NEPA Bills Forever?</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Get a custom solar design and quote — completely free. Our energy consultants will call you within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110"
                        style={{ backgroundColor: "#F97316" }}
                    >
                        Get My Free Quote
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                    <a
                        href="tel:+2349012345678"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 11.33A1.33 1.33 0 0112.67 12.67C10.93 12.67 4 7 4 4.67A1.33 1.33 0 015.33 3.33L6.67 5.33 5.67 6.67C6.5 8 8.5 9.5 10 10.33l1.33-1 2 1.33z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Call: 0901-234-5678
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                    {["No upfront cost for quote", "Response within 24hrs", "Certified installers only", "100% satisfaction guarantee"].map((t) => (
                        <div key={t} className="flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            {t}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
