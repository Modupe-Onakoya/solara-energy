import { createBrowserClient } from "@supabase/ssr";
import PaystackPop from "@paystack/inline-js";
export function createClient() {
    const handlePayment = () => {
        const paystack = new PaystackPop();
    };


    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
}