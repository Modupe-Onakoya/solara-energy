"use client"

import { useState } from "react"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav className="bg-[#0F172A] px-4 py-4">
            <div className="flex  justify-between items-center">
                <p className="font-bold text-white">SolaraEnergy</p>
                <div className="space-y-1">
                    <div className="bg-white w-[20px] h-[2px]"></div>
                    <div className="bg-white w-[20px] h-[2px]"></div>
                    <div className="bg-white w-[20px] h-[2px]"></div>

                </div>
            </div>
        </nav>
    )
}