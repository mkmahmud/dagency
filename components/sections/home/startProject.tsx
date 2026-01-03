"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"
 
import { useState } from "react";

export default function StartProject() {

    const [value, setValue] = useState(1500); // Initial value set to 50

    const handleSliderChange = (newValue: any) => {
        setValue(newValue[0]);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can add form submission logic here
        console.log("Form submitted!");

        const formData = new FormData(e.target as HTMLFormElement);

        // Create an object to store form values
        const formValues: { [key: string]: string } = {};

        // Append budget to the form data
        formValues['budget'] = value.toString();

        // Loop through the FormData and add each entry to the formValues object
        for (let [name, value] of formData.entries()) {
            formValues[name] = value.toString();
        }

        // Log the object to check the form values
        console.log(formValues);

    }

    return (
        <div>

            <div className='text-center py-10 font-barlow mt-20' style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "400px"
            }}>
                <Image src="/logo.png" alt="Start Project" width={70} height={70} className="mx-auto mb-6" />
                <h1 className='font-bold text-[48px]'>Thank you for your Interest in SquareUp.</h1>
                <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
                <Button className="font-bold mt-10">Start Project</Button>
            </div>
            {/* Form */}
            <div className="border-l border-r  border-sidebar max-w-4xl mx-auto p-10">
                <form onSubmit={handleSubmit}>
                    <div className="md:flex space-x-6 ">
                        <div className="w-full bg-sidebar rounded p-4 px-6">
                            <h2 className="text-lg">Full Name:</h2>
                            <input className="  border-b border-white/50 outline-none mt-4 p-2 w-full" name="fullName" type="text" placeholder="Type here" />
                        </div>
                        <div className="w-full bg-sidebar rounded p-4 px-6">
                            <h2 className="text-lg">Email:</h2>
                            <input className="  border-b border-white/50 outline-none mt-4 p-2 w-full" name="email" type="email" placeholder="Type here" />
                        </div>
                    </div>

                    {/* checkboxes */}
                    <div className="w-full bg-sidebar rounded p-6 px-6 mt-8">
                        <h2 className="text-lg">Why are you contacting us?</h2>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center gap-3">
                                <Checkbox id="webdesign" name="reason" value="Web Design" />
                                <Label htmlFor="webdesign">Web Design</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox id="Collaboration" name="reason" value="Collaboration" />
                                <Label htmlFor="Collaboration">Collaboration</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox id="mobileapp" name="reason" value="Mobile App Design" />
                                <Label htmlFor="mobileapp"> Mobile App Design</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox id="Others" name="reason" value="Others" />
                                <Label htmlFor="Others">Others</Label>
                            </div>
                        </div>
                    </div>

                    {/* Budget Range */}
                    <div className="w-full bg-sidebar rounded p-6 px-6 mt-8">
                        <h2 className="text-lg">Your Budget:</h2>
                        <p className="text-md text-gray90 py-2">Slide to indicate your budget range</p>

                        <p className="flex justify-between items-center font-bold mt-4"><span>$500</span> <span>$10,000</span></p>
                        <Slider
                            value={[value]}
                            onValueChange={handleSliderChange}
                            min={500}
                            max={10000}
                            step={100}
                            className="w-[100%] mt-4"
                        />

                        {/* Display the current value of the slider */}
                        <div className="mt-4 text-lg font-semibold">
                            Budget: ${value.toLocaleString()}
                        </div>
                    </div>
                    {/* Message */}
                    <div className="w-full bg-sidebar rounded p-6 px-6 mt-8">
                        <h2 className="text-lg">Message:</h2>
                        <textarea className="  border-b border-white/50 outline-none mt-4 p-2 w-full" name="message" placeholder="Type here" />
                    </div>

                    {/* submit */}
                    <Button className="font-bold mt-10 mb-10 mx-auto block">Submit</Button>
                </form>
            </div>
        </div>
    )
}
