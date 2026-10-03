"use client";

import { usePaystackPayment } from "react-paystack"

type Props = {
    email: string
    amount: number
    productName: string
    onSuccess: () => void
    onClose: () => void
}

export default function PaymentButton({ email, amount, productName, onSuccess, onClose }: Props) {
    const config = {
        reference: `solar_${new Date().getTime()}`,
        email,
        amount: amount * 100,   // converts Naira to kobo
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
        metadata: {
            custom_fields: [
                {
                    display_name: "Product",
                    variable_name: "product",
                    value: productName
                }
            ]
        }
    }

    const initializePayment = usePaystackPayment(config)

    return (
        <div className="pt-50">
            <button onClick={() => initializePayment({ onSuccess, onClose })}>
                Pay Now
            </button>
        </div>
    )
}