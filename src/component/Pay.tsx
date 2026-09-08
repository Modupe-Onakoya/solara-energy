export default function Pay() {
    return (
        <section className="px-6 py-16">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">

                <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* Left */}
                    <div>
                        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm">
                            ☀️ Solar Calculator
                        </span>

                        <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-4xl">
                            Find out how much you could save with solar
                        </h2>

                        <p className="mt-4 max-w-lg text-slate-300">
                            Tell us what you currently spend on electricity and we'll
                            recommend a solar system that fits your needs.
                        </p>

                        <button className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">
                            Calculate My Savings →
                        </button>
                    </div>

                    {/* Right — small preview */}
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                        <p className="text-sm text-slate-300">
                            Example estimate
                        </p>

                        <div className="mt-5">
                            <p className="text-sm text-slate-300">
                                Estimated monthly savings
                            </p>

                            <p className="mt-1 text-4xl font-bold">
                                ₦8,700
                            </p>

                            <p className="mt-2 text-sm text-slate-400">
                                That's about ₦104,400 saved per year
                            </p>
                        </div>

                        <div className="mt-6 border-t border-white/10 pt-5">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-300">Bill reduction</span>
                                <span className="font-semibold">Up to 87%</span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-[87%] rounded-full bg-white" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}