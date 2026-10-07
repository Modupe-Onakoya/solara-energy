"use client";

import { createClient } from "@/lib/client";
import PaystackPop from "@paystack/inline-js";

export default async function PaymentButton() {
    const supabase = createClient()

    const handlePayment = async () => {
        const paystack = new PaystackPop();
        const { data } = await supabase.from("payments")

        paystack.newTransaction({
            key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
            email: "customer@example.com",
            amount: 45000000,
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
                        }),
                    }

                )

                const data = await response.json()

                if (response.status === 400) {
                    return "paid"
                }
            },
        })


    };



    return (
        <button>
            Pay Now
        </button>
    );
}