import React, { Suspense } from "react";
import MainLayoutHeader from "../../layouts/Header/Header";
import LazySection from "../../common/LazySection";
import ErrorBoundary from "../../common/ErrorBoundary";
const MainLayoutFooter = React.lazy(
  () => import("../../layouts/Footer/Footer"),
);
const HeroSection = React.lazy(
  () => import("../../components/Home/HeroSection"),
);
const MasonaryGallery = React.lazy(
  () => import("../../components/Home/MasonaryGallery"),
);
const FeaturedImages = React.lazy(
  () => import("../../components/Home/FeaturedImages"),
);
const StoryTelling = React.lazy(
  () => import("../../components/Home/StoryTelling"),
);
const PremiumWork = React.lazy(
  () => import("../../components/Home/PremiumWork"),
);

function Home() {
  return (
    <>
      <MainLayoutHeader />
      <LazySection>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <HeroSection />
          </Suspense>
        </ErrorBoundary>
      </LazySection>

      <LazySection>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <MasonaryGallery />
          </Suspense>
        </ErrorBoundary>
      </LazySection>

      <LazySection>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <FeaturedImages />
          </Suspense>
        </ErrorBoundary>
      </LazySection>

      <LazySection>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <StoryTelling />
          </Suspense>
        </ErrorBoundary>
      </LazySection>

      <LazySection>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <PremiumWork />
          </Suspense>
        </ErrorBoundary>
      </LazySection>

      <LazySection>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <MainLayoutFooter />
          </Suspense>
        </ErrorBoundary>
      </LazySection>
    </>
  );
}

export default Home;
