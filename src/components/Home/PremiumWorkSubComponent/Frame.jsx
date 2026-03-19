import React from "react";

function Frame() {
  return (
    <>
      {[2, 1].map((l) => (
        <div
          key={l}
          className={`
            absolute pointer-events-none rounded-sm
            ${l === 2 ? "top-5 left-5 -right-5 -bottom-5 border border-[rgba(184,134,11,0.16)] bg-[rgba(6,4,0,0.54)] z-[-2]" : ""}
            ${l === 1 ? "top-2.5 left-2.5 -right-2.5 -bottom-2.5 border border-[rgba(184,134,11,0.08)] bg-[rgba(6,4,0,0.42)] z-[-1]" : ""}
          `}
        />
      ))}
    </>
  );
}
export default Frame;