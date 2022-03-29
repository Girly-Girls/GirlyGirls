const Profile = ({name, position, image}) => {
    return (
        <div className="flex flex-col items-center justify-center">
           <img src={image} className="border-white border-8 h-64 w-64 shadow-lg" />
           <div className="text-center">
                <h4 className="font-black text-white text-3xl pt-7">{name}</h4>
                <p className="text-sm pt-3 text-white">{position}</p>
           </div>
        </div>
    );
};

const Team = () => {
    return (
        <div className="relative text-center relative overflow-hidden custom-bg">
            <div id="team" className="absolute -top-32" />
            <div className="pt-20 pb-24 px-6">
                <p className="text-md text-white font-bold">Who are we?</p>
                <h2 className="font-black text-white text-6xl pt-6">Our Team</h2>
                <div className="mx-auto max-w-2xl container grid grid-cols-1 md:grid-cols-2 pt-12 space-y-12 md:space-y-0">
                    <Profile name="Queer Queen" position="Founder" image="/images/1.png" />
                    <Profile name="Doc" position="Founder / Marketing Director" image="/images/2.png" />
                </div>
            </div>
        </div>
    );
};

export default Team;