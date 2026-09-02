"use client"
import { assets } from "@/assets/asset"
import { Products } from "@/types"
import Image from "next/image"
import { useState } from "react"

const products: Products[] = [
    {
        product: "Solar Panels",
        desc: "Mano PERC & Bifacial",
        status: "new"
    },
    {
        product: "Solar Battery",
        desc: "Mano PERC & Bifacial",
        status: "new"
    }, {
        product: "Solar Inverters",
        desc: "Mano PERC & Bifacial",
        status: "new"
    }, {
        product: "All-in-one solar",
        desc: "Mano PERC & Bifacial",
        status: "new"
    },
    {
        product: "Street-lights ",
        desc: "Mano PERC & Bifacial",
        status: "new"
    },
]

export default function Product() {
    const [num, setNum] = useState(0)

    function change(e: React.ChangeEvent<HTMLInputElement>) {
        setNum(Number(e.target.value))
    }
    return (
        <div className="px-4 pt-30">
            <p className="text-orange-500 text-sm">
                Our Products
            </p>
            <p className="font-bold text-[#0F172A] text-3xl py-3">
                Built for the Sun, Made for You
            </p>
            <div className="flex gap-2">
                <span>View Produtcs</span>
                <Image src={assets.arrowRight} height={20} width={20} alt="right-arrow" className="w-3 h-3" />
            </div>

            {/* <div
                className="flex w-[400%] transition-transform duration-500"
                style={{
                    transform: `translateX(-${num * 25}%)`
                }}
            >

                <div className="bg-green-800 w-1/3 h-[10px] translateX-[200%] ">

                </div>
                <div className="bg-blue-800 w-1/3 h-[10px]">

                </div>
                <div className="bg-black w-1/3 h-[10px]">

                </div>
                <div className="bg-black w-1/3 h-[10px]">

                </div>
            </div>

            <input type="range" min={0} max={3} value={num} onChange={change} /> */}
            <div className="flex gap-2 w-[400%] ">
                {products.map((product, idx) => (
                    <div key={idx} className="flex border border-gray-300 px-2 w-[25%] py-2 rounded-md justify-between overflow-hidden ">
                        <div className="">
                            <p className="font-bold text-sm">{product.product}</p>
                            <p className="text-xs text-gray-500"> {product.desc}</p>
                        </div>
                        <div>
                            <span>{product.status}</span>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
// translateX(-${ num * 100} %)