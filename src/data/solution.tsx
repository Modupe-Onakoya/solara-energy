import { solution } from "@/types";

export const solutions: solution[] = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 22h20M6 22V12l8-7 8 7v10" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="11" y="16" width="6" height="6" rx="1" stroke="#F97316" strokeWidth="1.8" />
            </svg>
        ),
        title: "Home Solar Systems",
        desc: "Complete solar setups for 1-bedroom flats to 5-bedroom duplexes. We handle design, installation, and after-sales support.",
        features: ["Free site survey", "Custom system sizing", "Professional installation", "12-month support"],
        image: "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=520&h=360&fit=crop&auto=format",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="6" width="22" height="16" rx="2" stroke="#F97316" strokeWidth="1.8" />
                <path d="M3 11h22" stroke="#F97316" strokeWidth="1.8" />
                <path d="M9 16h4M9 19h6" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        title: "Business Solar Systems",
        desc: "Reduce operating costs and protect your business from power failures. Solutions for offices, factories, and retail stores.",
        features: ["Load analysis & audit", "Scalable capacity", "Remote monitoring", "Priority maintenance"],
        image: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=520&h=360&fit=crop&auto=format",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3v5M14 20v5M3 14h5M20 14h5" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="14" cy="14" r="5" stroke="#F97316" strokeWidth="1.8" />
            </svg>
        ),
        title: "Solar Home Appliances",
        desc: "DC-powered fans, TVs, fridges, and lighting that run directly off solar with zero inverter loss.",
        features: ["No inverter needed", "Ultra-low power draw", "Fits any solar setup", "Extended lifespan"],
        image: "https://images.unsplash.com/photo-1730807908064-c087959dd52c?w=520&h=360&fit=crop&auto=format",
    },
];