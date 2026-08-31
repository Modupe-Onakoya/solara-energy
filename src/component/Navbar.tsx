"use client"

import { useState, useEffect } from "react"
import Company_logo from "./Company_logo"
import Image from "next/image"
import { assets } from "@/assets/asset"


const allproducts = [
    {
        navheading: "Products",
        // product: [{"Solar Panels, Solar Battries, Solar Inverter, All-in-one-solar, Street Lights"]
        products: [{
            item: "Solar Panels",
            url: "/"
        },
        {
            item: " Solar Battries",
            url: "/"
        },
        {
            item: " Solar Inverter",
            url: "/"
        },
        {
            item: "All-in-one-solar",
            url: "/"
        }, {
            item: " Street Lights",
            url: "/"
        },
        ]
    },
    {
        navheading: "Solutions",
        // product: [{"Solar Panels, Solar Battries, Solar Inverter, All-in-one-solar, Street Lights"]
        products: [{
            item: "Home Solar System",
            url: "/"
        },
        {
            item: "Business Solar System",
            url: "/"
        },
        {
            item: "Solar Home Appliance",
            url: "/"
        },

        ]
    },
    {
        navheading: "Installer",
        // product: [{"Solar Panels, Solar Battries, Solar Inverter, All-in-one-solar, Street Lights"]
        products: [{
            item: "Book an installer",
            url: "/"
        },
        {
            item: " Become an installer",
            url: "/"
        },

        ]
    },
    {
        navheading: "About ",
        // product: [{"Solar Panels, Solar Battries, Solar Inverter, All-in-one-solar, Street Lights"]
        products: [{
            item: "Store Locator ",
            url: "/"
        },
        {
            item: "Contact Us",
            url: "/"
        },
        {
            item: "Our Impact",
            url: "/"
        },
        {
            item: "News and Blog",
            url: "/"
        },]
    }, {
        navheading: "Contact",
        // product: [{"Solar Panels, Solar Battries, Solar Inverter, All-in-one-solar, Street Lights"]
        products: [{
            item: " ",
            url: "/"
        },
        {
            item: "",
            url: "/"
        },
        {
            item: "",
            url: "/"
        },
        {
            item: "",
            url: "/"
        }, {
            item: "",
            url: "/"
        },
        ]
    },


]

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openArrow, setOpenArrow] = useState<number | null>(null)

    useEffect(() => {
        const handleClickOutside = () => setOpenArrow(null)
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    return (
        <nav className="bg-[#0F172A] px-4 py-4">
            <div id="mobile-top relative">
                <div id="logo-bugger" className="flex  justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Company_logo />
                        <span className="font-bold text-white text-lg ">SolaraEnergy</span>
                    </div>
                    <button className="space-y-[5px] outline-none" onClick={() => setOpenMenu(!openMenu)}>
                        <div className={`bg-white w-[18px] h-[2px] transition-all duration-300 outline-none ${openMenu ? "rotate-45 translate-y-[7px]" : ""} `}></div>
                        <div className={`bg-white w-[18px] h-[2px] transition-all duration-300 outline-none ${openMenu ? "opacity-0" : ""} `}></div>
                        <div className={`bg-white w-[18px] h-[2px] transition-all duration-300 outline-none ${openMenu ? "-rotate-45 -translate-y-[7px]" : ""} `}></div>
                    </button>
                </div>
                <div id="drop-down" onClick={(e) => e.stopPropagation()} className={` bg-[#0F172A] absolute py-5 text-white left-0 right-0 top-15 px-4 transition-all duration-100 -z-10 space-y-5 ${openMenu ? "translate-y-0 z-10" : "-translate-y-[100%]"} `}>

                    {allproducts.map((product, idx) => (
                        <div className="relative w-full z-100" key={idx} onClick={(e) => setOpenArrow(prev => prev === idx ? null : idx)}>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">{product.navheading}</span>
                                <div className={` ${openArrow ? "" : ""}`} onClick={() => product.navheading === "Contact" ? setOpenArrow(prev => prev === idx ? null : idx) : null}>
                                    {product.navheading !== "Contact" && <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className={`${idx === openArrow ? "rotate-180" : ""} w-3 h-3`} />}
                                </div>
                            </div>
                            {idx === openArrow &&
                                <div className="px-5  space-y-4 py-2">

                                    {product.navheading !== "Contact" && product.products.map((pro, id) => (

                                        <div className="flex gap-2 items-center" key={id}>
                                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                                            <span className="text-xs">{pro.item}</span>
                                        </div>
                                    ))}
                                </div>

                            }
                        </div>

                    ))}
                    <div className="flex w-full justify-center items-center bg-orange-500 py-2 rounded-lg">
                        <span>
                            Get Quote
                        </span>
                        <Image src={assets.arrowRight} alt="arrow-right" width={20} height={20} className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </nav >
    )
}