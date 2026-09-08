"use client"
import { appliances } from "@/data/appliance"
import { useState } from "react"
import { getRecommendation } from "@/utils/recommend"
import { calcKw } from "@/utils/recommend"

export default function SystemRecommendation() {
    const [selected, setSelected] = useState<string[]>([])
    let totalHours = 8
    const getWatts = () => {
        return appliances
            .filter((a) => selected.includes(a.label))
            .reduce((sum, a) => sum + a.watts, 0)
    }
    const rec =
        selected.length > 0
            ? getRecommendation(getWatts()) : null

    const totalW = getWatts()

    function add(label: string) {
        if (selected.includes(label)) {
            setSelected(prev => prev.filter((item) => label !== item))

        }
        else {
            setSelected(prev => [...prev, label])
        }


    }

    const kwh = calcKw(getWatts())



    return (
        <div className="px-4 flex flex-col items-center py-15">

            <p className="text-orange-500">System Designer</p>
            <p className="text-[#0F172A] text-2xl font-bold text-center">What Do You Want to Power?</p>
            <p className="text-center text-gray-500 text-xs">Pick your appliances and we'll instantly recommend the right solar system for you.</p>


            <div className="flex flex-col md:flex-row gap-10 relative py-8">
                <div className="">

                    <div className="grid grid-cols-2 gap-3 py-4 md:grid-cols-3 ">
                        {
                            appliances.map((item, idx) => (
                                <div className={`flex items-center border border-gray-300 rounded-lg justify-center gap-2 px-2 py-2 ${selected.includes(item.label) ? "border-orange-200 bg-orange-50" : ""}`} key={idx} onClick={() => {
                                    add(item.label)
                                    // getWatts(item.watts)
                                }}>
                                    <p>{item.icon}</p>
                                    <div className="flex flex-col ">
                                        <span className="text-[12px] font-medium">{item.label}</span>
                                        <span className="text-[10px]">{item.watts}</span>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                    {selected.length > 0 && <div className="flex w-full gap-3 border border-gray-300 bg-gray-100 px-2 py-4 rounded-lg mt-10">
                        <div className="flex flex-col  w-1/3 ">
                            <span className=" text-[10px]">Total Load</span>
                            <span className="font-bold text-center">
                                {getWatts()}
                            </span>
                        </div>
                        <span className="w-[1px] h-5 border border-gray-300 my-auto "></span>
                        <div className="flex flex-col w-1/3  ">
                            <span className=" text-[10px]">Daily Usage</span>
                            <span className="font-bold text-center">
                                {kwh}kwh
                            </span>
                        </div >
                        <span className="w-[1px] h-5 border border-gray-300 my-auto"></span>

                        <div className="flex flex-col w-1/3">
                            <span className="text-[10px]">
                                Appliances
                            </span>
                            <span className="font-bold text-center">
                                {selected.length}
                            </span>
                        </div>
                    </div>}
                </div>


                {/* <div className="flex-1">
                    {recommendation ? (
                        // show recommendation when appliances selected
                        <div
                            className="rounded-xl p-6 text-white h-full"
                            style={{ backgroundColor: recommendation.color }}
                        >
                            <p className="text-3xl mb-3">{recommendation.emoji}</p>
                            <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
                                Recommended System
                            </p>
                            <h3 className="text-xl font-bold mt-1 mb-4">
                                {recommendation.system}
                            </h3>

                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="opacity-70">☀️ Panels:</span>
                                    <span className="font-medium">{recommendation.panel}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="opacity-70">🔋 Battery:</span>
                                    <span className="font-medium">{recommendation.battery}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="opacity-70">⚡ Inverter:</span>
                                    <span className="font-medium">{recommendation.inverter}</span>
                                </div>
                            </div>

                            <div className="bg-white/20 rounded-lg px-4 py-3 mb-4">
                                <p className="text-xs opacity-80">Estimated Cost</p>
                                <p className="text-2xl font-bold">{recommendation.price}</p>
                            </div>

                            <p className="text-xs opacity-70 mb-4">
                                Total load: { }W
                            </p>

                            <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                                View This Package →
                            </button>
                        </div>
                    ) : (
                        // empty state — no appliances selected yet
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center">
                            <p className="text-4xl mb-3">🌤️</p>
                            <p className="text-gray-500 text-sm max-w-xs">
                                Select the appliances you want to power and your system recommendation will appear here
                            </p>
                        </div>
                    )}
                </div> */}

                {/* Recommendation panel */}
                <div className="lg:col-span-2 sticky top-24 py-4">
                    {!rec ? (
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center py-16 px-8 text-center">
                            <span className="text-4xl mb-3">☀️</span>
                            <p className="text-slate-500 text-sm">Select the appliances you want to power and your system recommendation will appear here.</p>
                        </div>
                    ) : (
                        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            {/* Card header */}
                            <div className="px-6 py-5" style={{ backgroundColor: "#0F172A" }}>
                                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Recommended System</p>
                                <p className="text-white font-bold text-xl">{rec.system}</p>
                                <p className="font-bold text-2xl mt-1" style={{ color: rec.color }}>{rec.price}</p>
                            </div>

                            <div className="bg-white px-6 py-5 space-y-3">
                                {[
                                    { label: "Solar Panels", value: rec.panel },
                                    { label: "Battery", value: rec.battery },
                                    { label: "Inverter", value: rec.inverter },
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex items-start justify-between gap-3 py-2.5 border-b border-slate-100 last:border-0">
                                        <span className="text-slate-400 text-sm shrink-0">{label}</span>
                                        <span className="text-slate-800 font-medium text-sm text-right">{value}</span>
                                    </div>
                                ))}

                                {/* Selected appliances recap */}
                                <div className="pt-2">
                                    <p className="text-slate-500 text-xs mb-2">Powers your selected items:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {appliances.filter((a) => selected.includes(a.label)).map((a) => (
                                            <span key={a.id} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                                                {a.icon} {a.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-3 space-y-2">
                                    <a
                                        href="#pay-small"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110"
                                        style={{ backgroundColor: "#F97316" }}
                                    >
                                        See Payment Plans
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-slate-600 text-sm border border-slate-200 hover:bg-slate-50 transition-all"
                                    >
                                        Get Exact Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}
