import { useRef, useState, useCallback, useEffect } from "react";
import { N, ANGLE_STEP } from "../javascriptData/premiumWorkJs/premiumWork";

const SPIN_SPEED = 0.16;

export function useCarousel(calcMetrics) {
  const rafRef = useRef(null);
  const rotRef = useRef(0);
  const pausedRef = useRef(false);
  const isDragRef = useRef(false);
  const dragStartRef = useRef({ x: 0, rot: 0 });
  const lastFrameRef = useRef(null);

  const [activeIdx, setActiveIdx] = useState(0);

  // ── DOM transforms (no React re-render per frame) ────────────────────────
  const applyTransforms = useCallback(
    (rot) => {
      const { radius } = calcMetrics();
      for (let i = 0; i < N; i++) {
        const el = document.getElementById(`cvc-${i}`);
        if (!el) continue;
        const angleDeg = (((i * ANGLE_STEP - rot) % 360) + 360) % 360;
        const rad = (angleDeg * Math.PI) / 180;
        const x = Math.sin(rad) * radius;
        const z = Math.cos(rad) * radius;
        const depth = (z + radius) / (radius * 2);
        const scale = 0.65 + depth * 0.35;
        el.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${-angleDeg}deg) scale(${scale})`;
        el.style.opacity = String(0.18 + depth * 0.82);
        el.style.zIndex = String(Math.round(depth * 100));
      }
    },
    [calcMetrics],
  );

  // ── Which card is nearest angle 0 (front) ────────────────────────────────
  const updateActive = useCallback((rot) => {
    let best = 0,
      bestDist = Infinity;
    for (let i = 0; i < N; i++) {
      const angle = (((i * ANGLE_STEP - rot) % 360) + 360) % 360;
      const dist = Math.min(angle, 360 - angle);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    }
    setActiveIdx(best);
  }, []);

  // ── rAF loop ──────────────────────────────────────────────────────────────
  const tick = useCallback(
    (ts) => {
      if (!lastFrameRef.current) lastFrameRef.current = ts;
      const dt = ts - lastFrameRef.current;
      lastFrameRef.current = ts;
      if (!pausedRef.current && !isDragRef.current) {
        rotRef.current = (rotRef.current + SPIN_SPEED * (dt / 16.67)) % 360;
        applyTransforms(rotRef.current);
        updateActive(rotRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    },
    [applyTransforms, updateActive],
  );

  useEffect(() => {
    applyTransforms(0);
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick, applyTransforms]);

  // ── Pointer (mouse / stylus) ──────────────────────────────────────────────
  const onPointerDown = (e) => {
    isDragRef.current = true;
    pausedRef.current = true;
    dragStartRef.current = { x: e.clientX, rot: rotRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    rotRef.current = (dragStartRef.current.rot - dx * 0.22 + 7200) % 360;
    applyTransforms(rotRef.current);
    updateActive(rotRef.current);
  };
  const onPointerUp = () => {
    isDragRef.current = false;
    pausedRef.current = false;
  };

  // ── Wheel ─────────────────────────────────────────────────────────────────
  const onWheel = (e) => {
    e.preventDefault();
    rotRef.current = (rotRef.current + e.deltaY * 0.06 + 7200) % 360;
    applyTransforms(rotRef.current);
    updateActive(rotRef.current);
  };

  // ── Touch ─────────────────────────────────────────────────────────────────
  const onTouchStart = (e) => {
    isDragRef.current = true;
    pausedRef.current = true;
    dragStartRef.current = { x: e.touches[0].clientX, rot: rotRef.current };
  };
  const onTouchMove = (e) => {
    if (!isDragRef.current) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    rotRef.current = (dragStartRef.current.rot - dx * 0.28 + 7200) % 360;
    applyTransforms(rotRef.current);
    updateActive(rotRef.current);
  };
  const onTouchEnd = () => {
    isDragRef.current = false;
    pausedRef.current = false;
  };

  // ── Hover pause helpers (consumed by GalleryCard) ────────────────────────
  const onCardEnter = () => {
    pausedRef.current = true;
  };
  const onCardLeave = () => {
    pausedRef.current = false;
  };

  return {
    activeIdx,
    pointerHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
    wheelHandler: { onWheel },
    touchHandlers: { onTouchStart, onTouchMove, onTouchEnd },
    cardHoverHandlers: { onCardEnter, onCardLeave },
  };
}
