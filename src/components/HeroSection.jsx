
  import { useCallback, useEffect, useRef, useState } from "react";
import "./heroSection.css";

import { HeroArt } from "../shared/Illustrations";
import { COCKROACH, RODENT } from "../shared/ServiceIcons";

// Hero background images
import warehouse from "../images/hero/slide-1-warehouse.png";
import factory from "../images/hero/slide-2-factory.png";
import home from "../images/hero/slide-3-home.png";
import silos from "../images/hero/slide-4-silos.png";

// Slideshow configuration
const SLIDES = [
  { src: warehouse, label: "Warehouse" },
  { src: factory, label: "Factory" },
  { src: home, label: "Home" },
  { src: silos, label: "Grain Storage" },
];

const SLIDE_MS = 6000;

// Hero statistics
const STATS = [
  { value: "9", label: "Services" },
  { value: "Monthly", label: "Signed reports" },
  { value: "Same day", label: "Quote reply" },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const pad = (n) => String(n).padStart(2, "0");

/* Counts up plain numbers ("9"); other values ("Monthly") render as-is. */
const CountUp = ({ value, delay = 900, duration = 1200 }) => {
  const target = /^\d+$/.test(value) ? parseInt(value, 10) : null;
  const [shown, setShown] = useState(target === null ? null : 0);

  useEffect(() => {
    if (target === null) return undefined;
    if (prefersReducedMotion()) {
      setShown(target);
      return undefined;
    }
    let raf;
    const start = performance.now() + delay;
    const tick = (now) => {
      const p = Math.min(Math.max((now - start) / duration, 0), 1);
      setShown(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay, duration]);

  return <>{target === null ? value : shown}</>;
};

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const heroRef = useRef(null);

  const paused = hoverPaused || userPaused || tabHidden;
  const next = useCallback(
    () => setActive((prev) => (prev + 1) % SLIDES.length),
    []
  );

  // Preload every background so slide changes never flash
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Pause slideshow when browser tab is hidden
  useEffect(() => {
    const handleVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Soft mouse parallax (desktop pointers only)
  useEffect(() => {
    const el = heroRef.current;
    if (
      !el ||
      prefersReducedMotion() ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return undefined;
    }

    let raf = 0;
    const onMove = (event) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty(
          "--px",
          ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3)
        );
        el.style.setProperty(
          "--py",
          ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3)
        );
      });
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`home-hero ${paused ? "is-paused" : ""}`}
      id="top"
      aria-labelledby="hero-title"
      style={{ "--slide-ms": `${SLIDE_MS}ms` }}
    >
      {/* Background slides */}
      <div className="home-hero__slides" aria-hidden="true">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`home-hero__slide ${
              index === active ? "is-active" : ""
            }`}
            style={{ backgroundImage: `url("${slide.src}")` }}
          />
        ))}
      </div>

      <div className="home-hero__shade" aria-hidden="true" />
      <div className="home-hero__pattern" aria-hidden="true" />

      {/* Hero content */}
      <div className="home-wrap home-hero__grid">
        <div className="home-hero__copy">
          <p className="home-eyebrow hero-in" style={{ "--d": "0ms" }}>
            Pest control, fumigation and cleaning in Bikaner
          </p>

          <h1 id="hero-title">
            <span className="home-line">
              <span style={{ "--d": "150ms" }}>Keep pests out.</span>
            </span>
            <span className="home-line">
              <span className="home-accent" style={{ "--d": "300ms" }}>
                Keep your business running.
              </span>
            </span>
          </h1>

          <p className="home-lead hero-in" style={{ "--d": "550ms" }}>
            From food factories and grain warehouses to family homes, we
            deliver scheduled treatments with a clear record of every visit.
          </p>

          {/* CTA buttons */}
          <div className="home-actions hero-in" style={{ "--d": "700ms" }}>
            <a className="home-btn" href="#contact">
              Get a site inspection
              <svg
                className="home-btn__arrow"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="home-btn home-btn--ghost" href="#services">
              Explore services
            </a>
          </div>

          {/* Statistics */}
          <ul className="home-stats hero-in" style={{ "--d": "850ms" }}>
            {STATS.map((stat) => (
              <li key={stat.label}>
                <strong>
                  <CountUp value={stat.value} />
                </strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero illustration */}
        <div className="home-hero__art hero-in" style={{ "--d": "400ms" }}>
          <div className="home-hero__artframe">
            <span className="home-sonar" aria-hidden="true" />
            <span className="home-sonar home-sonar--2" aria-hidden="true" />
            <span className="home-sonar home-sonar--3" aria-hidden="true" />
            <div className="home-hero__float">
              <HeroArt COCKROACH={COCKROACH} RODENT={RODENT} />
            </div>
          </div>

          <div className="home-chip">
            <span className="home-chip__tick" aria-hidden="true">
              &#10003;
            </span>
            Monthly report signed
          </div>

          <div className="home-chip home-chip--alt">
            <span className="home-chip__tick" aria-hidden="true">
              &#10003;
            </span>
            Same day quote reply
          </div>
        </div>
      </div>

      {/* Slideshow bar: caption + dots + pause */}
      <div className="home-hero__bar">
        <div className="home-wrap home-hero__barinner">
          <p className="home-caption" aria-hidden="true">
            <span className="home-caption__count">
              {pad(active + 1)} / {pad(SLIDES.length)}
            </span>
            <span key={active} className="home-caption__text">
              {SLIDES[active].label}
            </span>
          </p>

          <div className="home-controls">
            <div
              className="home-dots"
              role="group"
              aria-label="Background image controls"
              onMouseEnter={() => setHoverPaused(true)}
              onMouseLeave={() => setHoverPaused(false)}
            >
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`home-dot ${index === active ? "is-active" : ""}`}
                  aria-label={`Show ${slide.label} background`}
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                >
                  <span className="home-dot__bar">
                    {index === active && (
                      <span className="home-dot__fill" onAnimationEnd={next} />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="home-pause"
              onClick={() => setUserPaused((value) => !value)}
              aria-label={
                userPaused
                  ? "Play background slideshow"
                  : "Pause background slideshow"
              }
            >
              {userPaused ? (
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;