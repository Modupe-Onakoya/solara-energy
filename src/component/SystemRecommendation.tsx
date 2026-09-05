"use client"
import { appliances } from "@/data/appliance"
import { useState } from "react"
import { products } from "@/data/product"
import { Products } from "@/types"
import { getRecommendation } from "@/utils/utils"

export default function SystemRecommendation() {
    const [selected, setSelected] = useState<string[]>([])


    // function getWatts(): number {
    //     return appliances
    //         .filter((a) => selected.includes(a.label))
    //         .reduce((sum, a) => sum + a.watts, 0)

    // }
    const getWatts = () => {
        return appliances
            .filter((a) => selected.includes(a.label))
            .reduce((sum, a) => sum + a.watts, 0)
    }


    const recommend = getRecommendation(getWatts())
    function add(label: string) {
        if (selected.includes(label)) {
            setSelected(prev => prev.filter((item) => label !== item))

        }
        else {
            setSelected(prev => [...prev, label])
        }


    }



    return (
        <div className="px-4 flex flex-col items-center">
            <p className="text-orange-500">System Designer</p>
            <p className="text-[#0F172A] text-2xl font-bold text-center">What Do You Want to Power?</p>
            <p className="text-center text-gray-500 text-xs">Pick your appliances and we'll instantly recommend the right solar system for you.</p>
            <div className="flex flex-col md:flex-row gap-10 relative">

                <div className="grid grid-cols-2 gap-3 py-4 md:grid-cols-3 ">
                    {
                        appliances.map((item, idx) => (
                            <div className={`flex items-center border border-gray-300 rounded-lg justify-center gap-2 px-2 py-2 ${selected.includes(item.label) ? "border-orange-200" : ""}`} key={idx} onClick={() => {
                                add(item.label)
                                // getWatts(item.watts)
                            }}>
                                <p>{item.icon}</p>
                                <div className="flex flex-col">
                                    <span className="text-[12px] max-w-[70px] font-medium">{item.label}</span>
                                    <span className="text-[10px]">{item.watts}</span>
                                </div>
                            </div>

                        ))
                    }

                </div>

                <div className="border border-gray-300 bg-gray-200 w-fit h-fit rounded-md px-2 py-2 " >
                    <p className="text-center">
                        🌤️
                    </p>
                    <p className="max-w-md text-center ">
                        Select the appliances you want to power and your system recommendation will appear here
                    </p>
                    <p>{ }</p>
                </div>
                <div>
                    {recommend?.price}
                </div>
            </div>


        </div>
    )
}