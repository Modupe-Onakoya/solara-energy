
import Link from "next/link";
import { createClient } from "@/lib/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  const [paymentsResult, plansResult] = await Promise.all([
    supabase
      .from("payment")
      .select("amount, status")
      .eq("user_id", user.id),

    supabase
      .from("payment_plans")
      .select("total_amount, deposit_amount, remaining_balance, status")
      .eq("user_id", user.id),
  ]);

  if (paymentsResult.error || plansResult.error) {
    console.error(
      paymentsResult.error || plansResult.error
    );
  }

  const payments = paymentsResult.data || [];
  const plans = plansResult.data || [];

  const totalPaid = payments
    .filter((payment) => payment.status?.toLowerCase() === "success")
    .reduce((total, payment) => total + Number(payment.amount), 0);

  const pendingPayments = payments.filter(
    (payment) => payment.status?.toLowerCase() === "pending"
  ).length;

  const activePlans = plans.filter(
    (plan) => plan.status?.toLowerCase() === "active"
  );

  const totalRemaining = activePlans.reduce(
    (total, plan) => total + Number(plan.remaining_balance),
    0
  );

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-xl font-bold">
          Welcome back, {user.email}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your payments.
        </p>
      </div>

      {/* Payment summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">
            Total paid
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {formatPrice(totalPaid)}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">
            Pending payments
          </p>

          <p className="mt-2 text-2xl font-bold text-orange-500">
            {pendingPayments}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">
            Active payment plans
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {activePlans.length}
          </p>
        </div>

      </div>

      {/* Installment overview */}
      {activePlans.length > 0 && (
        <div className="rounded-lg border bg-white p-5">
          <h2 className="font-semibold text-slate-900">
            Your Pay Small Small Plans
          </h2>

          <div className="mt-4 space-y-3">
            {activePlans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm text-gray-500">
                    Remaining balance
                  </p>

                  <p className="font-bold text-orange-500">
                    {formatPrice(Number(plan.remaining_balance))}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  Deposit: {formatPrice(Number(plan.deposit_amount))}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 border-t pt-3 text-sm text-slate-500">
            Total outstanding balance:{" "}
            <span className="font-semibold text-slate-900">
              {formatPrice(totalRemaining)}
            </span>
          </p>
        </div>
      )}

      {/* Navigation */}
      <Link
        href="/dashboard/payments"
        className="inline-flex items-center text-orange-500 underline"
      >
        View all payments →
      </Link>

    </div>
  );
}
