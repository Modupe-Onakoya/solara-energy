

import { createClient } from "@/lib/server"
import LogoutButton from "./ui/LogoutButton"
import ChangePassword from "./ui/ChnagePassword"


export default async function Settings() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        return
    }
    const dateJoined = new Date(user.created_at).toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })


    return <h1>


        return (
        <div className="max-w-3xl mx-auto py-10 px-5 text-slate-900">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">Account Settings</h2>
                <p className="text-sm text-slate-500 mt-2">
                    Manage your account information and preferences.
                </p>
            </div>

            {/* Account Information */}
            <div className="border border-slate-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold mb-6">Account Information</h3>

                <div className="space-y-5">
                    <div>
                        <p className="text-sm text-slate-500 mb-2">Email Address</p>
                        <p className="text-sm font-medium">{user.email}</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500 mb-2">Date Joined</p>
                        <p className="text-sm font-medium">{dateJoined}</p>
                    </div>
                </div>
            </div>

            {/* Security */}
            <div className="border border-slate-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold mb-5">Security</h3>

                <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <div>
                        <h4 className="text-sm font-medium">Change Password</h4>
                        <p className="text-sm text-slate-500 mt-1">
                            Update your account password.
                        </p>
                    </div>

                    <ChangePassword />
                </div>
            </div>

            {/* Account Actions */}
            <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold mb-5">Account Actions</h3>

                <div className="flex items-center justify-between gap-4 border-t border-slate-100 py-5">
                    <div>
                        <h4 className="text-sm font-medium">Log Out</h4>
                        <p className="text-sm text-slate-500 mt-1">
                            Sign out of your account.
                        </p>
                    </div>

                    <LogoutButton />
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-red-100 pt-5">
                    <div>
                        <h4 className="text-sm font-medium text-red-600">
                            Delete Account
                        </h4>
                        <p className="text-sm text-slate-500 mt-1">
                            Permanently delete your account and associated data.
                        </p>
                    </div>

                    <button className="border border-red-200 text-red-600 rounded-lg px-4 py-2 text-sm hover:bg-red-50">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
        );


    </h1>
}