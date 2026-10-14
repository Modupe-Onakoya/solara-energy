"use client";
import dynamic from "next/dynamic"

import PaystackPop from "@paystack/inline-js";
import { error } from "console";

export default function PaymentButton({ totalAmount }: { totalAmount: number }) {

    const handlePayment = async () => {
        const paystack = new PaystackPop();

        try {
            const response = await fetch("/api/paystack/create", {
                method: "POST",

            })


            const data = await response.json()
            // console.log(data.message)
            paystack.newTransaction({
                key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
                email: "customer@example.com",
                amount: totalAmount,
                currency: "NGN",

                onSuccess: async (transaction: { reference: string }) => {

                    const response = await fetch("/api/paystack/verify",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                reference: transaction.reference,
                                id: data.iden.id,
                                amountTransacted: totalAmount
                            }),
                        }

                    )
                    const res = await response.json()
                    console.log(res)

                },
            })

        }
        catch (error) {
            console.log(error)
        }

        //    data=  {
        //         message,
        //         iden:{
        //              "id": 1
        //         }
        //     }





    };



    return (
        <button className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }} onClick={() => handlePayment()}>
            Pay Now
        </button>
    );
}