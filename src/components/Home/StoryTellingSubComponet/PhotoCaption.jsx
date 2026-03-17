function PhotoCaption({ label }) {
  return (
    <>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 ease-out z-10" />
      <div
        className="absolute inset-6
                 flex items-end justify-center
                 opacity-0 translate-y-2
                 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 ease-out
                 z-20 text-center"
      >
        <span className="text-[1rem] italic tracking-widest text-gold font-semibold px-3 py-1">
          {label}
        </span>
      </div>
    </>
  );
}

export default PhotoCaption;
