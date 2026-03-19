import { useState, useEffect } from "react";

function calcMetrics() {
  if (typeof window === "undefined")
    return { radius: 560, cardW: 360, cardH: 480 };
  const vw = window.innerWidth;
  if (vw < 480) return { radius: 240, cardW: 190, cardH: 260 };
  if (vw < 768) return { radius: 320, cardW: 230, cardH: 310 };
  if (vw < 1024) return { radius: 420, cardW: 290, cardH: 390 };
  return { radius: 540, cardW: 350, cardH: 470 };
}

export function useMetrics() {
  const [metrics, setMetrics] = useState(calcMetrics);

  useEffect(() => {
    const onResize = () => setMetrics(calcMetrics());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { metrics, calcMetrics };
}
