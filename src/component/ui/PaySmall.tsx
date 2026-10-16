
import { createClient } from "@/lib/client"
import PaystackPop from '@paystack/inline-js'
import { Console } from "console"
import { useEffect, useState } from "react"

interface PaymentPlan {
    thirtyPercent: number
    seventyPercent: number
    monthlyPayment: number


}

export default function PaySmall() {
    const popup = new PaystackPop()

    const amount = 350000
    const duration = 6
    function payment(num: number, duration: number): PaymentPlan {

        const thirtyPercent = (num * 30) / 100
        const seventyPercent = num - thirtyPercent
        const monthlyPayment = seventyPercent / duration

        return {
            thirtyPercent,
            seventyPercent,
            monthlyPayment

        }
    }
    const result = payment(amount, duration)
    const handlePayment = async () => {
        const response = await fetch("/api/paystack/create", {
            method: "POST",
        })

        const data = await response.json()

        const res = await fetch("/api/paystack/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.user,
                amount
            })

        })

        const dataInit = await res.json()


        popup.resumeTransaction(dataInit.access)

    }

    return (
        <div className="" onClick={() => handlePayment()}>
            pay
        </div>
    )
}