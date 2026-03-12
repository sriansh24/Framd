import React from "react";
import MainLayoutHeader from "../../layouts/Header/Header";
import HeroSection from "../../components/Home/HeroSection";
import MasonaryGallery from "../../components/Home/MasonaryGallery";

function Home() {
  return (
    <>
      <MainLayoutHeader />
      <HeroSection />
      <MasonaryGallery />
    </>
  );
}

export default Home;
