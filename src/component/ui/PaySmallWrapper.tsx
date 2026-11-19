"use client"
import dynamic from "next/dynamic"

const PaySmall = dynamic(
    () => import("@/component/ui/PaySmall"),
    { ssr: false }
)

type Props = {
    month: number
    amount: number
}

export default function PaySmallWrapper({ month, amount }: Props) {
    return <PaySmall month={month} amount={amount} />
}