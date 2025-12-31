import { Button } from '@/components/ui/button'
 

export default function Hero() {
    return (
        <div className=" " >
            <h2 className="font-barlow text-[68px] font-semibold text-center  py-10" >A Digital Product Studio <br />
                that will Work</h2>
            <div
                style={{
                    backgroundImage: "url('/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "400px"
                }}

            >
                <div className="border border-sidebar  px-6 py-4 rounded-lg md:flex   items-center space-x-2 w-fit mx-auto " >
                    <p className="pl-2">For</p>
                    <Button variant="secondary" >Startups</Button>
                    <p className="pl-2">,</p>
                    <Button variant="secondary" >Enterprise leaders</Button>
                    <p className="pl-2">,</p>
                    <Button variant="secondary" >Media & Publishers</Button>
                    <p className="pl-2">and</p>
                    <Button variant="secondary" >Social Good</Button>
                </div>

                <div className="flex justify-center mt-10  w-fit mx-auto">
                    <Button className="mx-auto mx-2 font-semibold" variant="outline" size="lg" >Our Work</Button>
                    <Button className="mx-auto  mx-2 font-semibold" size="lg" >Contact Us</Button>
                </div>

            </div>
        </div>
    )
}
