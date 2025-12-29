"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {



    return (
        <footer >
            <div className="md:flex justify-between items-center pt-4 pb-8 px-6 space-y-4 border-b border-sidebar">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <h2 className="font-bold text-lg">DAgency</h2>
                </div>

                {/* Desktop Menu */}
                <ul className=" md:flex items-center space-x-6">
                    <li>
                        <Link href="/"><Button variant="link">Home</Button></Link>
                    </li>
                    <li>
                        <Link href="/"><Button variant="link">About</Button></Link>
                    </li>
                    <li>
                        <Link href="/"><Button variant="link">Services</Button></Link>
                    </li>
                    <li>
                        <Link href="/"><Button variant="link">Contact</Button></Link>
                    </li>
                </ul>



                {/* CTA Button */}
                <div className="border border-sidebar  px-2 rounded-lg flex justify-between items-center space-x-4">
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
            {/* Footer Bottom */}
            <div className="md:flex justify-between items-center pb-4 pt-6 ">
                <div className="md:flex items-center space-x-4 space-y-2">
                    <div className="flex items-center ">
                        <Image src="/icons/email.png" alt="Social Icons" width={20} height={20} />
                        <span className="ml-2"> hello@gmail.com </span>
                    </div>
                    <div className="flex items-center ">
                        <Image src="/icons/phone.png" alt="Social Icons" width={20} height={20} />
                        <span className="ml-2"> +1 234 567 890 </span>
                    </div>
                    <div className="flex items-center ">
                        <Image src="/icons/location.png" alt="Social Icons" width={20} height={20} />
                        <span className="ml-2"> 123 Main St, City, Country </span>
                    </div>
                </div>

                <p className="text-center   my-4 md:my-0 text-sm text-gray-500">&copy; 2024 DAgency. All rights reserved.</p>
            </div>
        </footer>
    );
}
