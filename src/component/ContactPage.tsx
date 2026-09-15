"use client"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white ">
            <div style={{ backgroundColor: "#0F172A" }}>
                <div className="max-w-7xl mx-auto px-6 py-14 text-center">
                    <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">Contact Us</p>
                    <h1 className="text-white font-bold text-5xl mb-3">We're Here to Help</h1>
                    <p className="text-slate-400 text-lg">Reach us through any of the channels below — or fill the form and we'll call you back.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Contact info */}
                    <div className="space-y-6">
                        {[
                            { icon: "📞", title: "Call Us", lines: ["0901-234-5678", "0802-345-6789", "Mon–Sat, 8am–6pm"] },
                            { icon: "📧", title: "Email Us", lines: ["hello@solarflow.ng", "support@solarflow.ng", "We reply within 24 hours"] },
                            { icon: "📍", title: "Head Office", lines: ["12 Adeola Hopewell Street", "Victoria Island, Lagos", "Open Mon–Fri 9am–5pm"] },
                        ].map(({ icon, title, lines }) => (
                            <div key={title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50">
                                <span className="text-2xl shrink-0">{icon}</span>
                                <div>
                                    <p className="text-slate-800 font-semibold text-sm mb-1">{title}</p>
                                    {lines.map((l) => <p key={l} className="text-slate-500 text-sm">{l}</p>)}
                                </div>
                            </div>
                        ))}

                        <div className="p-5 rounded-2xl border border-slate-100">
                            <p className="text-slate-700 font-semibold text-sm mb-3">Other Offices</p>
                            {[["Abuja", "3 Aminu Kano Cres, Wuse II"], ["Port Harcourt", "15 Aba Road, GRA Phase 2"], ["Kano", "22 Zoo Road, Kano Municipal"]].map(([city, addr]) => (
                                <div key={city} className="mb-2 last:mb-0">
                                    <p className="text-slate-700 text-sm font-medium">{city}</p>
                                    <p className="text-slate-400 text-xs">{addr}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-slate-100 shadow-sm p-8">
                            <h3 className="text-slate-900 font-bold text-xl mb-6">Send Us a Message</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div><label className="text-slate-600 text-xs font-semibold block mb-1.5">Full Name *</label><input required type="text" placeholder="Adaeze Okonkwo" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors" /></div>
                                    <div><label className="text-slate-600 text-xs font-semibold block mb-1.5">Phone Number *</label><input required type="tel" placeholder="0901-234-5678" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors" /></div>
                                </div>
                                <div><label className="text-slate-600 text-xs font-semibold block mb-1.5">Email Address</label><input type="email" placeholder="adaeze@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors" /></div>
                                <div><label className="text-slate-600 text-xs font-semibold block mb-1.5">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors bg-white">
                                        <option>General Enquiry</option><option>Get a Quote</option><option>After-Sales Support</option><option>Installer Partnership</option><option>Complaint</option>
                                    </select>
                                </div>
                                <div><label className="text-slate-600 text-xs font-semibold block mb-1.5">Message *</label>
                                    <textarea required rows={5} placeholder="Tell us how we can help you..." className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors resize-none placeholder-slate-400" />
                                </div>
                                <button type="submit" className="w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
