"use client"
import { useState, useEffect } from "react"
import Company_logo from "./Company_logo"
import Image from "next/image"
import { assets } from "@/assets/asset"
import { allproducts } from "@/data/navbar"
export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openArrow, setOpenArrow] = useState<number | null>(null)
    const [desktopNav, setDesktopNav] = useState<string>("")


    // useEffect(() => {
    //     const handleClickOutside = () => setOpenArrow(null)
    //     document.addEventListener("click", handleClickOutside)
    //     return () => document.removeEventListener("click", handleClickOutside)
    // }, [])

    return (
        <nav className="bg-[#0F172A] px-4 py-3 md:px-16 ">
            <div className="md:flex  justify-between items-center ">
                <div id="logo-bugger" className="flex  justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Company_logo />
                        <span className="font-bold text-white text-lg ">SolaraEnergy</span>
                    </div>
                    <button className="space-y-[5px] outline-none  md:hidden" onClick={() => setOpenMenu(!openMenu)}>
                        <div className={`bg-white w-[18px] h-[2px] transition-all duration-300 outline-none ${openMenu ? "rotate-45 translate-y-[7px]" : ""} `}></div>
                        <div className={`bg-white w-[18px] h-[2px] transition-all duration-300 outline-none ${openMenu ? "opacity-0" : ""} `}></div>
                        <div className={`bg-white w-[18px] h-[2px] transition-all duration-300 outline-none ${openMenu ? "-rotate-45 -translate-y-[7px]" : ""} `}></div>
                    </button>
                </div>
                {/* desktop */}
                <div className="md:flex hidden gap-6 items-center">
                    {allproducts.map((product, idx) => (
                        <div key={idx} className="relative cursor-pointer" onMouseEnter={() => setDesktopNav(product.navHeading)} onMouseLeave={() => setDesktopNav("")}>
                            <div className="flex items-center gap-2">
                                <span className="text-white z-10 hover:text-orange-500 text-xs lg:text-sm">{product.navHeading}</span>
                                {product.navHeading !== "Contact" ? <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className={`w-3 h-3 transition-all duration-300 ${desktopNav === product.navHeading ? "rotate-180" : ""}`} /> : null}
                            </div>
                            {
                                desktopNav === product.navHeading && product.navHeading !== "Contact" ?
                                    <div className="absolute top-full text-xs bg-white w-[100px] pl-2 py-2 space-y-4 rounded-lg" >
                                        {product.products.map((pro, idx) => (
                                            <div key={idx} className="">
                                                <p>{pro.item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    : null
                            }
                        </div>

                    ))}
                </div>
                <div className="flex px-4  justify-center items-center bg-orange-500 py-1 hidden md:flex rounded-lg gap-2">
                    <span className="text-white text-xs lg:text-sm ">
                        Get Quote
                    </span>
                    <Image src={assets.arrowRight} alt="arrow-right" width={20} height={20} className="w-3 h-3" />
                </div>
                {/* mobile */}
                <div id="drop-down" className={`md:hidden bg-[#0F172A] absolute py-5 text-white left-0 right-0 top-12 px-4 transition-all duration-100 -z-10 space-y-5 ${openMenu ? "translate-y-0 z-10" : "-translate-y-[100%]"} `}>
                    {allproducts.map((product, idx) => (
                        <div className="relative w-full z-100" key={idx} onClick={(e) => {
                            e.stopPropagation()
                            setOpenArrow(prev => prev === idx ? null : idx)
                        }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm">{product.navHeading}</span>
                                <div>
                                    {product.navHeading !== "Contact" && <Image src={assets.arrowDown} alt="Arrow down" width={20} height={20} className={`${idx === openArrow ? "rotate-180" : ""} w-3 h-3`} />}
                                </div>
                            </div>
                            {idx === openArrow &&
                                <div className="px-5  space-y-4 py-2">

                                    {product.navHeading !== "Contact" && product.products.map((pro, id) => (

                                        <div className="flex gap-2 items-center" key={id}>
                                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                                            <span className="text-xs">{pro.item}</span>
                                        </div>
                                    ))}
                                </div>

                            }
                        </div>

                    ))}
                    <div className="flex w-full justify-center gap-2 items-center bg-orange-500 py-2 rounded-lg">
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