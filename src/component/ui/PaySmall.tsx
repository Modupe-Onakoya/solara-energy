import { POST } from "@/app/api/paystack/create/route"

interface PaymentPlan {
    thirtyPercent: number
    seventyPercent: number
    monthlyPayment: number


}

export default async function PaySmall() {

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

    const response = await fetch("api/paystack/create", {
        method: POST,
        body: {

        }
    })


    return (
        <div>
            {result.monthlyPayment}
        </div>
    )
}