import React from "react";
import { useMetrics } from "../../hooks/useMetrics";
import { useCarousel } from "../../hooks/useCarousel";
import PremiumStage from "../../components/Home/PremiumWorkSubComponent/PremiumStage";

function PremiumWork() {
  const { metrics, calcMetrics } = useMetrics();
  const { cardW, cardH, radius } = metrics;

  const {
    activeIdx,
    pointerHandlers,
    wheelHandler,
    touchHandlers,
    cardHoverHandlers,
  } = useCarousel(calcMetrics);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a0500_0%,#1a0f00_30%,#2d1a00_60%,#0a0500_100%)] opacity-[0.8]" />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(at_60%_40%,rgba(139,69,19,0.3)_0%,transparent_60%)]" />

      {/* Section Name — top left */}
      <div className="relative z-20 px-12 pt-16">
        <h2 className="text-[1.563rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-palatino font-normal text-gold-dark
                        leading-[0.9] italic tracking-tight transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500">
          Crafted Visions
        </h2>
      </div>

      {/* Carousel — fills remaining space and centers vertically */}
      <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden">
        <PremiumStage
          activeIdx={activeIdx}
          cardW={cardW}
          cardH={cardH}
          radius={radius}
          pointerHandlers={pointerHandlers}
          wheelHandler={wheelHandler}
          touchHandlers={touchHandlers}
          cardHoverHandlers={cardHoverHandlers}
        />
      </div>
    </section>
  );
}
export default PremiumWork;