import WhyChooseUsCard from "@/components/card/whyChooseUsCard";
import SectionHead from "./sectionHead";



export default function WhyChooseUs() {
    return (
        <div>
            <SectionHead title="Why Choose Us" description="Discover the benefits of partnering with Zevrot for your digital solutions." />

            <div className="md:flex border-t border-b border-sidebar">
                <div>
                    <WhyChooseUsCard image="/icons/expertise.png" title="Expertise" description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions." />
                    <WhyChooseUsCard image="/icons/client.png" title="Client-Centric Approach" description="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage." />

                </div>


                <div className="border-l border-sidebar">
                    <WhyChooseUsCard image="/icons/expertise.png" title="Expertise" description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success." />
                    <WhyChooseUsCard image="/icons/client.png" title="Collaborative Partnership" description="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive." />

                </div>
            </div>
        </div>
    )
}
