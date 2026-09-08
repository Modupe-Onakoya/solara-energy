import { Brackets } from "@/types";

export const brackets: Brackets[] = [
    { label: "Under ₦5,000", value: 3000, tag: "Very Low Usage" },
    { label: "₦5,000 - ₦15,000", value: 10000, tag: "Low Usage" },
    { label: "₦15,000 - ₦30,000", value: 22500, tag: "Average Home" },
    { label: "₦30,000 - ₦60,000", value: 45000, tag: "Medium-High" },
    { label: "₦60,000 - ₦100,000", value: 80000, tag: "High Usage" },
    { label: "Above ₦100,000", value: 130000, tag: "Business / Large Home" },
];