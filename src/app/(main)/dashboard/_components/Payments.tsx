
"use client";

import { createClient } from "@/lib/client";
import { useEffect, useState } from "react";
type Payment = {
    id: number;
    user_id: string;
    amount: number;
    status: string;
    created_at: string;
    currency: number
    refrence: string
};
export default function Payments() {

    const [paymentDetails, setPaymentDetails] = useState<Payment[] | null>(null);
    const [activeTab, setActiveTab] = useState("full");

    useEffect(() => {
        async function paymentUpdates() {
            const supabase = createClient();

            const { data, error } = await supabase
                .from("payment")
                .select("*")

            if (error) {
                console.log(error.message);
                return;
            }

            setPaymentDetails(data);
        }

        paymentUpdates();
    }, []);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900">
                Payments
            </h1>

            <p className="mt-2 text-sm text-slate-500">
                Manage customer payments
            </p>

            {/* Payment tabs */}
            <div className="mt-6 flex gap-4 border-b">

                <button
                    onClick={() => setActiveTab("full")}
                    className={`pb-3 ${activeTab === "full"
                        ? "border-b-2 border-green-500 font-semibold"
                        : "text-gray-500"
                        }`}
                >
                    Full Payments
                </button>

                <button
                    onClick={() => setActiveTab("installment")}
                    className={`pb-3 ${activeTab === "installment"
                        ? "border-b-2 border-green-500 font-semibold"
                        : "text-gray-500"
                        }`}
                >
                    Pay Small Small
                </button>

            </div>

            {/* Content */}
            <div className="mt-6 rounded-xl border bg-white p-5">

                {activeTab === "full" ? (
                    paymentDetails ? (
                        <div>
                            {/* Display database details here */}
                            {paymentDetails.map((payment) => (
                                <p key={payment.id}>{payment.amount}</p>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2 className="font-semibold">Full Payments</h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Customers who paid for their solar systems in full.
                            </p>
                        </div>
                    )
                ) : (
                    <div>
                        <h2 className="font-semibold">Pay Small Small</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Customers paying for their solar systems in installments.
                        </p>
                    </div>
                )}
            </div >
        </div >
    );
}
