import { useCallback, useEffect, useRef, useState } from "react";
import "../components/Industrial.css"
const clamp = (n) => Math.min(100, Math.max(0, n));

/**
 * Drag, touch or use arrow keys to compare. When the slider first scrolls into
 * view it sweeps once to show people it is interactive (skipped if the visitor
 * prefers reduced motion or has already touched it).
 */
const BeforeAfter = ({
  before,
  after,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  beforeLabel = "Before",
  afterLabel = "After",
}) => {
  const wrapRef = useRef(null);
  const touchedRef = useRef(false);
  const rafRef = useRef(0);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const stopDemo = () => {
    touchedRef.current = true;
    cancelAnimationFrame(rafRef.current);
  };

  /* One-time demo sweep when the slider scrolls into view */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const keyframes = [50, 18, 82, 50];
    const legMs = 650;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        if (touchedRef.current) return;
        const t = (now - start) / legMs;
        const leg = Math.min(Math.floor(t), keyframes.length - 2);
        const local = Math.min(t - leg, 1);
        const eased = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
        setPos(keyframes[leg] + (keyframes[leg + 1] - keyframes[leg]) * eased);
        if (t < keyframes.length - 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          if (!touchedRef.current) run();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onPointerDown = (e) => {
    stopDemo();
    setDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (dragging) setFromClientX(e.clientX);
  };
  const endDrag = (e) => {
    setDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      stopDemo();
      setPos((p) => clamp(p - step));
      e.preventDefault();
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      stopDemo();
      setPos((p) => clamp(p + step));
      e.preventDefault();
    } else if (e.key === "Home") {
      stopDemo();
      setPos(0);
      e.preventDefault();
    } else if (e.key === "End") {
      stopDemo();
      setPos(100);
      e.preventDefault();
    }
  };

  return (
    <div
      ref={wrapRef}
      className={`ba${dragging ? " is-dragging" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* After sits underneath, full size */}
      <img className="ba__img" src={after} alt={afterAlt} draggable="false" />

      {/* Before is clipped from the right, so dragging right reveals more of it */}
      <div
        className="ba__before"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img className="ba__img" src={before} alt={beforeAlt} draggable="false" />
      </div>

      <span className="ba__tag ba__tag--before" style={{ opacity: pos > 14 ? 1 : 0 }}>
        <i aria-hidden="true" /> {beforeLabel}
      </span>
      <span className="ba__tag ba__tag--after" style={{ opacity: pos < 86 ? 1 : 0 }}>
        <i aria-hidden="true" /> {afterLabel}
      </span>

      <div className="ba__line" style={{ left: `${pos}%` }}>
        <button
          type="button"
          className="ba__handle"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)} percent before`}
          onKeyDown={onKeyDown}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <span className="ba__hint" aria-hidden="true">
        Drag to compare before and after
      </span>
    </div>
  );
};

export default BeforeAfter;