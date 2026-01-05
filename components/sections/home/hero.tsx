import { Button } from '@/components/ui/button'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Hero() {

    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const audienceRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(titleRef.current, {
            y: 60,
            opacity: 0,
            duration: 1
        })
            .from(bgRef.current, {
                scale: 1.05,
                opacity: 0,
                duration: 1
            }, "-=0.5")
            .from(audienceRef.current?.children || [], {
                y: 30,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6
            }, "-=0.4")
            .from(ctaRef.current?.children || [], {
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.6
            }, "-=0.2");

    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <h2
                ref={titleRef}
                className="font-barlow text-[68px] font-semibold text-center py-10"
            >
                A Digital Product Studio <br />
                that will Work
            </h2>

            <div
                ref={bgRef}
                style={{
                    backgroundImage: "url('/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "400px"
                }}
            >
                <div
                    ref={audienceRef}
                    className="border border-sidebar px-6 py-4 rounded-lg md:flex items-center space-x-2 w-fit mx-auto"
                >
                    <p className="pl-2">For</p>
                    <div>
                        <Button variant="secondary">Startups</Button>
                    </div>
                    <p className="pl-2">,</p>
                    <div>

                        <Button variant="secondary">Enterprise leaders</Button>
                    </div>
                    <p className="pl-2">,</p>
                    <div>
                        <Button variant="secondary">Media & Publishers</Button>
                    </div>
                    <p className="pl-2">and</p>
                    <div>
                        <Button variant="secondary">Social Good</Button>
                    </div>
                </div>

                <div
                    ref={ctaRef}
                    className="flex justify-center mt-10 w-fit mx-auto"
                >
                    <div>

                        <Button className="mx-2 font-semibold" variant="outline" size="lg">
                            Our Work
                        </Button>
                    </div>
                    <div>

                        <Button className="mx-2 font-semibold" size="lg">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
