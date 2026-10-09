"use client";


import PaystackPop from "@paystack/inline-js";

export default async function PaymentButton() {

    const handlePayment = async () => {
        const paystack = new PaystackPop();
        // const { data: { user } } = await supabase.auth.getUser()
        // if (!user) {
        //     alert("kindly login")
        //     return
        // }
        // const { error } = await supabase.from("payments").insert({
        //     status: "pending",
        //     user_id: user.id
        // })

        // if (error) {
        //     console.log(error.message)
        //     return
        // }
        const response = await fetch("/api/paystack/create")
        const data = await response.json()
        paystack.newTransaction({
            key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
            email: "customer@example.com",
            amount: 45000000,
            currency: "NGN",

            onSuccess: async (transaction: { reference: string }) => {
                // const { data, error } = await supabase.from("payment").update({
                //     reference: transaction.reference
                // }).select()
                // if (error || !data) return
                // const pay = data[0].id
                const response = await fetch("/api/paystack/verify",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            reference: transaction.reference,
                            id: data.data
                        }),
                    }

                )
                const res = await response.json()
                // if (res.message === "Payment verified successfully") {
                //     await supabase.from("payment").update({
                //         status: "success", amount: res.expectedAmount,
                //         currency: res.expectedCurrency,
                //     }).eq("id", pay)
                // }

                // if (data.status === 200) {

                // }
            },
        })


    };



    return (
        <button>
            Pay Now
        </button>
    );
}