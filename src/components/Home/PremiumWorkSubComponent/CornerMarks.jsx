import React from "react";

function CornerMarks() {
  return (
    <>
      {/* Top-right */}
      <div className="absolute top-2.75 right-2.75 w-3.5 h-3.5 border-t border-r border-t-[rgba(184,134,11,0.5)] border-r-[rgba(184,134,11,0.5)]" />
      {/* Top-left */}
      <div className="absolute top-2.75 left-2.75 w-3.5 h-3.5 border-t border-l border-t-[rgba(184,134,11,0.5)] border-l-[rgba(184,134,11,0.5)]" />
      {/* Bottom-right */}
      <div className="absolute bottom-2.75 right-2.75 w-3.5 h-3.5 border-b border-r border-b-[rgba(184,134,11,0.28)] border-r-[rgba(184,134,11,0.28)]" />
      {/* Bottom-left */}
      <div className="absolute bottom-2.75 left-2.75 w-3.5 h-3.5 border-b border-l border-b-[rgba(184,134,11,0.28)] border-l-[rgba(184,134,11,0.28)]" />
    </>
  );
}
export default CornerMarks;