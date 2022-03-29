import Head from 'next/head';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import Landing from '../components/Landing';
import Team from '../components/Team';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [totalMinted, setTotalMinted] = useState(0);
  
  useEffect(() => {
    const getTotalMinted = async () => {
      const tokenUrl = await fetch(`https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x4fFc9f7Efd50AF9939E07647348CEb552f7E4055&apikey=${process.env.ETHERSCAN_API_KEY}`);
      const amount = await tokenUrl.json();
      if (amount.status == "1") setTotalMinted(amount.result);
    };
    getTotalMinted();
  }, []);

  function toggleMenu() {
    setMenu(!menu);
  };

  return (
    <div>
      <Head>
        <title>Girly Girls | 10,000 Unique NFT's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        {menu ? <Menu toggleMenu={toggleMenu} /> : null}
      </AnimatePresence>
      <Navigation toggleMenu={toggleMenu} />
      <Landing totalMinted={totalMinted} />
      <About />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;