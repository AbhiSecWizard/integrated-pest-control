import { useEffect, useRef, useState } from "react";
import { CASES, FACTORY_POINTS } from "../data/industrilaData";
import Check from "../shared/Check";
import BeforeAfter from "../shared/BeforeAfter";
import "./Industrial.css"

/* Number that counts up once when it scrolls into view */
const CountUp = ({ value, decimals = 0, suffix = "" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || typeof IntersectionObserver === "undefined") {
      setShown(value);
      return undefined;
    }

    setShown(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(value * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const IndustrialSection = () => {
  const [active, setActive] = useState(CASES[0].id);
  const current = CASES.find((c) => c.id === active) || CASES[0];

  const onTabKeyDown = (e) => {
    const i = CASES.findIndex((c) => c.id === active);
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % CASES.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + CASES.length) % CASES.length;
    else return;
    e.preventDefault();
    setActive(CASES[next].id);
    document.getElementById(`case-tab-${CASES[next].id}`)?.focus();
  };

  return (
    <section
      id="industrial"
      className="home-sec home-sec--tint"
      aria-labelledby="industrial-title"
    >
      <div className="home-wrap">
        <header className="ind-head">
          <p className="home-eyebrow" data-reveal>
            For factories and warehouses
          </p>
          <h2
            id="industrial-title"
            className="home-h2"
            data-reveal
            style={{ "--i": 1 }}
          >
            Storage and food units, covered end to end
          </h2>
          <p className="home-lead" data-reveal style={{ "--i": 2 }}>
            Drag the slider on each job to see what we found and what we left
            behind. Every treatment comes with signed records you can show an
            auditor.
          </p>
        </header>

        <div
          className="ind-tabs"
          role="tablist"
          aria-label="Case studies"
          data-reveal
          style={{ "--i": 3 }}
          onKeyDown={onTabKeyDown}
        >
          {CASES.map((c) => (
            <button
              key={c.id}
              id={`case-tab-${c.id}`}
              type="button"
              role="tab"
              aria-selected={c.id === active}
              aria-controls={`case-panel-${c.id}`}
              tabIndex={c.id === active ? 0 : -1}
              className={`ind-tab${c.id === active ? " is-active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.tab}
            </button>
          ))}
        </div>

        <div
          key={current.id}
          id={`case-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`case-tab-${current.id}`}
          className="home-split ind-case"
        >
          <div className="ind-case__media">
            <BeforeAfter
              before={current.before}
              after={current.after}
              beforeAlt={current.beforeAlt}
              afterAlt={current.afterAlt}
              beforeLabel={current.beforeLabel}
              afterLabel={current.afterLabel}
            />
          </div>

          <div className="ind-case__body">
            <h3 className="ind-case__title">{current.title}</h3>
            <p className="ind-case__story">{current.story}</p>

            <ul className="ind-stats">
              {current.stats.map((s) => (
                <li key={s.label}>
                  <strong>
                    <CountUp
                      value={s.value}
                      decimals={s.decimals}
                      suffix={s.suffix}
                    />
                  </strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>

            <ul className="home-points">
              {current.points.map(([title, description]) => (
                <li key={title}>
                  <Check size={26} />
                  <span>
                    <strong>{title}</strong> {description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ind-cover" data-reveal>
          <h3>What every site gets</h3>
          <ul className="home-points ind-cover__grid">
            {FACTORY_POINTS.map(([title, description]) => (
              <li key={title}>
                <Check size={26} />
                <span>
                  <strong>{title}</strong> {description}
                </span>
              </li>
            ))}
          </ul>

          <div className="ind-cover__actions">
            <a className="home-btn home-btn--dark" href="#contact">
              Book a free site inspection
            </a>
            <a className="ind-cover__call" href="tel:+918947872622">
              or call +91 89478 72622
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialSection;