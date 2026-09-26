import { produce } from "@/data/produce";

export default function NavbarDropDown() {

    return (
        <div className="absolute z-100  left-0 right-0 bg-white top-full ">
            <div className="grid grid-cols-3 gap-1 px-2 justify-between">
                {
                    produce.map(
                        (item, idx) => (
                            <div className="space-y-2 py-5">
                                <p className="font-bold">
                                    {item.name}
                                </p>
                                <p className="max-w-sm">
                                    {item.desc.slice(0, 50)}
                                </p>
                                <img src={item.image} alt="" className="w-[400px] h-[150px] rounded-md" />
                                <p className="bg-orange-500 px-4 py-1 w-fit rounded-md ">
                                    shop all
                                </p>
                            </div>
                        )
                    )
                }
            </div>

        </div>
    )

}