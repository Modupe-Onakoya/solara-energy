
import { brackets } from "@/data/billCalculator";
import { recommmendation } from "@/data/recommendation";
interface rec {
    name: string
    price: number
    payback: number
}

export function getSystemRec(monthlyBill: number) {
    if (monthlyBill < 8000) return { name: "Starter Home — 1.5kW", price: 450000, payback: 3.5 };
    if (monthlyBill < 25000) return { name: "Family Home — 3kW", price: 850000, payback: 3.2 };
    if (monthlyBill < 60000) return { name: "Premium Home — 5kW", price: 1500000, payback: 2.9 };
    return { name: "Business — 10kW+", price: 3200000, payback: 2.5 };
}

export function seePaymentPlan(rec: rec) {
    console.log(recommmendation)
    const system = recommmendation.find((item) => item.system.toLocaleLowerCase().includes("starter"))
    return system

}