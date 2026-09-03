"use client"

import { useState } from "react"
import { products } from "@/data/product"

export default function Practise() {

    const [active, setActive] = useState(0)
    const [carry, setCarry] = useState<string>("")
    function getImage(i: string) {
        console.log(i)
    }

    return (

        // <div className="w-full overflow-hidden">
        //     <div className=" flex w-[400%] transition-transform duration-500 gap-3"
        //         style={{ transform: `translateX(-${active * 25}%)` }}
        //     >
        //         <div className="w-1/4 border">Property 1</div>
        //         <div className="w-1/4 border">Property 2</div>
        //         <div className="w-1/4 border">Property 3</div>
        //         <div className="w-1/4 border">Property 4</div>

        //     </div>
        //     <input className="slide"
        //         type="range"
        //         min={0}
        //         max={3}
        //         value={active}
        //         onChange={(e) => setActive(Number(e.target.value))}
        //     />
        // </div >
        <div className="space-y-4">
            {products.map((product, idx) => (


                <div className=" w-full flex gap-2" key={idx} onClick={() => setCarry(product.image)} >
                    <h1 className="border">
                        {product.name}
                    </h1>

                </div>
            ))
            }
            <div className="border">
                <img src={carry !== "" ? carry : products[0].image} alt="" />

            </div>
        </div >
    )
}