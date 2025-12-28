"use client";
import { CircleXFillIcon } from "@/components/icons/akar-icons-circle-x-fill";
import { Bars3BottomRight16SolidIcon } from "@/components/icons/heroicons-bars-3-bottom-right-16-solid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
                <h2 className="font-bold text-lg">DAgency</h2>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6">
                <li>
                    <Link href="/"><Button variant="ghost">Home</Button></Link>
                </li>
                <li>
                    <Link href="/"><Button variant="ghost">About</Button></Link>
                </li>
                <li>
                    <Link href="/"><Button variant="ghost">Services</Button></Link>
                </li>
                <li>
                    <Link href="/"><Button variant="ghost">Contact</Button></Link>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-xl">
                    {/* Hamburger Icon */}
                    {isMenuOpen ? (
                        <span className="material-icons"> <CircleXFillIcon /> </span>
                    ) : (
                        <Bars3BottomRight16SolidIcon className="text-xl"  />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden absolute top-16 right-0 w-full   shadow-lg transition-all ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center space-y-4 py-4">
                    <li>
                        <Link href="/"><Button variant="ghost">Home</Button></Link>
                    </li>
                    <li>
                        <Link href="/"><Button variant="ghost">About</Button></Link>
                    </li>
                    <li>
                        <Link href="/"><Button variant="ghost">Services</Button></Link>
                    </li>
                    <li>
                        <Link href="/"><Button variant="ghost">Contact</Button></Link>
                    </li>
                </ul>
            </div>

            {/* CTA Button */}
            <Button className="hidden md:inline-block">Get Started</Button>
        </nav>
    );
}
