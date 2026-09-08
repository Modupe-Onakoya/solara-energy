import { reviews } from "@/data/testimonials";

export default function Testimonials() {
    return (
        <section className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
                    <h2 className="text-slate-900 font-bold text-4xl">What Our Customers Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map(({ name, role, text, avatar, stars }) => (
                        <div key={name} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col">
                            <div className="flex gap-1 mb-5">
                                {Array.from({ length: stars }).map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F97316"><path d="M8 1l1.5 4.5H14L10.2 8.2l1.4 4.3L8 10 4.4 12.5l1.4-4.3L2 5.5h4.5L8 1z" /></svg>
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">"{text}"</p>
                            <div className="flex items-center gap-3">
                                <img src={avatar} alt={name} className="w-11 h-11 rounded-full object-cover bg-slate-200" />
                                <div>
                                    <p className="text-slate-900 font-semibold text-sm">{name}</p>
                                    <p className="text-slate-400 text-xs">{role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
