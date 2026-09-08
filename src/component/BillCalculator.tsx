"use client"
import { brackets } from "@/data/billCalculator";
import { useState } from "react"

const NAIRA_PER_KWH = 225; // current NEPA tariff estimate
const SOLAR_SAVINGS_PCT = 0.87;

function getSystemRec(monthlyBill: number) {
    if (monthlyBill < 8000) return { name: "Starter 1.5kW", price: 450000, payback: 3.5 };
    if (monthlyBill < 25000) return { name: "Family 3kW", price: 850000, payback: 3.2 };
    if (monthlyBill < 60000) return { name: "Premium 5kW", price: 1500000, payback: 2.9 };
    return { name: "Commercial 10kW+", price: 3200000, payback: 2.5 };
}

export default function BillCalculator() {
    const [selected, setSelected] = useState<number | null>(null);
    const [custom, setCustom] = useState("");

    const bill = selected !== null
        ? brackets[selected].value
        : custom ? parseInt(custom.replace(/[^0-9]/g, "")) || 0 : 0;

    const annualBill = bill * 12;
    const annualSavings = Math.round(annualBill * SOLAR_SAVINGS_PCT);
    const monthlySavings = Math.round(bill * SOLAR_SAVINGS_PCT);
    const rec = bill > 0 ? getSystemRec(bill) : null;
    const paybackYears = rec ? rec.payback : 0;
    const twentyYrSavings = rec ? Math.round(annualSavings * 20 - rec.price) : 0;

    return (
        <section className="py-20" style={{ backgroundColor: "#0F172A" }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">Electricity Cost Calculator</p>
                    <h2 className="text-white font-bold text-4xl mb-3">How Much Are You Spending?</h2>
                    <p className="text-slate-400 text-lg max-w-lg mx-auto">
                        Tell us your monthly electricity bill and we'll show you exactly how much solar could save you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left — bill selector */}
                    <div className="space-y-6">
                        <p className="text-slate-300 text-sm font-medium">Select your average monthly electricity bill:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {brackets.map((b, i) => (
                                <button
                                    key={b.label}
                                    onClick={() => { setSelected(i); setCustom(""); }}
                                    className={`flex flex-col items-start px-4 py-3.5 rounded-xl border text-left transition-all ${selected === i
                                        ? "border-orange-500 bg-orange-500/10 shadow-sm"
                                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                                        }`}
                                >
                                    <span className={`text-sm font-semibold ${selected === i ? "text-orange-400" : "text-white"}`}>{b.label}</span>
                                    <span className="text-xs text-slate-400 mt-0.5">{b.tag}</span>
                                </button>
                            ))}
                        </div>

                        <div>
                            <p className="text-slate-400 text-sm mb-2">Or enter your exact amount:</p>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-sm">₦</span>
                                <input
                                    type="text"
                                    value={custom}
                                    onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                                    placeholder="e.g. 42,000"
                                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm outline-none focus:border-orange-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Context blurb */}
                        {bill > 0 && (
                            <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 space-y-2">
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    At ₦{bill.toLocaleString()}/month you're spending{" "}
                                    <span className="text-white font-semibold">₦{annualBill.toLocaleString()}/year</span>{" "}
                                    on electricity. Over the next 5 years that's{" "}
                                    <span className="text-orange-400 font-bold">₦{(annualBill * 5).toLocaleString()}</span>{" "}
                                    — most of which solar could eliminate.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right — savings output */}
                    <div>
                        {!rec ? (
                            <div className="rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center py-20 px-8 text-center">
                                <span className="text-4xl mb-3">💡</span>
                                <p className="text-slate-400 text-sm">Select your electricity bill above to see your potential savings.</p>
                            </div>
                        ) : (
                            <div className="rounded-2xl overflow-hidden">
                                {/* Savings hero */}
                                <div className="px-7 py-7 rounded-2xl mb-4" style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" }}>
                                    <p className="text-orange-100 text-xs uppercase tracking-widest mb-1">Your Monthly Saving</p>
                                    <p className="text-white font-bold" style={{ fontSize: "3rem", lineHeight: 1 }}>
                                        ₦{monthlySavings.toLocaleString()}
                                    </p>
                                    <p className="text-orange-100 text-sm mt-2">That's ₦{annualSavings.toLocaleString()} every year</p>
                                </div>

                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {[
                                        { label: "Payback Period", value: `~${paybackYears} yrs`, sub: "System pays for itself" },
                                        { label: "20-Year Net Gain", value: `₦${(twentyYrSavings / 1000000).toFixed(1)}M`, sub: "After system cost" },
                                        { label: "CO₂ Offset/yr", value: "~3 tonnes", sub: "Equivalent to 150 trees" },
                                        { label: "Bill Reduction", value: "87%", sub: "Average across our users" },
                                    ].map(({ label, value, sub }) => (
                                        <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                                            <p className="text-slate-400 text-xs mb-1">{label}</p>
                                            <p className="text-white font-bold text-xl">{value}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Recommended system */}
                                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 mb-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Recommended System</p>
                                            <p className="text-white font-semibold">{rec.name}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-slate-400 text-xs mb-0.5">Starting from</p>
                                            <p className="text-orange-400 font-bold text-lg">₦{rec.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="#pay-small"
                                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110"
                                        style={{ backgroundColor: "#F97316" }}
                                    >
                                        See Payment Plans
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm border border-white/20 hover:bg-white/10 transition-all"
                                    >
                                        Get Free Quote
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
