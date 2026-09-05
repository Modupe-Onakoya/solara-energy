
import { Recommendation } from "@/types"

export const recommmendation: Recommendation[] = [
    {
        maxWatts: 400,
        system: "Starter Home — 1.5kW",
        price: "From ₦450,000",
        panel: "2× 370W Mono PERC Panels",
        battery: "200Ah Gel Battery",
        inverter: "1.5kVA Hybrid Inverter",
        color: "#10B981",
        emoji: "🏠",
    },
    {
        maxWatts: 1000,
        system: "Family Home — 3kW",
        price: "From ₦850,000",
        panel: "4× 370W Mono PERC Panels",
        battery: "200Ah × 2 Lithium Battery",
        inverter: "3.5kVA Hybrid Inverter",
        color: "#F97316",
        emoji: "🏡",
    },
    {
        maxWatts: 2500,
        system: "Premium Home — 5kW",
        price: "From ₦1,500,000",
        panel: "8× 370W Mono PERC Panels",
        battery: "10kWh Lithium Pack",
        inverter: "5kVA Hybrid Inverter",
        color: "#0EA5E9",
        emoji: "🏘️",
    },
    {
        maxWatts: Infinity,
        system: "Business — 10kW+",
        price: "From ₦3,200,000",
        panel: "16× 370W Panels",
        battery: "20kWh Lithium Bank",
        inverter: "10kVA Hybrid Inverter",
        color: "#8B5CF6",
        emoji: "🏢",
    }

]