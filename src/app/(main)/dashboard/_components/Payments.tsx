
"use client";

import { useState } from "react";

export default function Payments() {
    const [activeTab, setActiveTab] = useState("full");

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
                    <div>
                        <h2 className="font-semibold">Full Payments</h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Customers who paid for their solar systems in full.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="font-semibold">Pay Small Small</h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Customers paying for their solar systems in installments.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}
