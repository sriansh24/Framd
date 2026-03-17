import PhotoCaption from "../../StoryTellingSubComponet/PhotoCaption";

function HexFrame({ src, alt, caption }) {
  const size = {
    width: "clamp(280px, 38vw, 420px)",
    height: "clamp(280px, 38vw, 420px)",
  };

  return (
    <div className="relative group shrink-0" style={size}>
      {/* Hex Frame */}
      <svg
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        <polygon
          points="130,4 254,69 254,191 130,256 6,191 6,69"
          stroke="#c9933a"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />
        <polygon
          points="130,10 248,73 248,187 130,250 12,187 12,73"
          stroke="#c9933a"
          strokeWidth="0.5"
          fill="none"
          opacity="0.25"
        />
      </svg>

      {/* Image */}
      <div
        className="absolute inset-1.5 overflow-hidden z-10"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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

export default HexFrame;
