import React from "react";
import MainLayoutHeader from "../../layouts/Header/Header";
import HeroSection from "../../components/Home/HeroSection";
import MasonaryGallery from "../../components/Home/MasonaryGallery";
import FeaturedImages from "../../components/Home/FeaturedImages";

function Home() {
  return (
    <>
      <MainLayoutHeader />
      <HeroSection />
      <MasonaryGallery />
      <FeaturedImages />
    </>
  );
}

export default Home;
