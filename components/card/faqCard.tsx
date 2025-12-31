import React from "react";
import { FaPlus } from "react-icons/fa"

export default function FaqCard({ index, question, answer }: { index: number, question: string, answer: string }) {

    // Faq Card status
    const [isOpen, setIsOpen] = React.useState(false);
    return (


        <div className="flex space-x-4 p-6 items-center  ">
            <div className="bg-gradient-to-b from-sidebar to-black/10 p-4 rounded-md w-fit">
                <h1 className="font-bold text-xl text-primary/90">{index.toString().padStart(2, '0')}</h1>
            </div>
            <div className="w-full">
                <div className="flex justify-between space-x-4 text-primary/90 w-full">
                    <h2 className="text-xl">{question}</h2>
                    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <FaPlus className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    </div>
                </div>
                {
                    isOpen && <p className="mt-4 text-gray90">{answer}</p>
                }
            </div>
        </div>

    )
}
