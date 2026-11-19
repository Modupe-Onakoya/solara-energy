
"use client";

import { createClient } from "@/lib/client";
import { useEffect, useState } from "react";

type Payment = {
    id: number;
    user_id: string;
    amount: number;
    status: string;
    created_at: string;
    currency: number;
    refrence: string;
};

type PaymentPlan = {
    id: number;
    user_id: string;
    status: string;
    total_amount: number;
    deposit_amount: number;
    monthly_payments: number;
    remaining_balance: number;
    monthly_duration: number;
    month_remaining: number;
    created_at: string;
};

export default function Payments() {
    const [paymentDetails, setPaymentDetails] = useState<Payment[]>([]);
    const [planDetails, setPlanDetails] = useState<PaymentPlan[]>([]);
    const [activeTab, setActiveTab] = useState("full");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
        }).format(Number(amount));
    };

    useEffect(() => {
        async function paymentUpdates() {
            const supabase = createClient();

            setLoading(true);
            setError("");

            const [payments, plans] = await Promise.all([
                supabase.from("payment").select("*").order("created_at", {
                    ascending: false,
                }),

                supabase.from("payment_plans").select("*").order("created_at", {
                    ascending: false,
                }),
            ]);

            if (payments.error || plans.error) {
                setError(
                    payments.error?.message ||
                    plans.error?.message ||
                    "Unable to fetch payment records."
                );
                setLoading(false);
                return;
            }

            setPaymentDetails((payments.data || []) as Payment[]);
            setPlanDetails((plans.data || []) as PaymentPlan[]);

            setLoading(false);
        }

        paymentUpdates();
    }, []);

    const Status = ({ status }: { status: string }) => (
        <span
            className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${status?.toLowerCase() === "success" ||
                    status?.toLowerCase() === "active"
                    ? "bg-green-100 text-green-700"
                    : status?.toLowerCase() === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                }`}
        >
            {status || "Unknown"}
        </span>
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900">
                Payments
            </h1>

            <p className="mt-2 text-sm text-slate-500">
                Manage customer payments and installment plans.
            </p>

            {/* Payment summary */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border bg-white p-5">
                    <p className="text-sm text-slate-500">
                        Full Payments
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                        {paymentDetails.length}
                    </h2>
                </div>

                <div className="rounded-xl border bg-white p-5">
                    <p className="text-sm text-slate-500">
                        Installment Plans
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                        {planDetails.length}
                    </h2>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-8 flex gap-6 border-b">
                <button
                    onClick={() => setActiveTab("full")}
                    className={`pb-3 text-sm ${activeTab === "full"
                            ? "border-b-2 border-green-500 font-semibold text-slate-900"
                            : "text-gray-500"
                        }`}
                >
                    Full Payments ({paymentDetails.length})
                </button>

                <button
                    onClick={() => setActiveTab("installment")}
                    className={`pb-3 text-sm ${activeTab === "installment"
                            ? "border-b-2 border-green-500 font-semibold text-slate-900"
                            : "text-gray-500"
                        }`}
                >
                    Pay Small Small ({planDetails.length})
                </button>
            </div>

            {/* Content */}
            <div className="mt-6 rounded-xl border bg-white p-5">
                {loading ? (
                    <div className="py-12 text-center text-sm text-slate-500">
                        Loading payment records...
                    </div>
                ) : error ? (
                    <div className="py-10 text-center text-sm text-red-500">
                        {error}
                    </div>
                ) : activeTab === "full" ? (
                    <div>
                        <h2 className="font-semibold text-slate-900">
                            Full Payments
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Customers who paid for their solar systems in full.
                        </p>

                        {paymentDetails.length === 0 ? (
                            <p className="py-12 text-center text-sm text-slate-500">
                                No full payments found.
                            </p>
                        ) : (
                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full min-w-[650px] text-left text-sm">
                                    <thead className="border-b bg-slate-50 text-slate-500">
                                        <tr>
                                            <th className="p-3">Customer</th>
                                            <th className="p-3">Amount</th>
                                            <th className="p-3">Reference</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">Date</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {paymentDetails.map((payment) => (
                                            <tr
                                                key={payment.id}
                                                className="border-b last:border-0"
                                            >
                                                <td className="p-3">
                                                    <p className="font-medium text-slate-800">
                                                        {payment.user_id.slice(0, 8)}...
                                                    </p>
                                                </td>

                                                <td className="p-3 font-semibold text-slate-900">
                                                    {formatPrice(payment.amount)}
                                                </td>

                                                <td className="p-3 text-slate-500">
                                                    {payment.refrence || "N/A"}
                                                </td>

                                                <td className="p-3">
                                                    <Status status={payment.status} />
                                                </td>

                                                <td className="p-3 text-slate-500">
                                                    {new Date(payment.created_at).toLocaleDateString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2 className="font-semibold text-slate-900">
                            Pay Small Small
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Customers paying for their solar systems in installments.
                        </p>

                        {planDetails.length === 0 ? (
                            <p className="py-12 text-center text-sm text-slate-500">
                                No installment plans found.
                            </p>
                        ) : (
                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full min-w-[850px] text-left text-sm">
                                    <thead className="border-b bg-slate-50 text-slate-500">
                                        <tr>
                                            <th className="p-3">Customer</th>
                                            <th className="p-3">Total Amount</th>
                                            <th className="p-3">Deposit</th>
                                            <th className="p-3">Monthly Payment</th>
                                            <th className="p-3">Balance</th>
                                            <th className="p-3">Duration</th>
                                            <th className="p-3">Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {planDetails.map((plan) => (
                                            <tr
                                                key={plan.id}
                                                className="border-b last:border-0"
                                            >
                                                <td className="p-3 font-medium text-slate-800">
                                                    {plan.user_id.slice(0, 8)}...
                                                </td>

                                                <td className="p-3 font-semibold">
                                                    {formatPrice(plan.total_amount)}
                                                </td>

                                                <td className="p-3">
                                                    {formatPrice(plan.deposit_amount)}
                                                </td>

                                                <td className="p-3">
                                                    {formatPrice(plan.monthly_payments)}
                                                </td>

                                                <td className="p-3 font-medium text-orange-600">
                                                    {formatPrice(plan.remaining_balance)}
                                                </td>

                                                <td className="p-3">
                                                    {plan.monthly_duration} months
                                                    <p className="mt-1 text-xs text-slate-400">
                                                        {plan.month_remaining} remaining
                                                    </p>
                                                </td>

                                                <td className="p-3">
                                                    <Status status={plan.status} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
