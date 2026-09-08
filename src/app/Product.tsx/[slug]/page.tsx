export default async function slug({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params

    return (
        <div>
            <h1>{slug} is here</h1>
        </div>
    )

}