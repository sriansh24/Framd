import React, { useState, useEffect, useRef } from "react";
import { CircleChevronLeft, CircleChevronRight, OctagonX } from "lucide-react";
import { slider } from "../../javascriptData/featuredImagesJs/featuredImages";

function FeaturedImages() {
  const trackRef = useRef(null);

  const positionRef = useRef(0);
  const [activeImage, setActiveImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const animate = () => {
    if (!isPaused) {
      positionRef.current -= speed;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      if (Math.abs(positionRef.current) >= trackRef.current.scrollWidth / 2) {
        positionRef.current = 0;
      }
    }

    animation = requestAnimationFrame(animate);
  };

  useEffect(() => {
    let animation;

    const speed = 0.3;

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= speed;

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }

        if (Math.abs(positionRef.current) >= trackRef.current.scrollWidth / 2) {
          positionRef.current = 0;
        }
      }

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  }, [isPaused]);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeImage]);

  const closeModal = (e) => {
    e?.stopPropagation();
    setIsClosing(true);

    setTimeout(() => {
      setActiveImage(null);
      setIsClosing(false);
    }, 250);
  };

  const scrollLeft = () => {
    positionRef.current += 200;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  };

  const scrollRight = () => {
    positionRef.current -= 200;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  };

  const showPrevImage = () => {
    const currentIndex = slider.findIndex((img) => img.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + slider.length) % slider.length;
    setActiveImage(slider[prevIndex]);
  };

  const showNextImage = () => {
    const currentIndex = slider.findIndex((img) => img.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % slider.length;
    setActiveImage(slider[nextIndex]);
  };

  return (
    <section className="w-full overflow-hidden pt-16 px-6 md:px-12 pb-8 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.8] bg-linear-[135deg,rgb(10,5,0)_0%,rgb(26,15,0)_30%,rgb(45,26,0)_60%,rgb(10,5,0)_100%;]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_60%_40%,rgba(139,69,19,0.3)_0%,transparent_60%)]"></div>

      {/* Content */}
      <div className="flex justify-between items center text-gold-dark">
        <h2
          className="ext-[1.563rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-palatino italic font-normal leading-[0.9] mb-8 tracking-tight 
                        opacity-100 translate-y-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500"
        >
          Featured Images
        </h2>
        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.12rem] tracking-wide uppercase font-mono cursor-pointer">
          View all &#x23CE;
        </p>
      </div>

      {/* Infinite Scroll Track */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-8 w-max will-change-transform"
        >
          {[...slider, ...slider].map((item, i) => (
            <div
              key={i}
              className="w-80 aspect-square shrink-0 cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              <img
                src={item.src}
                alt={item.label}
                desc={item.desc}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 right-8 flex gap-4 z-10">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          >
            <CircleChevronLeft size={30} className="text-gold" />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          >
            <CircleChevronRight size={30} className="text-gold" />
          </button>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div className="flex items-center justify-center w-full px-6">
            <div
              className="relative max-w-3xl w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(null);
                }}
                className="absolute top-4 right-4 z-100 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              >
                <OctagonX size={30} />
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.label}
                className="w-full h-full object-cover rounded-2xl"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              >
                <CircleChevronLeft size={30} className="text-gold" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              >
                <CircleChevronRight size={30} className="text-gold" />
              </button>

              <div className="absolute inset-x-0 bottom-0 p-8 rounded-b-2xl bg-linear-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-2xl font-serif text-white mb-2">
                  {activeImage.label}
                </h3>

                <p className="text-white/80">{activeImage.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedImages;
