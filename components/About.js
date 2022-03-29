const About = () => {
    return (
        <div className="relative bg-white pt-20 text-center px-6">
            <div id="about" className="absolute -top-32" />
            <p className="text-md text-primary font-bold text-black">Girly Girl's</p>
            <h2 className="font-black text-black text-6xl pt-6">10,000 Unique NFT's</h2>
            <div className="mx-auto max-w-xl container pt-12">
                <p className="lg:px-12 text-sm text-neutral-500 leading-loose">Girly Girls will be making its way into Sandbox post launch, where many events will be held, including the annual Pride Parade.</p>
            </div>
            <div className="w-full flex items-center justify-center pt-6">
                <img src="/images/showcase.png" className="h-68" />
            </div>
        </div>
    );
};

export default About;