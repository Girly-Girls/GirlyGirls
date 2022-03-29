import Head from 'next/head';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from "../components/Navigation";
import Menu from '../components/Menu';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

const Home = () => {
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
    };

    return (
        <div>
            <Head>
                <title>Girly Girls | Our Roadmap</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AnimatePresence>
                {menu ? <Menu toggleMenu={toggleMenu} /> : null}
            </AnimatePresence>
            <Navigation toggleMenu={toggleMenu} />
            <Roadmap />
            <Footer />
        </div>
    );
};

export default Home;