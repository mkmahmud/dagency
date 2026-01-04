import Image from 'next/image'


export default function SubServiceCard({ iconSrc, title }: { iconSrc?: string, title?: string }) {
    return (
        <div className='p-10 border-l border-sidebar'>
            <div className="bg-gradient-to-b from-primary/10  to-black/10 p-4 rounded-md w-fit">

                <Image src={iconSrc || "/icons/services/1.png"} alt="Icon" width={20} height={20} />
            </div>
            <h2 className="text-[18px]  py-4">{title}</h2>
        </div>
    )
}
