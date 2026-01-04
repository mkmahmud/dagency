import OurStoryCard from "@/components/card/ourStoryCard";
import WorkSample from "@/components/card/workSample";
import SectionHead from "@/components/sections/home/sectionHead";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Work() {
    return (
        <div className='border-t border-sidebar'>
            <SectionHead title="Our Work" description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise." />


            {/* Story  */}
            <div className="mt-10  border-t border-sidebar">
                <div className="p-10 ">
                    <h2 className="text-[30px] font-bold ">At SquareUp</h2>
                    <p className="text-gray90 py-4">We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
                    <Button className="mt-6" variant="secondary">Here are ten examples of our notable works:</Button>
                </div>
                {/*  */}
                <div className="border-t   border-sidebar w-full flex">
                    <div className="w-full">

                        <WorkSample title="E-Commerce Platform for Fashion Hub" imageSrc="/images/1.png" projectName="Chic Boutique" projectlink="htttps:/www.chicboutique.com" description="We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction." />
                    </div>
                    <div className="w-full border-l border-sidebar">
                        <WorkSample title="Mobile App for Food Delivery Service" imageSrc="/images/2.png" projectName="HungryBites" projectlink="https://www.hungrybites.com" description="HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency." />
                    </div>
                </div>

            </div>

        </div>
    )
}
