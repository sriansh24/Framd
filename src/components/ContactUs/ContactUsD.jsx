import React, { useEffect, useRef } from "react";

function ContactUs() {
  const trackRef = useRef(null);

  const Slider = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      label: "Alpine Peak",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
      label: "Valley Mist",
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

  useEffect(() => {
    let animation;
    let position = 0;

    const speed = 0.3;

    const animate = () => {
      position -= speed;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${position}px)`;
      }

      if (Math.abs(position) >= trackRef.current.scrollWidth / 2) {
        position = 0;
      }

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="w-full overflow-hidden pt-16 px-6 md:px-12 pb-8 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.8] bg-linear-[135deg,rgb(10,5,0)_0%,rgb(26,15,0)_30%,rgb(45,26,0)_60%,rgb(10,5,0)_100%;]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_60%_40%,rgba(139,69,19,0.3)_0%,transparent_60%)]"></div>

      {/* Content */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-normal leading-[0.9] mb-12 tracking-tight opacity-100 translate-y-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500">
        Featured Images
      </h2>

      {/* Infinite Scroll Track */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex gap-8 w-max will-change-transform"
        >
          {[...Slider, ...Slider].map((item, i) => (
            <div key={i} className="w-80 aspect-square shrink-0">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;