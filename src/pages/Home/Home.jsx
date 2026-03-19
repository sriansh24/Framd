import React from "react";
import MainLayoutHeader from "../../layouts/Header/Header";
import HeroSection from "../../components/Home/HeroSection";
import MasonaryGallery from "../../components/Home/MasonaryGallery";
import FeaturedImages from "../../components/Home/FeaturedImages";
import StoryTelling from "../../components/Home/StoryTelling";
import PremiumWork from "../../components/Home/PremiumWork";

function Home() {
  return (
    <>
      <MainLayoutHeader />
      <HeroSection />
      <MasonaryGallery />
      <FeaturedImages />
      <StoryTelling />
      <PremiumWork />
    </>
  );
}

export default Home;
