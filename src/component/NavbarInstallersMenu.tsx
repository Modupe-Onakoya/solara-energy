import Link from "next/link";
import { installers } from "@/data/installers";

export default function NavbarInstallersMenu() {
    return (
        <div className="absolute top-full left-1/3 mt-3 w-[420px] rounded-xl bg-white p-3 shadow-lg">
            <div className="space-y-2">
                {installers.map((installer) => (
                    <Link
                        key={installer.slug}
                        href={`/installers/${installer.slug}`}
                        className="flex gap-3 rounded-lg p-3 hover:bg-gray-100"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-xl">
                            {installer.icon}
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">
                                {installer.title}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                {installer.subtitle}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}