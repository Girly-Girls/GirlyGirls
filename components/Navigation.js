import { useState, useEffect } from "react";
import { connectWallet, getCurrentWalletConnected } from "../util/interact";

const Navigation = ({toggleMenu}) => {
    const [top, setTop] = useState(true);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function checkWallet() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
            addWalletListener();
        }
        
        checkWallet();

        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setTop(true);
            } else {
                setTop(false);
            };
        });
    });

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                setWallet(accounts[0]);
                setStatus("");
            } else {
                setWallet("");
                setStatus("");
            }
            });
        } else {
            setStatus("😥 An Error Occured...")
        };
    };

    return (
        <div className={`z-40 fixed top-0 w-full px-8 grid grid-cols-2 lg:grid-cols-3 duration-300 ${top ? "bg-transparent py-8" : "bg-white shadow-md py-5"}`}>
            <div className="flex items-center justify-start">
                <button onClick={() => toggleMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-5 w-5 duration-300" fill="none" viewBox="0 0 24 24" stroke={top ? "#fff" : "#000"} strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex flex-grow items-center justify-center space-x-12">
                <a href="/#about">
                    <p className={`text-sm duration-300 ${top ? "text-white" : "text-black"}`}>About</p>
                </a>
                <a href="/roadmap">
                    <p className={`text-sm duration-300 ${top ? "text-white" : "text-black"}`}>Roadmap</p>
                </a>
                <a href="/#team">
                    <p className={`text-sm duration-300 ${top ? "text-white" : "text-black"}`}>Team</p>
                </a>
                <a href="/#faq">
                    <p className={`text-sm duration-300 ${top ? "text-white" : "text-black"}`}>FAQ</p>
                </a>
            </div>
            <div className="flex items-center justify-end">
                {
                    walletAddress.length > 0 ?
                    <button href="#" className={`${top ? "bg-white text-black" : "bg-black text-white"} text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300`}>
                        Connected: {(walletAddress).substring(0, 6) + "..."}
                    </button> :
                    <button href="#" className={`${top ? "bg-white text-black" : "bg-black text-white"} text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300`} onClick={() => connectWallet()}>
                        Connect Wallet
                    </button>
                }
            </div>
        </div>
    );
};

export default Navigation;