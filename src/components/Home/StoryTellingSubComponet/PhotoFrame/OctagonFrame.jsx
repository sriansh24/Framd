import PhotoCaption from "../../StoryTellingSubComponet/PhotoCaption";

function OctagonFrame({ src, alt, caption }) {
  const size = {
    width: "clamp(280px, 38vw, 420px)",
    height: "clamp(280px, 38vw, 420px)",
  };

  return (
    <div className="relative group shrink-0" style={size}>
      {/* SVG octagon border */}
      <svg
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        {/* Outer border */}
        <polygon
          points="76,4 184,4 256,76 256,184 184,256 76,256 4,184 4,76"
          stroke="#c9933a"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />
        {/* Inner subtle glow line */}
        <polygon
          points="79,10 181,10 250,79 250,181 181,250 79,250 10,181 10,79"
          stroke="#c9933a"
          strokeWidth="0.5"
          fill="none"
          opacity="0.25"
        />
      </svg>

      {/* Clipped image */}
      <div
        className="absolute inset-1.5 overflow-hidden z-10"
        style={{
          clipPath:
            "polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%)",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <PhotoCaption label={caption} />
      </div>
    </div>
  );
}
export default OctagonFrame;