

import Link from "next/link"
import { createClient } from "@/lib/server"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Welcome back, {user?.email}</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total paid</p>
          <p className="text-2xl font-bold">{/* your total here */}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-bold">{/* your count here */}</p>
        </div>
      </div>

      <Link href="/dashboard/payments" className="text-orange-500 underline">
        View all payments →
      </Link>
    </div>
  )
}