import HomeHero from "../feature/home/components/HomeHero";
import About from "../feature/home/components/About";
import Services from "../feature/home/components/Services";
import Mission from "../feature/home/components/Mission";
import Impacts from "../feature/home/components/Impacts";
import CTA from "../feature/home/components/CTA";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Services />
      <Mission />
      <Impacts />
      <CTA />
    </>
  );
};

export default HomePage;
