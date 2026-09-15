"use client"

const team = [
    { name: "Tunde Adeyemi", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1713942590368-09cfc6ae94ce?w=200&h=200&fit=crop&auto=format" },
    { name: "Ngozi Okafor", role: "Chief Engineer", img: "https://images.unsplash.com/photo-1758687126877-b37052a20a4d?w=200&h=200&fit=crop&auto=format" },
    { name: "Bayo Salami", role: "Head of Installations", img: "https://images.unsplash.com/photo-1622790410882-c1f00a56083e?w=200&h=200&fit=crop&auto=format" },
];

const milestones = [
    { year: "2018", event: "SolarFlow founded in Lagos with 3 engineers and a vision to power Nigeria cleanly." },
    { year: "2019", event: "First 100 home installations completed across Lagos State." },
    { year: "2020", event: "Expanded to Abuja and Port Harcourt. Launched the Pay Small Small financing programme." },
    { year: "2021", event: "Reached 500 installations. Launched our certified installer training programme." },
    { year: "2022", event: "Partnership with 3 international panel manufacturers. Opened our first solar showroom." },
    { year: "2023", event: "2,000th installation milestone. Expanded to 30+ cities nationwide." },
    { year: "2024", event: "Launched commercial & industrial division. Fleet of 80+ certified installers." },
    { year: "2025", event: "2,400+ homes and businesses powered. 15MW total capacity installed." },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative pt-16 overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
                <img src="https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?w=1400&h=500&fit=crop&auto=format" alt="Team installing solar" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0F172A 55%, rgba(15,23,42,0.4) 100%)" }} />
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">About SolarFlow</p>
                    <h1 className="text-white font-bold text-5xl mb-5 max-w-2xl">Nigeria's Most Trusted Solar Energy Company</h1>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">Founded in 2018, SolarFlow has grown from a 3-person startup to Nigeria's leading solar installation company — with 2,400+ powered homes, 80+ certified installers, and a mission to make clean energy accessible to every Nigerian.</p>
                </div>
            </div>

            {/* Stats */}
            <div style={{ backgroundColor: "#0F172A" }}>
                <div className="max-w-7xl mx-auto px-6 pb-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
                        {[["2,400+", "Homes Powered"], ["15 MW", "Capacity Installed"], ["80+", "Certified Installers"], ["30+", "Cities Covered"]].map(([v, l]) => (
                            <div key={l} className="flex flex-col items-center py-8 bg-slate-900/80 text-center">
                                <span className="text-3xl font-bold text-white">{v}</span>
                                <span className="text-slate-400 text-sm mt-1">{l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
                        <h2 className="text-slate-900 font-bold text-4xl mb-5">Making Clean Energy<br />Accessible to All</h2>
                        <p className="text-slate-500 text-base leading-relaxed mb-4">Nigeria has more sunshine than almost any country on earth — yet 85 million Nigerians lack reliable electricity. We believe that's not an energy shortage. It's a distribution and affordability problem. We're fixing it.</p>
                        <p className="text-slate-500 text-base leading-relaxed mb-6">Every system we install offsets ~3 tonnes of CO₂ per year. Every installer we train creates a sustainable livelihood. Every family we power keeps more money in their pocket and less in fuel tanks.</p>
                        <div className="flex flex-wrap gap-4">
                            {["NAFDAC Approved", "ISO 9001:2015", "NEMSA Certified", "NESREA Compliant"].map((b) => (
                                <div key={b} className="flex items-center gap-2 text-sm text-slate-600 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 4h4l-3.3 2.4 1.3 4L7 9 3.5 11.4l1.3-4L1.5 5h4z" fill="#F97316" /></svg>
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 h-80">
                        <div className="rounded-2xl overflow-hidden row-span-2"><img src="https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=400&h=500&fit=crop&auto=format" alt="Installers" className="w-full h-full object-cover" /></div>
                        <div className="rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1589276534126-adef63a95e05?w=400&h=240&fit=crop&auto=format" alt="Solar panels" className="w-full h-full object-cover" /></div>
                        <div className="rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=400&h=240&fit=crop&auto=format" alt="Home solar" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2 text-center">Our Journey</p>
                    <h2 className="text-slate-900 font-bold text-4xl mb-12 text-center">How We Got Here</h2>
                    <div className="relative">
                        <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-200" />
                        <div className="space-y-8">
                            {milestones.map(({ year, event }) => (
                                <div key={year} className="flex gap-8 items-start relative">
                                    <div className="w-12 text-right shrink-0">
                                        <span className="text-orange-500 font-bold text-sm">{year}</span>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-orange-500 bg-white shrink-0 relative z-10 mt-0.5" />
                                    <p className="text-slate-600 text-sm leading-relaxed pt-0.5">{event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2 text-center">Leadership</p>
                    <h2 className="text-slate-900 font-bold text-4xl mb-12 text-center">The Team Behind SolarFlow</h2>
                    <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        {team.map(({ name, role, img }) => (
                            <div key={name} className="text-center">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 bg-slate-200">
                                    <img src={img} alt={name} className="w-full h-full object-cover" />
                                </div>
                                <p className="text-slate-900 font-bold text-base">{name}</p>
                                <p className="text-slate-400 text-sm mt-0.5">{role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
