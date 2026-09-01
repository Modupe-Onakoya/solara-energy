import { assets } from "@/assets/asset"
import Image from "next/image"

export default function Product() {
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
            <div className="space-x-2 grid grid-cols-3">
                <div className="bg-black w-[100%] h-[10px]">

                </div>
                <div className="bg-black w-[100%] h-[10px]">

                </div>
                <div className="bg-black w-[100%] h-[10px]">

                </div>
            </div>
            <input type="range" />
        </div>
    )
}