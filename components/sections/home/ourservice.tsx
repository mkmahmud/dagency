import ServiceCard from "@/components/card/serviceCard";
import SectionHead from "./sectionHead";


export default function Ourservice() {
    return (
        <div>
            <SectionHead title="Our Services" description="We offer a wide range of services to help you achieve your digital goals." />


            <div className="md:grid grid-cols-3 gap-6 px-4    md:space-y-0 border-t border-b border-sidebar" >
                <ServiceCard image="/icons/design.png" title="Design" description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences." />
                <div className="md:border-r md:border-l md:border-sidebar">
                    <ServiceCard image="/icons/engr.png" title="Engineering" description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs." />
                </div>
                <ServiceCard image="/icons/project.png" title="Project Management" description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process." />
            </div>

        </div>
    )
}
