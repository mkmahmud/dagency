 

export default function SectionHead({ title, description }: { title?: string, description?: string }) {
    return (
        <div className='text-center py-10 font-barlow mt-20'>

            <h1 className='font-bold text-[48px]'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
