import Image from "next/image";
import { Button } from "../ui/button";


export default function TestimonialCard({ title, description, image, name, position, link }: { image?: string, title?: string, description?: string, name?: string, position?: string, link?: string }) {
    return (
        <div className="px-8 py-10">
            <h3 className="text-[30px] py-4 text-primary">{title}</h3>

            <p className="text-gray90">{description}</p>

            <div className="bg-gradient-to-b from-sidebar to-black/10 p-4 rounded-md w-fit">

            </div>
            <div className="p-2 border border-sidebar  rounded flex justify-between items-center mt-6">
                <div className="flex space-x-4">
                    <Image src={image || ""} alt="Icon" width={40} height={30} />
                    <div>
                        <h2 className="font-semibold">{name}</h2>
                        <p>{position}</p>
                    </div>
                </div>
                <Button variant="secondary" className="text-sm  "> <a href={link}>Visit Website</a> </Button>
            </div>
        </div>
    )
}
