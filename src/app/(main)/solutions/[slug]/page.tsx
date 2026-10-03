import { Props } from "@/types"
import { solution } from "@/data/pageSolutions"
import Link from "next/link"
import PageSolution from "@/component/PageSolution"
export default async function SolutionsPage({ params }: Props) {

    const { slug } = await params
    const product = solution.find(s => s.slug === slug)
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-slate-500 mb-4">Product not found.</p>
                    <Link href="/" className="text-orange-500 font-semibold hover:underline">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        )
    }
    return <PageSolution solution={product} />
}