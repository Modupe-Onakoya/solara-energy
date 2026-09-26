import { solutions } from "@/data/solutionPage"
import Link from "next/link"
export default function NavbarSolutionsMenu() {

    return (
        <div className="absolute top-full left-1/3 mt-3 w-[420px] rounded-xl bg-white p-3 shadow-lg ">
            <div className="space-y-2">
                {solutions.map((solution) => (
                    <Link
                        key={solution.slug}
                        href={`/solutions/${solution.slug}`}
                        className="flex gap-3 rounded-lg p-2 hover:bg-gray-100"
                    >
                        <img
                            src={solution.heroImage}
                            alt={solution.title}
                            className="h-16 w-20 rounded-md object-cover"
                        />

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">
                                {solution.title}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                                {solution.subtitle}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}