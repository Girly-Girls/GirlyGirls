import { useState, useEffect } from "react";
import { connectWallet, getCurrentWalletConnected } from "../util/interact";
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

const OpenSea = ({link}) => {
    return (
        <a href={link} target="_blank" className="hover:scale-95 duration-300">
            <div className="bg-blue-500 h-12 w-12 p-2.5 rounded-full border-blue-400 border">
                <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z" fill="#fff" />
                </svg>
            </div>
        </a>
    );
};

const Menu = ({toggleMenu}) => {
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
    }, []);

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                setWallet(accounts[0]);
                setStatus("Wallet connected!");
            } else {
                setWallet("");
                setStatus("🦊 Connect to Metamask using the top button.");
            }
            });
        } else {
            setStatus("");
        };
    };

    return (
        <motion.div className="z-50 fixed top-0 bottom-0 w-full h-full bg-black" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{type: "spring", duration: 0.6}}>
            <div className={`px-8 grid grid-cols-2 duration-300 ${top ? "bg-transparent py-8" : "py-5"}`}>
                <div className="flex items-center justify-start">
                    <button onClick={() => toggleMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-end">
                    {
                        walletAddress.length > 0 ?
                        <button href="#" className="bg-white text-black text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300">
                            Connected: {(walletAddress).substring(0, 6) + "..."}
                        </button> :
                        <button href="#" className="bg-white text-black text-sm font-medium py-5 px-6 rounded-xl hover:scale-95 duration-300" onClick={() => connectWallet()}>
                            Connect Wallet
                        </button>
                    }
                </div>
            </div>
            <div className="w-full flex flex-col items-center space-y-12 py-10">
                <motion.a href="/#about" onClick={() => toggleMenu()} initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, type:"spring"}}>
                    <p className="text-sm font-medium duration-300 text-white">About</p>
                </motion.a>
                <motion.a href="/roadmap" onClick={() => toggleMenu()} initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.1, type:"spring"}}>
                    <p className="text-sm font-medium duration-300 text-white">Roadmap</p>
                </motion.a>
                <motion.a href="/#team" onClick={() => toggleMenu()} initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.2, type:"spring"}}>
                    <p className="text-sm font-medium duration-300 text-white">Team</p>
                </motion.a>
                <motion.a href="/#faq" onClick={() => toggleMenu()} initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.3, type:"spring"}}>
                    <p className="text-sm font-medium duration-300 text-white">FAQ</p>
                </motion.a>
            </div>
            <motion.div className="py-10 w-full flex justify-center flex-row space-x-6" initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, delay: 0.3, type:"spring"}}>
                <Instagram link="https://www.instagram.com/rainbowapesnft/" />
                <Twitter link="https://twitter.com/RainbowApeNFT" />
                <Discord link="https://discord.gg/x8kwc2E6jh" />
            </motion.div>
        </motion.div>
    );
};

export default Menu;