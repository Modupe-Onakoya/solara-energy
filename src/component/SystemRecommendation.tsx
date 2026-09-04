
import { appliances } from "@/data/appliance"

export default function SystemRecommendation() {

    let appliance = appliances

    return (
        <div className="px-4 flex flex-col items-center">
            <p className="text-orange-500">System Designer</p>
            <p className="text-[#0F172A] text-2xl font-bold text-center">What Do You Want to Power?</p>
            <p className="text-center text-gray-500 text-xs">Pick your appliances and we'll instantly recommend the right solar system for you.</p>
            <div>

                <div className="grid grid-cols-2 gap-3 py-4 md:grid-cols-3">
                    {
                        appliance.map((item, idx) => (
                            <div className="flex items-center border border-gray-300 rounded-lg justify-center gap-2 px-2 py-2" key={idx}>
                                <p>{item.icon}</p>
                                <div className="flex flex-col">
                                    <span className="text-[12px] max-w-[70px] font-medium">{item.label}</span>
                                    <span className="text-[10px]">{item.watts}</span>
                                </div>
                            </div>

                        ))
                    }

                </div>
                <div>

                </div>
            </div>


        </div>
    )
}