// src/utils/calculator.ts
import { recommmendation } from "@/data/recommendation"
import { Recommendation } from "@/types"

// export function getRecommendation(totalWatts: number): Recommendation | null {
//     if (totalWatts === 0) return null

//     if (totalWatts <= 400) return {
//         system: "Starter Home — 1.5kW",
//         price: "From ₦450,000",
//         panel: "2× 370W Mono PERC Panels",
//         battery: "200Ah Gel Battery",
//         inverter: "1.5kVA Hybrid Inverter",
//         color: "#10B981",
//         emoji: "🏠",
//     }

//     if (totalWatts <= 1000) return {
//         system: "Family Home — 3kW",
//         price: "From ₦850,000",
//         panel: "4× 370W Mono PERC Panels",
//         battery: "200Ah × 2 Lithium Battery",
//         inverter: "3.5kVA Hybrid Inverter",
//         color: "#F97316",
//         emoji: "🏡",
//     }

//     if (totalWatts <= 2500) return {
//         system: "Premium Home — 5kW",
//         price: "From ₦1,500,000",
//         panel: "8× 370W Mono PERC Panels",
//         battery: "10kWh Lithium Pack",
//         inverter: "5kVA Hybrid Inverter",
//         color: "#0EA5E9",
//         emoji: "🏘️",
//     }

//     return {
//         system: "Business — 10kW+",
//         price: "From ₦3,200,000",
//         panel: "16× 370W Panels",
//         battery: "20kWh Lithium Bank",
//         inverter: "10kVA Hybrid Inverter",
//         color: "#8B5CF6",
//         emoji: "🏢",
//     }
// }

export function getRecommendation(totalWatts: number) {
    return recommmendation.find(p => totalWatts <= p.maxWatts) ?? recommmendation[recommmendation.length - 1]

}