
import { ReactNode } from "react"

export interface NavProduct {
    item: string
    href: string
}

export interface NavItem {
    navHeading: string,
    products: NavProduct[]
}

export interface Products {
    name: string
    tagline: string
    desc: string
    price: string
    image: string
    badge: string | null
    color: string
}

export interface solution {
    icon: ReactNode
    title: string
    desc: string
    features: string[]
    image: string
}

export interface Appliance {
    id: string;
    label: string;
    icon: string;
    watts: number;
    qty: number;
    unit: string;
}

export interface Recommendation {
    maxWatts: number
    system: string
    price: string
    panel: string
    battery: string
    inverter: string
    color: string
    emoji: string
}