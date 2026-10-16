"use client"
import dynamic from "next/dynamic"

const PaySmall = dynamic(
    () => import("@/component/ui/PaySmall"),
    { ssr: false }
)

export default function PaySmallWrapper() {
    return <PaySmall />
}