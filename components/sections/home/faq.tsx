import FaqCard from "@/components/card/faqCard";
import SectionHead from "./sectionHead";


export default function Faq() {
    return (
        <div>

            <SectionHead title="Frequently Asked Questions" description="Still you have any questions? Contact our Team via hello@Zevrot.com" />


            <div className="w-full md:flex border-t border-b border-sidebar ">
                <div className="w-full">
                    <FaqCard index={1} question="What is your refund policy?" answer="Zevrot offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." />
                    <FaqCard index={2} question="What industries does Zevrot work with?" answer="Zevrot offers a range of services i pecialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." />

                </div>


                <div className="border-l border-sidebar w-full">

                    <FaqCard index={3} question="How can Zevrot help my business?" answer="Zevrot offers a range of services including design, engineering, and project management.  " />

                </div>
            </div>
        </div>
    )
}
