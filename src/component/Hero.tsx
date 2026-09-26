import { assets } from "@/assets/asset";
import Image from "next/image";

export default function Hero() {

    return (
        <div className=" pt-50 relative w-full h-[100vh]">
            {/* <video
                className="absolute inset-0 -z-100 object-contain w-full"
                src="/video/vid.mp4"
                autoPlay
                muted
                loop
                playsInline
            /> */}
            <div className="absolute bg-zinc-800 inset-0 opacity-[10%]">

            </div>
            <img src="/img/hero4.jpg" alt="" className="absolute -z-10 object-cover w-full inset-0" />
            <div className="md:px-16 px-4">
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
                {/* <div className="md:flex gap-2">

                    <div className=" py-2 rounded-lg bg-orange-500  mt-5 flex justify-center items-center gap-2 md:w-fit md:px-4 md:mb-20" >
                        <p className=" text-white text-center text-xs font-bold">Get a Free Quote </p>
                        <Image src={assets.arrowRight} alt="arrow-right" width={20} height={20} className="w-3 h-3" />
                    </div>
                    <div className=" py-2 rounded-lg border border-gray-700 mt-5 flex justify-center items-center gap-2 md:w-fit md:px-4 mb-20" >
                        <p className=" text-xs font-bold text-white text-center">Pay Small Small </p>
                        <Image src={assets.arrowRight} alt="arrow-right" width={20} height={20} className="w-3 h-3" />
                    </div>
                </div> */}
            </div>

            {/* <div className="bg-[#0F172A] grid grid-cols-2 md:grid-cols-4 gap-1 px-4 py-4 text-center md:px-16 absolute bottom-0 left-0 right-0">
                <div className=" h-fit bg-[#0F172A] px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white ">2,400+</span>
                    <span className="text-[10px]  text-white">Homes Powered</span>
                </div>
                <div className=" h-fit bg-[#0F172A] px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white">87%</span>
                    <span className="text-[10px] text-white">Average Billings Savings</span>
                </div>
                <div className=" h-fit bg-[#0F172A] px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white">15 MW</span>
                    <span className="text-[10px]  text-white">Capacity Installed</span>
                </div>
                <div className=" h-fit bg-blue-800 px-4 py-4 flex flex-col gap-2">
                    <span className="text-2xl font-bold text-white">25 Yrs</span>
                    <span className="text-[10px] text-white">Productivity Warranty</span>
                </div>
            </div> */}

        </div>
    )
}