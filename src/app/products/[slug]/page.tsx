// app/products/[slug]/page.tsx
import { produce } from "@/data/produce"
import ProductDetail from "@/component/ProductDetail"
import Link from "next/link"

type Props = {
    params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params
    const product = produce.find(p => p.slug === slug)

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

    return <ProductDetail product={product} />
}