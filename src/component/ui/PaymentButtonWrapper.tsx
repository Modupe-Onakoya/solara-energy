
"use client"
import dynamic from "next/dynamic"

const PaymentButton = dynamic(
    () => import("@/component/ui/PaymentButton"),
    { ssr: false }
)

export default function PaymentButtonWrapper({ total }: { total: number }) {
    return <PaymentButton totalAmount={total} />
}