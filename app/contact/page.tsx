
"use client"
import Faq from '@/components/sections/home/faq'
import SectionHead from '@/components/sections/home/sectionHead'
import StartProject from '@/components/sections/home/startProject'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


export default function Contact() {
    return (
        <div className='border-t border-sidebar'>
            <SectionHead title="Contact Us" description="Get in touch with us today and let us help you with any questions or inquiries you may have." />

            {/* Social Icons */}
            <div className='flex justify-center space-x-2 mt-10'>
                <Button variant="secondary" className="mr-4 flex items-center space-x-2" >    <Image src="/icons/email.png" alt="Social Icons" width={20} height={20} /> <span>hello@zevroIT .com</span></Button>

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
            {/* welcome */}
            <div className='pb-10'>
                <div className='flex  space-x-4 items-center p-10'>
                    <div>
                        <Image src="/logo.png" alt="Logo" width={100} height={100} className='mx-auto mt-10' />
                    </div>
                    <div className='text-gray60'>
                        <h2 className='text-xl font-semibold py-2'>Today, zevroIT  Continues to Thrive as a Leading Digital Product Agency.....</h2>
                        <p>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                    </div>
                </div>
                {/*  */}
                <div className="border border-sidebar   px-2 rounded-lg flex justify-between items-center space-x-4 p-4 mx-6">
                    <span>Welcome to zevroIT </span> <Button variant="secondary">Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</Button>
                    <Button  className="">Get Started</Button>
                </div>
            </div>
        </div>
    )
}
