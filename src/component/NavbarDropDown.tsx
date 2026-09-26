import { produce } from "@/data/produce";
import Link from "next/link";
export default function NavbarDropDown() {

    return (

        <div className="absolute top-full left-0 mt-3 w-[800px] rounded-xl bg-white p-3 shadow-lg mx-auto left-1/4">
            <div className="space-y-2  grid grid-cols-2">
                {produce.map((solution) => (
                    <Link
                        key={solution.slug}
                        href={`/products/${solution.slug}`}
                        className="flex gap-3 rounded-lg p-2 hover:bg-gray-100"
                    >
                        <img
                            src={solution.image}
                            alt={solution.name}
                            className="h-16 w-20 rounded-md object-cover"
                        />

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">
                                {solution.name}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                                {solution.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>


    )

}