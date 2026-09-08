"use client"
import { useState } from "react";

const plans = [
    { months: 6, label: "6 Months", tag: "Quick Clear", tagColor: "#10B981" },
    { months: 12, label: "12 Months", tag: "Most Popular", tagColor: "#F97316" },
    { months: 24, label: "24 Months", tag: "Lowest Monthly", tagColor: "#0EA5E9" },
];

const systems = [
    { name: "Starter Home", price: 450000, capacity: "1.5kW", powers: ["Lights & fans (6 rooms)", "Phone & laptop charging", "Small TV", "DSTV decoder"] },
    { name: "Family Home", price: 850000, capacity: "3kW", powers: ["All lighting & fans", "Large LED TV", "Fridge (single door)", "Washing machine", "Phone & laptop charging"] },
    { name: "Premium Home", price: 1500000, capacity: "5kW", powers: ["Everything in Family", "Double-door fridge", "Air conditioner (1 unit)", "Deep freezer", "Water pump"] },
    { name: "Business", price: 3200000, capacity: "10kW", powers: ["Full office load", "Multiple ACs", "Industrial equipment", "Cold room / freezers", "Security systems"] },
];

function formatNaira(n: number) {
    return "₦" + n.toLocaleString("en-NG");
}

export default function PaySmallSmall() {
    const [selectedPlan, setSelectedPlan] = useState(1);
    const [selectedSystem, setSelectedSystem] = useState(1);
    const system = systems[selectedSystem];
    const months = plans[selectedPlan].months;
    const deposit = Math.round(system.price * 0.3);
    const balance = system.price - deposit;
    const monthly = Math.round(balance / months);

    return (
        <section id="pay-small" className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Pay Small Small</p>
                    <h2 className="text-slate-900 font-bold text-4xl mb-3">Solar Now, Pay Later</h2>
                    <p className="text-slate-500 text-lg max-w-lg mx-auto">
                        30% deposit, then spread the rest over 6, 12, or 24 months — zero interest, zero hidden fees.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left — configurator */}
                    <div className="space-y-7">
                        {/* Step 1: Pick system */}
                        <div>
                            <p className="text-slate-700 font-semibold text-sm mb-3">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs text-white mr-2" style={{ backgroundColor: "#F97316" }}>1</span>
                                What do you want to power?
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {systems.map((s, i) => (
                                    <button
                                        key={s.name}
                                        onClick={() => setSelectedSystem(i)}
                                        className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all ${selectedSystem === i
                                            ? "border-orange-500 bg-orange-50 shadow-sm"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        <span className={`text-sm font-semibold ${selectedSystem === i ? "text-orange-600" : "text-slate-800"}`}>{s.name}</span>
                                        <span className="text-xs text-slate-400 mt-0.5">{s.capacity} system</span>
                                        <span className={`text-base font-bold mt-2 ${selectedSystem === i ? "text-orange-500" : "text-slate-700"}`}>{formatNaira(s.price)}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 2: Plan */}
                        <div>
                            <p className="text-slate-700 font-semibold text-sm mb-3">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs text-white mr-2" style={{ backgroundColor: "#F97316" }}>2</span>
                                Choose your payment plan
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                {plans.map((plan, i) => (
                                    <button
                                        key={plan.months}
                                        onClick={() => setSelectedPlan(i)}
                                        className={`relative flex flex-col items-center p-4 rounded-xl border transition-all ${selectedPlan === i
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        {selectedPlan === i && (
                                            <span
                                                className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
                                                style={{ backgroundColor: plan.tagColor }}
                                            >
                                                {plan.tag}
                                            </span>
                                        )}
                                        <span className={`text-lg font-bold ${selectedPlan === i ? "text-orange-500" : "text-slate-800"}`}>{plan.months}</span>
                                        <span className="text-xs text-slate-400">months</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* What gets powered */}
                        <div className="bg-white rounded-xl border border-slate-100 p-5">
                            <p className="text-slate-700 font-semibold text-sm mb-3">What this system powers:</p>
                            <ul className="grid grid-cols-2 gap-2">
                                {system.powers.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#FFF7ED" /><path d="M4.5 7l2 2 3-3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right — payment summary */}
                    <div className="sticky top-24">
                        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            {/* Header */}
                            <div className="px-7 py-5" style={{ backgroundColor: "#0F172A" }}>
                                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Your Payment Summary</p>
                                <p className="text-white font-bold text-2xl">{system.name} — {system.capacity}</p>
                            </div>

                            <div className="bg-white px-7 py-6 space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <span className="text-slate-500 text-sm">Total system cost</span>
                                    <span className="text-slate-900 font-semibold">{formatNaira(system.price)}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <span className="text-slate-500 text-sm">Initial deposit (30%)</span>
                                    <span className="text-slate-900 font-semibold">{formatNaira(deposit)}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <span className="text-slate-500 text-sm">Balance spread over</span>
                                    <span className="text-slate-900 font-semibold">{months} months</span>
                                </div>

                                {/* Monthly highlight */}
                                <div className="rounded-xl p-5 text-center" style={{ backgroundColor: "#FFF7ED" }}>
                                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Monthly Payment</p>
                                    <p className="font-bold text-4xl" style={{ color: "#F97316" }}>{formatNaira(monthly)}</p>
                                    <p className="text-slate-400 text-xs mt-1">for {months} months — 0% interest</p>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    {["No interest", "No hidden fees", "Cancel anytime"].map((b) => (
                                        <span key={b} className="flex-1 text-center text-xs font-medium text-slate-500 bg-slate-50 rounded-lg px-2 py-2">{b}</span>
                                    ))}
                                </div>

                                <a
                                    href="#"
                                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110 mt-2"
                                    style={{ backgroundColor: "#F97316" }}
                                >
                                    Apply for This Plan
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                                <p className="text-center text-xs text-slate-400">Approval in 24hrs · No credit card needed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
