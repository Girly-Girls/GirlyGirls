import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, mintNFT } from "../util/interact";
import { motion } from 'framer-motion';

const Instagram = ({link}) => {
    return (
        <a href={link} target="_blank" className="hover:scale-95 duration-300">
            <div className="bg-pink-600 h-14 w-14 p-3.5 rounded-full flex items-center justify-center border-pink-400 border">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
            </div>
        </a>
    );
};

const Twitter = ({link}) => {
    return (
        <a href={link} target="_blank" className="hover:scale-95 duration-300">
            <div className="bg-sky-500 h-14 w-14 p-3.5 rounded-full border-sky-400 border">
                <svg viewBox="117.806 161.288 464.388 377.424" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <path d="m582.194 205.976c-17.078 7.567-35.424 12.68-54.71 14.991 19.675-11.78 34.769-30.474 41.886-52.726-18.407 10.922-38.798 18.857-60.497 23.111-17.385-18.488-42.132-30.064-69.538-30.064-52.603 0-95.266 42.663-95.266 95.307a97.3 97.3 0 0 0 2.454 21.68c-79.211-3.989-149.383-41.928-196.382-99.562-8.18 14.112-12.885 30.474-12.885 47.899 0 33.05 16.833 62.236 42.377 79.314a95.051 95.051 0 0 1 -43.154-11.924v1.227c0 46.16 32.826 84.672 76.43 93.426a95.97 95.97 0 0 1 -25.095 3.313 95.929 95.929 0 0 1 -17.936-1.677c12.128 37.836 47.306 65.406 89.008 66.142-32.622 25.565-73.71 40.802-118.337 40.802-7.69 0-15.278-.45-22.743-1.33 42.173 27.06 92.24 42.807 146.029 42.807 175.275 0 271.094-145.17 271.094-271.073 0-4.09-.103-8.222-.287-12.312 18.612-13.458 34.769-30.208 47.51-49.29z" fill="#fff"/>
                </svg>
            </div>
        </a>
    );
};

const Discord = ({link}) => {
    return (
        <a href={link} target="_blank" className="hover:scale-95 duration-300">
            <div className="bg-indigo-600 h-14 w-14 p-3 rounded-full border-indigo-500 border">
                <svg viewBox="-10.63 -.07077792 823.87 610.06955549" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <path d="m678.27 51.62c90.35 132.84 134.97 282.68 118.29 455.18-.07.73-.45 1.4-1.05 1.84-68.42 50.24-134.71 80.73-200.07 100.95a2.55 2.55 0 0 1 -2.81-.95c-15.1-21.01-28.82-43.16-40.84-66.42-.69-1.37-.06-3.02 1.36-3.56 21.79-8.21 42.51-18.05 62.44-29.7 1.57-.92 1.67-3.17.22-4.25-4.23-3.14-8.42-6.44-12.43-9.74-.75-.61-1.76-.73-2.61-.32-129.39 59.75-271.13 59.75-402.05 0-.85-.38-1.86-.25-2.59.35-4 3.3-8.2 6.57-12.39 9.71-1.45 1.08-1.33 3.33.25 4.25 19.93 11.43 40.65 21.49 62.41 29.74 1.41.54 2.08 2.15 1.38 3.52-11.76 23.29-25.48 45.44-40.86 66.45-.67.85-1.77 1.24-2.81.92-65.05-20.22-131.34-50.71-199.76-100.95-.57-.44-.98-1.14-1.04-1.87-13.94-149.21 14.47-300.29 118.18-455.18.25-.41.63-.73 1.07-.92 51.03-23.42 105.7-40.65 162.84-50.49 1.04-.16 2.08.32 2.62 1.24 7.06 12.5 15.13 28.53 20.59 41.63 60.23-9.2 121.4-9.2 182.89 0 5.46-12.82 13.25-29.13 20.28-41.63a2.47 2.47 0 0 1 2.62-1.24c57.17 9.87 111.84 27.1 162.83 50.49.45.19.82.51 1.04.95zm-339.04 283.7c.63-44.11-31.53-80.61-71.9-80.61-40.04 0-71.89 36.18-71.89 80.61 0 44.42 32.48 80.6 71.89 80.6 40.05 0 71.9-36.18 71.9-80.6zm265.82 0c.63-44.11-31.53-80.61-71.89-80.61-40.05 0-71.9 36.18-71.9 80.61 0 44.42 32.48 80.6 71.9 80.6 40.36 0 71.89-36.18 71.89-80.6z" fill="#fff"/>
                </svg>
            </div>
        </a>
    );
};

const Landing = ({totalMinted}) => {
    const [walletAddress, setWallet] = useState("");
    const [success, setSuccess] = useState(null);
    const [status, setStatus] = useState("");
    const [link, setLink] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        async function checkWallet() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
            addWalletListener();
        }
        
        checkWallet();
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
        };
    };

    const onMintPressed = async () => {
        if (!walletAddress) {
            return connectWalletPressed();
        };
        const { success, status } = await mintNFT(quantity, totalMinted);
        setLink(status);
        setSuccess(success);
    };

    const changeQuantity = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div className="min-h-screen w-full relative custom-bg">
            <div className="min-h-screen w-full mx-auto container grid grid-cols-1 lg:grid-cols-2">
                <div className="min-h-screen pt-40 pb-16 px-20 lg:pt-30 lg:pb-32 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                    <motion.p className="text-white font-medium leading-loose text-lg" initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.1, type:"spring"}}>{totalMinted} / 10,000</motion.p>
                    <motion.h2 className="text-7xl sm:text-8xl text-white font-black pt-8 pb-12" initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.15, type:"spring"}}>Girly Girls</motion.h2>
                    <motion.p className="md:w-96 text-sm text-white leading-loose" initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.2, type:"spring"}}>We're bringing the community to the metaverse where it will be a safe place to meet people of diverse backgrounds.</motion.p>
                    <motion.div className="flex flex-row items-center justify-center space-x-5 pt-12" initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.25, type:"spring"}}>
                        <Twitter link="https://twitter.com/GirlyGirlsNFT" />
                        <Discord link="https://discord.gg/x8kwc2E6jh" />
                        <Instagram link="https://www.instagram.com/girlygirlsnft/" />
                    </motion.div>
                </div>
                <div className="h-full flex items-center justify-center pb-20 lg:py-28">
                    <motion.div className="shadow-md border-2 rounded-2xl p-10 bg-white text-center flex flex-col items-center justify-center" initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.1, type:"spring"}}>
                        <img src="/images/gif.gif" className="h-28 w-28 rounded-full" />
                        <p className="font-bold text-md text-primary pt-6">Minted</p>
                        <p className="font-black text-4xl md:text-5xl pt-3 pb-7">{totalMinted} / 10,000</p>
                        <div className="flex flex-row space-x-6 pb-7">
                            <div>
                                <p className="pb-3 text-sm font-medium text-neutral-500">Quantity (Max 10)</p>
                                <input required type="number" className="border-2 rounded-xl pl-8 p-4 w-32 md:w-36 text-center" min="1" max="10" defaultValue="1" onInput={changeQuantity} placeholder="Max 10" />
                            </div>
                            <div>
                                <p className="pb-3 text-sm font-medium text-neutral-500">Total Price</p>
                                <input type="number" className={`border-2 rounded-xl p-4 w-32 md:w-36 text-center ${totalMinted >= 500 ? "" : "pl-8"}`} disabled max={10} placeholder={totalMinted >= 500 ? "    " + (quantity * 0.01).toFixed(2) + " Ξ" : 0 + " Ξ"}/>
                            </div>
                        </div>
                        {
                            walletAddress.length > 0 ?
                            <div className="flex flex-row w-full">
                                {
                                    success !== null ?
                                    <div className="flex flex-col w-full">
                                        {
                                            success ?
                                            <a href={link} className="w-full bg-emerald-500 text-white text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300">
                                                Check via Etherscan
                                            </a> :
                                            <button href="#" className="w-full bg-red-500 text-white text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300">
                                                An Error Occured...
                                            </button>
                                        }
                                    </div>:
                                    <button href="#" className="w-full bg-black text-white text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300" onClick={() => onMintPressed()}>
                                        Mint Now
                                    </button>
                                }
                            </div> :
                            <button href="#" className="w-full bg-black text-white text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300" onClick={() => connectWallet()}>
                                Connect Wallet
                            </button>
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
