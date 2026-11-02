import PaystackPop from '@paystack/inline-js'


interface PaymentPlan {
    thirtyPercent: number
    seventyPercent: number
    monthlyPayment: number


}

export default function PaySmall() {
    console.log("PaySmall rendered")
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
        const response = await fetch("/api/paystack/create_plan", {
            method: "POST",
        })

        const data = await response.json()
        console.log(data.message.id)

        const res = await fetch("/api/paystack/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                amount
            })

        })

        const dataInit = await res.json()
        console.log(dataInit)
        const transact = popup.resumeTransaction(
            dataInit.message.access_code,
            {
                onSuccess: async (transaction: { reference: string }) => {
                    console.log(transaction.reference)
                    console.log(dataInit.message.reference)
                    console.log(data.message.id)
                    console.log(amount)
                    const verifyRes = await fetch("/api/paystack/verify_plan", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            reference: dataInit.message.reference,
                            amount,
                            id: data.message.id
                        })
                    })

                    const verifyData = await verifyRes.json()
                    console.log("Verification result:", verifyData)
                }
            }
        )






    }

    return (
        <div className="flex items-center justify-center gap-2 cursor-pointer w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110 mt-2"
            style={{ backgroundColor: "#F97316" }} onClick={() => handlePayment()}>
            Apply for this plan
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>

        </div>
    )
}