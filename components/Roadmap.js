import { motion } from 'framer-motion';

const Stage = ({percent, description}) => {
    return (
        <div className="px-2 sm:px-8 py-6 grid grid-cols-12 flex">
            <div className="col-span-12 lg:col-span-2 flex items-center justify-center">
                <p className="text-6xl font-black flex">{percent}%</p>
            </div>
            <div className="col-span-12 lg:col-span-10 text-center lg:text-left pl-0 lg:pl-12 pt-8 lg:pt-0">
                <p className="text-sm text-neutral-500 leading-loose">{description}</p>
            </div>
        </div>
    );
};

const Divider = () => {
    return (
        <div className="relative py-2 w-full flex items-center justify-start px-2 sm:px-8">
            <div className="w-full border-b" />
        </div>
    );
};

const Roadmap = () => {
    return (
        <div className="pt-40 text-center custom-bg">
            <motion.p className="text-md text-white font-bold" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, type:"spring"}}>Here's our plan!</motion.p>
            <motion.h2 className="font-black text-white text-7xl pt-8 pb-20" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.6, type:"spring"}}>Roadmap</motion.h2>
            <div className="bg-white">
                <div className="mx-auto max-w-4xl container py-10 flex flex-col space-y-6">
                    <Stage percent="20" title="Initial Stage" description="Welcome you're in the right place! You're in the right discord, verified and ready to roll. A portion of the proceeds will be distributed to 20 LGBTQ+ support and advocacy organizations of the ones chosen by community members." />
                    <Divider />
                    <Stage percent="40" title="Initial Stage" description="BE BOLD, BE PROUD, BE GAY Special Giveaways will be given to raffled members of the communities, including rare Rainbow Apes, ETH, and cash!" />
                    <Divider />
                    <Stage percent="60" title="Initial Stage" description="Rainbows reign Sweep! Sweep! Sweep! Royalties will be used towards purchasing the floor for future giveaways and maintaining the community. Being the first LGBTQ+ collection of NFTs, we are making history and going to grow this community like no other! Stay tuned for INSANE holder's benefits!" />
                    <Divider />
                    <Stage percent="80" title="Initial Stage" description="Steak or stake? If you are one of the minters of the Rainbow Apes, you will be eligible to stake your ape. In return for locking up your ape for a certain amount of time, you will be rewarded our future token that can be used to redeem merchandise, mint future Rainbow Ape projects, and much more!" />
                    <Divider />
                    <Stage percent="100" title="Initial Stage" description="The fight is never over! As in the real world and the Metaverse, the fight for inclusivity, respect, and love is never over. We plan to continue the progress made by our community and build on it through the Metaverse. Love wins." />
                </div>
            </div>
        </div>
    );
};

export default Roadmap;