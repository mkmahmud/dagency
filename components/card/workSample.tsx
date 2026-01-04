import Image from "next/image";
import { Button } from "../ui/button";


export default function WorkSample({ title, imageSrc, projectName, projectlink, description }: { title?: string, imageSrc?: string, projectName?: string, projectlink?: string, description?: string }) {
    return (
        <div className="font-barlow">
            <h2 className="text-gray60  border-b border-sidebar p-4 text-[26px]"> {title}</h2>
            <Image className="p-4" src={imageSrc || "/images/1.png"} alt={projectName || "Fashion Hub"} width={600} height={400} />
            <h2 className="text-[24px] pl-4">{projectName || "Chic Boutique"}</h2>
            <div className="p-4 flex justify-between gap-4">
                <Button variant="secondary" className="text-gray60"  > {projectlink}</Button>
                <Button variant="secondary" >
                    <Image src="/icons/arrow.png" alt="Arrow" width={20} height={20} />
                </Button>
            </div>
            <p className="p-4 text-gray60">{description}</p>
        </div>
    )
}
