import { assets } from "@/assets/asset";
import Image from "next/image";

export default function Hero() {

    return (
        <div className=" pt-30 relative w-full">
            <video
                className="absolute inset-0 -z-100 object-cover"
                src="/video/vid.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="md:px-16 px-4">
                <p className="text-[12px] max-sm:max-w-[250px]  font-bold text-orange-500">CLEAN ENERGY FOR EVERY NIGERIAN  HOME</p>
                <div className="flex-col flex py-4 md:hidden">
                    <span className="text-3xl font-bold text-white">
                        Power Your
                    </span>
                    <span className="text-3xl font-bold text-white">
                        Home
                    </span>
                    <span className="text-3xl font-bold text-orange-500 ">
                        With the Sun.
                    </span>
                </div>
                <div className="hidden flex-col md:flex py-6">
                    <span className="text-5xl font-bold text-white">

                        Power Your Home
                    </span>

                    <span className="text-5xl font-bold text-orange-500 ">
                        With the Sun.
                    </span>
                </div>

                <p className="max-w-[230px] md:max-w-sm text-[12px] text-white ">High-efficiency solar systems installed in one day. Cut your electricity bill by up to 90%.</p>
                <div className="md:flex gap-2">

                    <div className=" py-2 rounded-lg bg-orange-500  mt-5 flex justify-center items-center gap-2 md:w-fit md:px-4 md:mb-20" >
                        <p className=" text-white text-center text-xs font-bold">Get a Free Quote </p>
                        <Image src={assets.arrowRight} alt="arrow-right" width={20} height={20} className="w-3 h-3" />
                    </div>
                    <div className=" py-2 rounded-lg border border-gray-700 mt-5 flex justify-center items-center gap-2 md:w-fit md:px-4 mb-20" >
                        <p className=" text-xs font-bold text-white text-center">Pay Small Small </p>
                        <Image src={assets.arrowRight} alt="arrow-right" width={20} height={20} className="w-3 h-3" />
                    </div>
                </div>
            </div>

            <div className="bg-[#0F172A] grid grid-cols-2 md:grid-cols-4 gap-1 px-4 py-4 text-center md:px-16 ">
                <div className=" h-fit bg-zinc-700 px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white ">2,400+</span>
                    <span className="text-[10px]  text-white">Homes Powered</span>
                </div>
                <div className=" h-fit bg-zinc-700 px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white">87%</span>
                    <span className="text-[10px] text-white">Average Billings Savings</span>
                </div>
                <div className=" h-fit bg-zinc-700 px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white">15 MW</span>
                    <span className="text-[10px]  text-white">Capacity Installed</span>
                </div>
                <div className=" h-fit bg-zinc-700 px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white">25 Yrs</span>
                    <span className="text-[10px] text-white">Productivity Warranty</span>
                </div>
            </div>

        </div>
    )
}