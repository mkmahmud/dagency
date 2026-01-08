"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function StartProject() {
  const [value, setValue] = useState(1500); // initial budget value
  const [loading, setLoading] = useState(false);

  const handleSliderChange = (newValue: any) => {
    setValue(newValue[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Your project request has been sent successfully!");
      form.reset();
      setValue(1500); // reset slider
    } catch (error) {
      console.error(error);
      alert("Failed to send your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="start-project" >
      {/* Header Section */}
      <div
        className="text-center py-10 font-barlow mt-20"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
        }}
      >
        <Image
          src="/logo.png"
          alt="Start Project"
          width={70}
          height={70}
          className="mx-auto mb-6"
        />
        <h1 className="font-bold text-[48px]">
          Thank you for your Interest in Zevrot.
        </h1>
        <p>
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>
        <Button className="font-bold mt-10">Start Project</Button>
      </div>

      {/* Form Section */}
      <div className="border-l border-r border-sidebar max-w-4xl mx-auto p-10">
        <form onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="md:flex space-x-6">
            <div className="w-full bg-sidebar rounded p-4 px-6">
              <h2 className="text-lg">Full Name:</h2>
              <input
                className="border-b border-white/50 outline-none mt-4 p-2 w-full"
                name="name"
                type="text"
                placeholder="Type here"
                required
              />
            </div>
            <div className="w-full bg-sidebar rounded p-4 px-6">
              <h2 className="text-lg">Email:</h2>
              <input
                className="border-b border-white/50 outline-none mt-4 p-2 w-full"
                name="email"
                type="email"
                placeholder="Type here"
                required
              />
            </div>
          </div>

          {/* Reason Checkboxes */}
          <div className="w-full bg-sidebar rounded p-6 px-6 mt-8">
            <h2 className="text-lg">Why are you contacting us?</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { id: "webdesign", label: "Web Design" },
                { id: "Collaboration", label: "Collaboration" },
                { id: "mobileapp", label: "Mobile App Design" },
                { id: "Others", label: "Others" },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <Checkbox id={item.id} name="reason" value={item.label} />
                  <Label htmlFor={item.id}>{item.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Slider */}
          <div className="w-full bg-sidebar rounded p-6 px-6 mt-8">
            <h2 className="text-lg">Your Budget:</h2>
            <p className="text-md text-gray90 py-2">
              Slide to indicate your budget range
            </p>
            <p className="flex justify-between items-center font-bold mt-4">
              <span>$500</span> <span>$10,000</span>
            </p>
            <Slider
              value={[value]}
              onValueChange={handleSliderChange}
              min={500}
              max={10000}
              step={100}
              className="w-[100%] mt-4"
            />
            <input
              type="hidden"
              name="budget"
              value={`$${value.toLocaleString()}`}
            />
            <div className="mt-4 text-lg font-semibold">
              Budget: ${value.toLocaleString()}
            </div>
          </div>

          {/* Message */}
          <div className="w-full bg-sidebar rounded p-6 px-6 mt-8">
            <h2 className="text-lg">Message:</h2>
            <textarea
              className="border-b border-white/50 outline-none mt-4 p-2 w-full"
              name="message"
              placeholder="Type here"
              required
            />
          </div>

          {/* Timestamp (optional) */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          {/* Submit Button */}
          <Button className="font-bold mt-10 mb-10 mx-auto block" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}
