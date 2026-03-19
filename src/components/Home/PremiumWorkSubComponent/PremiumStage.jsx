import React from "react";
import { rotateCards } from "../../../javascriptData/premiumWorkJs/premiumWork";
import PremiumCard from "../PremiumWorkSubComponent/PremiumCard";

function PremiumStage({
  cardW,
  cardH,
  radius,
  pointerHandlers,
  wheelHandler,
  touchHandlers,
  cardHoverHandlers,
  activeIdx,
}) {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-grab select-none"
      {...pointerHandlers}
      {...wheelHandler}
      {...touchHandlers}
    >
      {/* Perspective wrapper */}
      <div
        style={{
          width: `${cardW}px`,
          height: `${cardH}px`,
          perspective: `${radius * 3.2}px`,
          perspectiveOrigin: "50% 50%",
        }}
        className="relative"
      >
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="absolute w-full h-full"
        >
          {rotateCards.map((card) => (
            <PremiumCard
              key={card.id}
              card={card}
              cardW={cardW}
              cardH={cardH}
              activeIdx={activeIdx}
              onMouseEnter={cardHoverHandlers.onCardEnter}
              onMouseLeave={cardHoverHandlers.onCardLeave}
            />
          ))}
        </div>
      </div>

      {/* Side vignettes */}
      {["left", "right"].map((side) => (
        <div
          key={side}
          className={`absolute top-0 bottom-0 z-5 pointer-events-none w-[clamp(30px,7vw,100px)]
            ${side === "left"
              ? "left-0 bg-[linear-gradient(90deg,#090700_0%,transparent_100%)]"
              : "right-0 bg-[linear-gradient(270deg,#090700_0%,transparent_100%)]"
            }`}
        />
      ))}
    </div>
  );
}
export default PremiumStage;