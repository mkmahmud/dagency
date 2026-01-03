
"use client"
import Faq from '@/components/sections/home/faq'
import SectionHead from '@/components/sections/home/sectionHead'
import StartProject from '@/components/sections/home/startProject'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


export default function Contact() {
    return (
        <div>
            <SectionHead title="Contact Us" description="Get in touch with us today and let us help you with any questions or inquiries you may have." />

            {/* Social Icons */}
            <div className='flex justify-center space-x-2 mt-10'>
                <Button variant="secondary" className="mr-4 flex items-center space-x-2" >    <Image src="/icons/email.png" alt="Social Icons" width={20} height={20} /> <span>hello@squareup.com</span></Button>

                <Button variant="secondary" className="mr-4 flex items-center space-x-2" >    <Image src="/icons/phone.png" alt="Social Icons" width={20} height={20} /> <span>+91 91813 23 2309</span></Button>

                <Button variant="secondary" className="mr-4 flex items-center space-x-2" >    <Image src="/icons/location.png" alt="Social Icons" width={20} height={20} /> <span>Get Location</span></Button>
            </div>
            {/* Start project */}
            <StartProject />
            {/*  Icons */}
            <div className='flex justify-around items-center border-t border-b border-sidebar   '>
                <div className='flex justify-end mr-10   items-center space-x-2 w-full py-4'>
                    <p>Operating Days</p>
                    <Button variant="secondary">Monday To Friday</Button>
                </div>
                <div className='border-l border-sidebar w-full py-4 '>
                    <div className="border border-sidebar w-fit  px-2 rounded-lg flex justify-between items-center space-x-4 ml-10">
                        <p className="pl-2">Stay Connected</p>
                        <div className="flex space-x-2 my-2">
                            <a href="http://" className="bg-gradient-to-b from-sidebar to-black/10 p-4 rounded-md">

                                <Image src="/icons/f.png" alt="Icon" width={20} height={20} />
                            </a>
                            <a href="http://" className="bg-gradient-to-b from-sidebar to-black/10 p-4 rounded-md">

                                <Image src="/icons/l.png" alt="Icon" width={20} height={20} />
                            </a>
                            <a href="http://" className="bg-gradient-to-b from-sidebar to-black/10 p-4 rounded-md">

                                <Image src="/icons/l.png" alt="Icon" width={20} height={20} />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            {/* Faq */}
            <Faq />
        </div>
    )
}
