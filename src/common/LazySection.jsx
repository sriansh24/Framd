import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function LazySection({ children, minHeight = 300 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`fade-section ${show ? "visible" : ""}`}
      style={!show ? { minHeight } : {}}
    >
      {show ? children : null}
    </div>
  );
}

export default LazySection;