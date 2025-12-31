import Image from "next/image";


export default function WhyChooseUsCard({ image, title, description }: { image?: string, title?: string, description?: string }) {
    return (
        <div className="px-8 py-10">

            <div className="flex items-center ">
                <div className="bg-gradient-to-b from-sidebar to-black/10 p-4 rounded-md w-fit">

                    <Image src={image || ""} alt="Icon" width={30} height={30} />
                </div>
                <h3 className="text-[30px] py-4">{title}</h3>
            </div>
            <p className="text-gray90">{description}</p>
        </div>
    )
}
