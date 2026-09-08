const footerLinks = {
    Products: ["Solar Panels", "Solar Batteries", "Solar Inverters", "All-in-One Generator", "Street Lights"],
    Solutions: ["Home Solar Systems", "Business Solar Systems", "Solar Home Appliances"],
    Company: ["About Us", "Our Impact", "News & Blog", "Careers", "Contact Us"],
    Support: ["Book an Installer", "Become an Installer", "FAQs", "Warranty Policy", "Store Locations"],
};

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#020617" }}>
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="3.5" fill="white" />
                                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                                        <line key={i} x1="8" y1="8"
                                            x2={8 + 6.5 * Math.cos((deg * Math.PI) / 180)}
                                            y2={8 + 6.5 * Math.sin((deg * Math.PI) / 180)}
                                            stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                        />
                                    ))}
                                </svg>
                            </span>
                            <span className="text-white font-bold text-lg">SolarFlow</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            Nigeria's leading solar energy company. Powering homes and businesses since 2018.
                        </p>
                        <div className="flex gap-3">
                            {["twitter", "facebook", "instagram", "linkedin"].map((s) => (
                                <a key={s} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 hover:bg-orange-500 transition-colors">
                                    <span className="text-white text-xs font-bold">{s[0].toUpperCase()}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading}>
                            <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact bar */}
                <div className="border-t border-white/5 pt-8 mb-8 grid sm:grid-cols-3 gap-5 text-sm text-slate-400">
                    <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5zm0 6a2 2 0 110-4 2 2 0 010 4z" fill="#F97316" /></svg>
                        <span>12 Adeola Hopewell St, Victoria Island, Lagos</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 11.33A1.33 1.33 0 0112.67 12.67C10.93 12.67 4 7 4 4.67A1.33 1.33 0 015.33 3.33L6.67 5.33 5.67 6.67C6.5 8 8.5 9.5 10 10.33l1.33-1 2 1.33z" stroke="#F97316" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span>0901-234-5678 / 0802-345-6789</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm0 0l6 5 6-5" stroke="#F97316" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span>hello@solarflow.ng</span>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© 2025 SolarFlow Energy Ltd. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
