import React, { useEffect, useRef, useState } from "react";
import { CircleChevronLeft, CircleChevronRight, OctagonX } from "lucide-react";

function FeaturedImages() {
  const trackRef = useRef(null);
  const Slider = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      label: "Alpine Peak",
      desc: "A breathtaking alpine mountain peak surrounded by clouds and snow.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
      label: "Valley Mist",
      desc: "Rolling green hills covered in early morning mist.",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      label: "Forest Light",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80",
      label: "Golden Hour",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80",
      label: "Lake Silence",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
      label: "Dawn Break",
    },
  ];

  const positionRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

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
    const currentIndex = Slider.findIndex((img) => img.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + Slider.length) % Slider.length;
    setActiveImage(Slider[prevIndex]);
  };

  const showNextImage = () => {
    const currentIndex = Slider.findIndex((img) => img.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % Slider.length;
    setActiveImage(Slider[nextIndex]);
  }

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

  return (
    // ========== Section Name ==========
    <section className="relative w-full overflow-hidden pt-14 px-6 md:px-12 pb-14 isolate bg-[#080808]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808] to-[#0a0500]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0500_0%,#2b1400_35%,#4a2200_50%,#2b1400_65%,#0a0500_100%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,138,43,0.22)_0%,transparent_70%)]"></div>

      {/* Content */}
      <div className="flex items-center justify-between">
        <h2
          className="text-[1.563rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-normal leading-[0.9] mb-12 tracking-tight 
              opacity-100 translate-y-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500"
        >
          Featured Images
        </h2>
        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.12rem] tracking-wide uppercase text-gold font-mono cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          View all &#x23CE;
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-8 w-max will-change-transform"
        >
          {[...Slider, ...Slider].map((item, i) => (
            <div key={i} className="w-80 aspect-square shrink-0">
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                decoding="async"
                onClick={() => setActiveImage(item)}
                className="w-full h-full object-cover rounded-2xl cursor-pointer transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 right-8 flex gap-4 z-10">
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

      {/* Zoom Effect */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div className="flex items-center justify-center w-full px-6">
            <div
              className={`relative max-w-3xl w-full aspect-square ${isClosing ? "zoom-out" : "zoom-in"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute top-4 right-4 z-[100] w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              >
                <OctagonX size={30} />
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.label}
                className="w-full h-full rounded-2xl object-cover"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevImage();
                }}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-50"
              >
                <CircleChevronLeft size={40} className="text-gold" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-50"
              >
                <CircleChevronRight size={40} className="text-gold" />
              </button>

              <div className="absolute bottom-0 inset-x-0 p-8 rounded-b-2xl bg-linear-to-t from-black/90 via-black/50 to-transparent">
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
