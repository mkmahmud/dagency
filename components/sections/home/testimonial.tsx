 
import SectionHead from './sectionHead'
import TestimonialCard from '@/components/card/testimonialCard'

export default function Testimonial() {
    return (
        <div>

            <SectionHead title="What our Clients say About us" description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us" />

            <div className="md:flex border-t border-b border-sidebar">
                <div>
                    <TestimonialCard title="SquareUp has been Instrumental in Transforming our Online Presence. " description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier." image="/users/Profile.png" name="Jhon Smith" position="CEO of Unknown" link="https://example.com" />

                </div>


                <div className="border-l border-sidebar">
                    <TestimonialCard title="SquareUp has been Instrumental in Transforming our Online Presence. " description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier." image="/users/Profile.png" name="Jhon Smith" position="CEO of Unknown" link="https://example.com" />

                </div>
            </div>
        </div>
    )
}
