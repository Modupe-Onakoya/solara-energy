import { assets } from "@/assets/asset";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[42rem] flex items-center overflow-hidden bg-slate-600">
            {/* A still image keeps the home and panels legible while the gradients protect the copy. */}
            <img
                className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
                src="img/hero4.jpg"
                alt=""
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.98)_0%,rgba(15,23,42,0.9)_42%,rgba(15,23,42,0.34)_76%,rgba(15,23,42,0.18)_100%)] max-sm:bg-[linear-gradient(90deg,rgba(15,23,42,0.96)_0%,rgba(15,23,42,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,23,42,0.72)_0%,transparent_38%,rgba(15,23,42,0.16)_100%)]" />
            <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-2 w-full">
                <div className="md:px-16 px-4 z">
                    <p className="text-[15pxx] max-sm:max-w-[250px] font-bold text-orange-500">
                        RELIABLE SOLAR POWER FOR EVERY NIGERIAN HOME
                    </p>

                    <div className="flex-col flex py-4 md:hidden">
                        <span className="text-4xl font-bold text-white">
                            Power Your Home.
                        </span>

                        <span className="text-4xl font-bold text-orange-500">
                            Your Way.
                        </span>
                    </div>

                    <div className="hidden flex-col md:flex py-6">
                        <span className="text-6xl font-bold text-white">
                            Power Your Home.
                        </span>

                        <span className="text-6xl font-bold text-orange-500">
                            Your Way.
                        </span>
                    </div>

                    <p className="max-w-[280px] md:max-w-md text-[12px] md:text-sm leading-relaxed text-white">
                        Reliable solar power designed for Nigerian homes.
                        Reduce your electricity bills, stay powered through outages,
                        and take control of your energy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="/quote"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110 active:scale-95"
                            style={{ backgroundColor: "#F97316" }}
                        >
                            Get a Free Quote
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                        <a
                            href="#pay-small"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
                        >
                            Pay Small Small ↓
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <div className="w-5 h-8 rounded-full border border-white flex items-start justify-center pt-1.5">
                    <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
                </div>
            </div>
        </section>
    );
}
