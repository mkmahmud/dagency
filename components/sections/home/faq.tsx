import FaqCard from "@/components/card/faqCard";
import SectionHead from "./sectionHead";


export default function Faq() {
    return (
        <div>

            <SectionHead title="Frequently Asked Questions" description="Still you have any questions? Contact our Team via hello@zevroIT .com" />


            <div className="w-full md:flex border-t border-b border-sidebar ">
                <div className="w-full">
                    <FaqCard index={1} question="What is your refund policy?" answer="zevroIT  offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." />
                    <FaqCard index={2} question="What industries does zevroIT  work with?" answer="zevroIT  offers a range of services i pecialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." />

                </div>


                <div className="border-l border-sidebar w-full">

                    <FaqCard index={3} question="How can zevroIT  help my business?" answer="zevroIT  offers a range of services including design, engineering, and project management.  " />

                </div>
            </div>
        </div>
    )
}
