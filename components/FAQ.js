import { useState } from "react";

const Question = ({question, answer}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white border-2 border-white py-5 text-left hover:cursor-pointer" onClick={() => setOpen(!open)}>
            <div className="flex flex-row items-center">
                <p className="text-md font-bold flex flex-grow text-black">{question}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 duration-300 ${open ? "rotate-180" : ""}`}fill="none" viewBox="0 0 24 24" stroke="#000" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div className={`duration-300 overflow-hidden ${open ? "opacity-100 pt-5" : "opacity-0 max-h-0"}`}>
                <p className="pr-5 text-sm text-neutral-500 leading-loose">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <div>
            <div className="relative bg-white pt-20 pb-20 text-center px-6">
                <div id="faq" className="absolute -top-32" />
                <p className="text-md text-primary font-bold text-black">Have some questions?</p>
                <h2 className="font-black text-black text-6xl pt-6">Our FAQ'S</h2>
                <div className="mx-auto max-w-4xl container flex flex-col space-y-2 pt-12">
                    <Question question="What is the total supply of Girly Girls?" answer="There will be a total of 10,000 exclusively generated Girly Girls."/>
                    <div className="w-full border-b" />
                    <Question question="What is the cost to mint a Girly Girl?" answer="It will cost 0.01 ETH to mint an ape + gas fees." />
                    <div className="w-full border-b" />
                    <Question question="How do I mint a Girly Girl?" answer="Minting will only be on our website. We will not contact you in any way with a link to mint a Girly Girl. When you come on the official website, simply connect your wallet and click mint." />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
