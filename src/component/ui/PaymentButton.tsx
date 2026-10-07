"use client";

import PaystackPop from "@paystack/inline-js";

export default function PaymentButton() {
    const handlePayment = () => {
        const paystack = new PaystackPop();

        paystack.newTransaction({
            key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
            email: "customer@example.com",
            amount: 45000000,
            currency: "NGN",

            onSuccess: (transaction: { reference: string }) => {
                console.log("Payment successful");
                console.log(transaction.reference);
            },
        })
    };

    return (
        <button>
            Pay Now
        </button>
    );
}