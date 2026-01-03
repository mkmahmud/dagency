import OurStoryCard from "@/components/card/ourStoryCard";
import SectionHead from "@/components/sections/home/sectionHead";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
    return (
        <div className='border-t border-sidebar'>
            <SectionHead title="About Us" description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation." />

            {/* About */}
            <div className="border-b border-sidebar w-full">

                <div className=" flex items-center space-x-4 max-w-5xl mx-auto mt-10">
                    <div>
                        <h2 className="text-[30px] font-semibold py-2">About SquareUp</h2>
                        <p className="text-gray90">SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                    </div>
                    <Image src="/about.png" alt="About SquareUp" width={400} height={200} />
                </div>

            </div>
            {/* Story  */}
            <div className="mt-10  ">
                <h2 className="text-[30px] font-bold p-10 ">Our Story</h2>
                {/*  */}
                <div className="border-t   border-sidebar w-full flex">
                    <div className="w-full">
                        <OurStoryCard index="01" title="Design" description="Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression." />
                    </div>
                    <div className="w-full border-l border-sidebar">
                        <OurStoryCard index="02" title="Engineering" description="Our engineering team is composed of skilled developers who bring ideas to life through code. They are dedicated to building robust, scalable, and efficient digital solutions. With a focus on quality and innovation, they work closely with designers and project managers to ensure seamless integration and functionality." />

                    </div>
                </div>
                <div className="border-t  border-sidebar w-full flex">
                    <div className="w-full">
                        <OurStoryCard index="03" title="Project Management" description="Our project management team ensures that every project is delivered on time, within scope, and on budget. They coordinate between designers, engineers, and clients, managing resources and timelines to achieve successful outcomes." />
                    </div>
                    <div className="w-full border-l border-sidebar">
                        <OurStoryCard index="04" title="Collaboration" description="Collaboration is at the heart of everything we do. Our teams work together seamlessly, combining their expertise to deliver outstanding results. We believe that by fostering a collaborative environment, we can achieve greater innovation and success for our clients." />

                    </div>
                </div>
                <div className="border-t border-b border-sidebar w-full flex">
                    <div className="w-full">
                        <OurStoryCard index="05" title="Client-Centric Approach" description="Our client-centric approach ensures that we prioritize the needs and goals of our clients throughout the entire project lifecycle. We listen, collaborate, and tailor our solutions to deliver maximum value and satisfaction." />
                    </div>
                    <div className="w-full border-l border-sidebar">
                        <OurStoryCard index="06" title="Driving Success" description="Our commitment to driving success is unwavering. We measure our achievements by the impact we create for our clients. Through continuous improvement, innovation, and a results-oriented mindset, we strive to exceed expectations and help our clients achieve their business goals." />

                    </div>
                </div>
            </div>
            {/* welcome */}
            <div className='pb-10  mt-10'>
                <div className='flex  space-x-4 items-center p-10'>
                    <div>
                        <Image src="/logo.png" alt="Logo" width={100} height={100} className='mx-auto mt-10' />
                    </div>
                    <div className='text-gray60'>
                        <h2 className='text-xl font-semibold py-2'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h2>
                        <p>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                    </div>
                </div>
                {/*  */}
                <div className="border border-sidebar   px-2 rounded-lg flex justify-between items-center space-x-4 p-4 mx-6">
                    <span>Welcome to SquareUp</span> <Button variant="secondary">Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</Button>
                    <Button className="">Get Started</Button>
                </div>
            </div>
        </div>
    )
}
