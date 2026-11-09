"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { links } from "../_data/sidebar"
export default function Sidebar() {

    const pathname = usePathname()

    return (



        <aside className="w-full md:w-64 min-h-0 md:min-h-screen bg-white md:bg-[#0F172A] px-4 md:px-5 py-4 md:py-8 mt-0 md:mt-15">

            {/* Logo / Brand */}
            <div className="mb-4 md:mb-12 px-3">
                <h2 className="text-xl font-bold text-slate-900 md:text-white">
                    Dashboard<span className="text-orange-500">.</span>
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                    Manage your account
                </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col md:flex-col gap-2">

                <p className="hidden md:block text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 mb-3">
                    Menu
                </p>

                <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">

                    {links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex shrink-0 items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === item.href
                                ? "bg-orange-500/10 text-orange-500 md:text-orange-400 md:border-l-4 md:border-orange-500"
                                : "text-slate-600 hover:bg-slate-100 md:text-slate-300 md:hover:bg-slate-800 md:hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                </div>
            </div>


        </aside>



    )
}