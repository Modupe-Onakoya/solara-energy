"use client";
import Link from "next/link";
const cities = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Enugu", "Benin City", "Owerri", "Kaduna", "Warri", "Calabar", "Uyo", "Jos", "Maiduguri", "Sokoto"];


export default function BecomeInstaller() {


    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative pt-16 overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
                <img src="https://images.unsplash.com/photo-1635424709961-f3a150459ad4?w=1400&h=500&fit=crop&auto=format" alt="Installers at work" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="relative max-w-7xl mx-auto px-6 py-16">
                    <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Installers</p>
                    <h1 className="text-white font-bold text-5xl mb-4">Work With Certified<br />Solar Experts</h1>
                    <p className="text-slate-300 text-lg max-w-xl">Book a certified installer for your home or business, or join our growing network of trained solar professionals.</p>
                    <div className="flex flex-wrap gap-3 mt-8">
                        <a href="#book" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                            Book an Installer
                        </a>
                        <Link href="/installers/apply" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm border border-white/25 hover:bg-white/10 transition-all">
                            Become an Installer
                        </Link>
                    </div>
                </div>
            </div>

            {/* Book section */}
            <div id="book" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 items-start">
                        <div>
                            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Book an Installer</p>
                            <h2 className="text-slate-900 font-bold text-4xl mb-5">Get Your System Installed Today</h2>
                            <p className="text-slate-500 text-base leading-relaxed mb-6">
                                Our certified technicians are stationed across 30+ Nigerian cities. We'll send a qualified engineer to your location for a free site survey, then schedule your installation at a time that works for you.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: "📍", title: "30+ Cities", desc: "We're in every major city in Nigeria" },
                                    { icon: "📅", title: "7 Days a Week", desc: "Installations run weekdays and weekends" },
                                    { icon: "⚡", title: "Same-Day Install", desc: "Most homes done in a single day" },
                                    { icon: "🛡️", title: "Certified Only", desc: "Every installer is SolarFlow-certified" },
                                ].map(({ icon, title, desc }) => (
                                    <div key={title} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <span className="text-xl shrink-0">{icon}</span>
                                        <div>
                                            <p className="text-slate-800 font-semibold text-sm">{title}</p>
                                            <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm font-semibold mb-3">We're available in:</p>
                            <div className="flex flex-wrap gap-2">
                                {cities.map((c) => (
                                    <span key={c} className="px-3 py-1.5 bg-slate-100 rounded-full text-slate-600 text-xs font-medium">{c}</span>
                                ))}
                            </div>
                        </div>

                        {/* Booking form */}
                        <div className="rounded-2xl border border-slate-100 shadow-sm p-8">
                            <h3 className="text-slate-900 font-bold text-xl mb-6">Request an Installer</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-slate-600 text-xs font-semibold block mb-1.5">First Name</label>
                                        <input type="text" placeholder="Adaeze" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="text-slate-600 text-xs font-semibold block mb-1.5">Last Name</label>
                                        <input type="text" placeholder="Okonkwo" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-slate-600 text-xs font-semibold block mb-1.5">Phone Number</label>
                                    <input type="tel" placeholder="0901-234-5678" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors" />
                                </div>
                                <div>
                                    <label className="text-slate-600 text-xs font-semibold block mb-1.5">Your City</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors bg-white">
                                        <option value="">Select your city</option>
                                        {cities.map((c) => <option key={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-slate-600 text-xs font-semibold block mb-1.5">What system do you have or want?</label>
                                    <textarea rows={3} placeholder="e.g. 3kW system for a 3-bedroom flat in Lekki..." className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors resize-none placeholder-slate-400" />
                                </div>
                                <button type="submit" className="w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                                    Request Installer — Free Site Survey
                                </button>
                                <p className="text-center text-xs text-slate-400">We'll call you within 24 hours to confirm</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Become section */}
            <div className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div className="relative rounded-2xl overflow-hidden h-96">
                            <img src="https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=700&h=500&fit=crop&auto=format" alt="Installer team" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-bold text-2xl">Earn Up to ₦600,000/month</p>
                                <p className="text-slate-300 text-sm mt-1">As a certified SolarFlow installer</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Become an Installer</p>
                            <h2 className="text-slate-900 font-bold text-4xl mb-5">Join Our Network of<br />Solar Professionals</h2>
                            <p className="text-slate-500 text-base leading-relaxed mb-6">
                                Nigeria's solar market is growing at 40% per year. We're looking for electricians, technicians, and entrepreneurs to join our certified installer network — and we'll train you for free.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {["Free training programme", "Job referrals from day 1", "Technical support line", "Certified installer badge", "Tool & equipment loan", "Marketing support"].map((b) => (
                                    <div key={b} className="flex items-center gap-2 text-sm text-slate-600">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#FFF7ED" /><path d="M4.5 7l2 2 3-3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {b}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <Link href="/installers/apply" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                                    Apply Now
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
