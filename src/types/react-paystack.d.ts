declare module "react-paystack" {
    export function usePaystackPayment(config: any): (callbacks: {
        onSuccess: () => void
        onClose: () => void
    }) => void
}