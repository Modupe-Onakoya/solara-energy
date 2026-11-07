"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { links } from "../_data/sidebar"
export default function Sidebar() {

    const pathname = usePathname()

    return (


        <aside className="w-64 min-h-screen bg-[#0F172A] px-5 py-8 mt-15">
            {/* Logo / Brand */}
            <div className="mb-12 px-3">
                <h2 className="text-xl font-bold text-white">
                    Dashboard<span className="text-orange-500">.</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">Manage your account</p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 mb-3">
                    Menu
                </p>

                {links.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === item.href
                            ? "bg-orange-500/10 text-orange-400 border-l-4 border-orange-500"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </aside>


    )
}