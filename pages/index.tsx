import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import ExperienceSection from "@/sections/ExperienceSection"
import Footer from "@/components/Footer";


export const meta = {
  description:
    "Devansh Akruvala",
  author: "Devansh Akruvala",
  type: "website",
  siteName: "Devansh Akruvala portfolio website",
  imageAlt: "Devansh Akruvala portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Devansh Akruvala - Software Engineer"
        meta={meta}
      />
      <Loader>Devansh Akruvala</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          
          <Header />
          <main id="main">
            <HeroSection />
            <ExperienceSection/>
            <ProjectSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};


export default Home;
