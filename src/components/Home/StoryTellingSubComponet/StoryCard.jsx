import React, { useState } from "react";
import Frame from "../StoryTellingSubComponet/Framed";

function StoryCard({ story }) {
  const TRUNCATE_AT = 120;
  const [expanded, setExpanded] = useState(false);
  const fullDesc = story.content.desc;
  const isTruncatable = fullDesc?.length > TRUNCATE_AT;
  const displayedDesc =
    expanded || !isTruncatable
      ? fullDesc
      : fullDesc.slice(0, TRUNCATE_AT).trimEnd() + "....";

  return (
    <div
      className={`flex flex-col md:flex-row items-center w-full gap-20 py-8
      ${story.layout === "photo-right" ? "md:flex-row-reverse" : ""}`}
    >
      <Frame
        type={story.frame}
        src={story.photo.src}
        alt={story.photo.alt}
        caption={story.photo.caption}
      />

      <div className="flex-1 min-w-0">
        <p className="uppercase text-[0.63rem] md:text-xs lg:text-[0.75rem] tracking-[0.35rem] mb-1.5 font-mono text-gold-dark font-medium opacity-70">
          {story.content.label}
        </p>
        <h3 className="text-[1.125rem] md:text-2xl lg:text-3xl xl:text-4xl tracking-tight font-playfair text-gold font-bold mb-3 opacity-100">
          {story.content.title}
        </h3>
        <p className="text-[0.75rem] md:text-[1.125rem] lg:text-[1.25rem] mb-1.5 text-justify font-cormorant text-gold opacity-80">
          {displayedDesc}
          {isTruncatable && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="ml-2 inline text-[0.75rem] md:text-[1rem] italic tracking-wide
                         text-gold-dark opacity-70 hover:opacity-100
                         underline underline-offset-2 transition-opacity duration-300
                         font-fell cursor-pointer"
            >
              {expanded ? "less" : "more"}
            </button>
          )}
        </p>
        <p className="text-[0.63rem] md:text-xs lg:text-[0.75rem] tracking-[0.35rem] font-fell text-gold-dark italic mt-4">
          {story.content.byline}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;
