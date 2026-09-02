
export interface NavProduct {
    item: string
    href: string
}

export interface NavItem {
    navHeading: string,
    products: NavProduct[]
}

export interface Products {
    product: string
    desc: string
    status: string
}