import React, { useState } from "react";
import StoryCard from "./StoryTellingSubComponet/StoryCard";
import GoldRule from "./StoryTellingSubComponet/GoldRule";
import { stories } from "../../storyTellingJs/pictureStory";
import { ChevronLeft, ChevronRight } from "lucide-react";

function StoryTelling() {
  const STORIES_PER_PAGE = 4;
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(null);
  const totalPages = Math.ceil(stories.length / STORIES_PER_PAGE);
  const currentStories = stories.slice(
    page * STORIES_PER_PAGE,
    page * STORIES_PER_PAGE + STORIES_PER_PAGE,
  );

  const changePage = (newPage) => {
    if (newPage === page || isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setPage(newPage);
      setIsAnimating(false);
    }, 350);
  };
  return (
    <>
      <section className="relative w-full overflow-hidden pt-14 px-6 md:px-12 pb-14 bg-[rgba(139,69,19,0.12)]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#080808_0%,#080808_80%,#0a0500_100%)] z-0" />
        <div className="absolute top-0 left-0 right-0 h-50 pointer-events-none z-1 bg-linear-to-b from-[rgba(201,147,58,0.18)] via-[rgba(201,147,58,0.06)] to-transparent" />

        {/* Section Name */}
        <div className="relative z-20 font-palatino italic text-gold-dark">
          <h2
            className="text-[1.563rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl  font-palatino italic font-normal leading-[0.9] mb-12 tracking-tight 
              opacity-100 translate-y-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500"
          >
            Where Moments
            <br />
            <span className="ms-7 ps-7">
              Become Stories...
            </span>
          </h2>

          <div
            className={`transition-opacity duration-350 ${isAnimating ? "opacity-0" : "opacity-100"}`}
          >
            {currentStories.map((story, index) => (
              <div key={story.id}>
                <StoryCard story={story} />

                {index < currentStories.length - 1 && <GoldRule />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- Pagination ----------- */}
      <div className="flex items-center justify-center gap-6 pb-16">
        <button
          onClick={() => changePage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="w-6 h-6 flex items-center justify-center rounded-full text-[0.65rem] text-[rgb(200,169,110)]
                      bg-white/5 hover:bg-white/10 transition disabled:opacity-50"
        >
          <ChevronLeft />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i)}
            className={`relative w-6 h-6 flex items-center justify-center font-mono text-[0.65rem] tracking-widest
                        p-0 border-0 bg-transparent rounded-none transition-all duration-300
                        ${
                          i === page
                            ? "text-[rgb(200,169,110)]"
                            : "text-[rgba(200,169,110,0.3)] hover:text-[rgba(200,169,110,0.6)]"
                        }`}
          >
            {String(i + 1).padStart(2, "0")}
            {i === page && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[rgb(200,169,110)]" />
            )}
          </button>
        ))}
        <button
          onClick={() => changePage(Math.min(totalPages - 1, page + 1))}
          disabled={page === totalPages - 1}
          className="w-6 h-6 flex items-center justify-center text-[0.65rem] text-[rgb(200,169,110)]
                     rounded-full bg-white/5 hover:bg-white/10 transition disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
}

export default StoryTelling;
