
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