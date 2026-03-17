import PhotoCaption from "../StoryTellingSubComponet/PhotoCaption";
import HexFrame from "../StoryTellingSubComponet/PhotoFrame/HexFrame";
import OctagonFrame from "../StoryTellingSubComponet/PhotoFrame/OctagonFrame";

function Frame({ type, src, alt, caption }) {
  if (type === "hex") {
    return <HexFrame src={src} alt={alt} caption={caption} />;
  }

  if (type === "oct") {
    return <OctagonFrame src={src} alt={alt} caption={caption} />;
  }

  const frameStyles = {
    square: "border-2 border-yellow-600",
    circle: "rounded-full border-2 border-yellow-600",
  };

  return (
    <div
      className={`relative group overflow-hidden shrink-0 ${frameStyles[type]}`}
      style={{
        width: "clamp(280px,38vw,420px)",
        height: "clamp(280px,38vw,420px)",
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
  );
}

export default Frame;
