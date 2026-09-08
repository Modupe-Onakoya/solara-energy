export default function Installers() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Book an Installer */}
                    <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: "#0F172A", minHeight: 320 }}>
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1635424709961-f3a150459ad4?w=700&h=400&fit=crop&auto=format"
                                alt="Installer at work"
                                className="w-full h-full object-cover opacity-25"
                            />
                            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0F172A 40%, transparent 100%)" }} />
                        </div>
                        <div className="relative p-8 flex flex-col h-full" style={{ minHeight: 320 }}>
                            <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-6" style={{ backgroundColor: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#F97316" /></svg>
                            </div>
                            <h3 className="text-white font-bold text-2xl mb-3">Book an Installer</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-sm">
                                Connect with a certified SolarFlow installer near you. We have trained technicians in 30+ cities across Nigeria — available 7 days a week.
                            </p>
                            <div className="mt-auto">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110"
                                    style={{ backgroundColor: "#F97316" }}
                                >
                                    Find an Installer Near Me
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Become an Installer */}
                    <div className="rounded-2xl border border-slate-100 p-8 flex flex-col" style={{ minHeight: 320 }}>
                        <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-6 bg-orange-50 border border-orange-100">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2a5 5 0 100 10A5 5 0 0012 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" fill="#F97316" /></svg>
                        </div>
                        <h3 className="text-slate-900 font-bold text-2xl mb-3">Become an Installer</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Join our growing network of certified solar installers. We provide training, tools, equipment, and a steady pipeline of jobs. Earn up to ₦600,000/month.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { label: "Free Training", icon: "📚" },
                                { label: "Job Referrals", icon: "💼" },
                                { label: "Technical Support", icon: "🔧" },
                                { label: "Certified Badge", icon: "🏅" },
                            ].map(({ label, icon }) => (
                                <div key={label} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-xl px-4 py-3">
                                    <span>{icon}</span>
                                    <span className="font-medium">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto flex gap-3">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110"
                                style={{ backgroundColor: "#0F172A" }}
                            >
                                Apply Now
                            </a>
                            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-600 text-sm border border-slate-200 hover:bg-slate-50 transition-all">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
