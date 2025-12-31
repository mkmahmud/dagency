import Image from 'next/image'
import React from 'react'

export default function Partners() {
    return (
        <div className='border-t border-sidebar '>


            <h2 className='px-4 py-2 rounded-full border border-sidebar w-fit mx-auto -mt-5'>Trusted By 250+ Companies</h2>

            <div className='md:flex justify-between items-center'>
                <Image src="/logos/zapier.png" alt="Partners" width={100} height={80} className='mx-auto my-10' />
                <Image src="/logos/slack.png" alt="Partners" width={100} height={80} className='mx-auto my-10' />
                <Image src="/logos/zoom.png" alt="Partners" width={100} height={80} className='mx-auto my-10' />
                <Image src="/logos/spotify.png" alt="Partners" width={100} height={80} className='mx-auto my-10' />
                <Image src="/logos/amazon.png" alt="Partners" width={100} height={80} className='mx-auto my-10' />
                <Image src="/logos/adobe.png" alt="Partners" width={100} height={80} className='mx-auto my-10' />
            </div>
        </div>
    )
}
