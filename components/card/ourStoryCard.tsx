

export default function OurStoryCard({ index, title, description }: any) {
    return (
        <div className="p-8">
            <div className="flex items-center text-primary/80 space-x-4 ">
                <h1 className="text-[100px] font-semibold    font-barlow">{index}</h1>
                <p className="text-2xl  border-b border-sidebar w-full pb-2 ">{title}</p>
            </div>
            <p className="mt-4 text-gray90">{description}</p>
        </div>
    )
}
