"use client"

import { useState } from "react"
import Company_logo from "./Company_logo"
import Image from "next/image"
import { assets } from "@/assets/asset"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
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
                <div id="drop-down" className={` bg-[#0F172A] absolute py-5 text-white left-0 right-0 top-15 px-4 transition-all duration-100 -z-10 space-y-5 ${openMenu ? "translate-y-0 " : "-translate-y-[100%]"} `}>
                    <div className="flex justify-between">
                        <span>Products</span>
                        <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className="w-3 h-3" />
                    </div>
                    <div className="flex justify-between">
                        <span>Solutions</span>
                        <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className="w-3 h-3" />
                    </div><div className="flex justify-between">
                        <span>Installers</span>
                        <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className="w-3 h-3" />
                    </div><div className="flex justify-between">
                        <span>About</span>
                        <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className="w-3 h-3" />
                    </div><div className="flex justify-between">
                        <span>Contact</span>
                        <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className="w-3 h-3" />
                    </div>
                    <div className="w-full  text-white  bg-[#F97316] py-2 rounded-lg">
                        <button className=" ">Get a quote </button>
                        <Image src={assets.arrowRight} alt="Arrow-right" width={10} height={10} className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </nav >
    )
}