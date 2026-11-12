import { useEffect } from "react";
import "./about.css"
import {
  COMPANY,
  ABOUT_STATS,
  STORY,
  VALUES,
  AUDIENCES,
  AREAS,
  TEAM,
} from "../data/aboutData";
import Check from "../shared/Check";
import AboutImage from "./AboutImage";
import {
  OperatorArt,
  RecordsArt,
  SiteArt,
  ValueIcon,
} from "./Aboutillustrations";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Integrated Pest Control, Bikaner";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="about" className="ab-page">
      {/* 1. Hero */}
      <section className="home-sec ab-hero" aria-labelledby="ab-h1">
        <div className="home-wrap home-split">
          <div data-reveal>
            <p className="home-eyebrow">About Integrated Pest Control</p>
            <h1 id="ab-h1" className="home-h2 ab-h1">
              Pest control you can see, check and sign
            </h1>
            <p className="ab-lead">
              We are a Bikaner pest management team for food units,
              warehouses and homes. Every visit is written down and signed, so
              you never have to take our word for it.
            </p>
            <div className="ab-actions">
              <a className="home-btn home-btn--dark" href="#contact">
                Book a free inspection
              </a>
              <a className="ab-link" href={COMPANY.phoneHref}>
                or call {COMPANY.phone}
              </a>
            </div>
          </div>

          <div data-reveal style={{ "--i": 1 }}>
            <AboutImage
              src="/images/about/hero.jpg"
              alt="Integrated Pest Control operator at a client site"
              Fallback={OperatorArt}
            />
          </div>
        </div>
      </section>

      {/* 2. Stats */}
      <section className="ab-stats-band" aria-label="At a glance">
        <ul className="home-wrap ab-stats">
          {ABOUT_STATS.map(([value, label]) => (
            <li key={label} data-reveal>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Story */}
      <section className="home-sec" aria-labelledby="ab-story">
        <div className="home-wrap home-split ab-story">
          <div data-reveal>
            <AboutImage
              src="/images/about/story.jpg"
              alt="Operator and client signing a service record"
              Fallback={RecordsArt}
              caption="Every visit ends with a signed record."
            />
          </div>
          <div data-reveal style={{ "--i": 1 }}>
            <p className="home-eyebrow">Our story</p>
            <h2 id="ab-story" className="home-h2">
              We do the work, then we show the work
            </h2>
            {STORY.map((p) => (
              <p key={p.slice(0, 24)} className="ab-p">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Values */}
      <section className="home-sec home-sec--tint" aria-labelledby="ab-values">
        <div className="home-wrap">
          <p className="home-eyebrow" data-reveal>
            How we think
          </p>
          <h2 id="ab-values" className="home-h2" data-reveal style={{ "--i": 1 }}>
            What you can expect from us
          </h2>
          <div className="ab-values">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="ab-value"
                data-reveal
                style={{ "--i": i }}
              >
                <ValueIcon name={v.icon} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who we serve */}
      <section className="home-sec" aria-labelledby="ab-serve">
        <div className="home-wrap home-split ab-serve">
          <div data-reveal style={{ "--i": 1 }} className="ab-serve__img">
            <AboutImage
              src="/images/about/site.jpg"
              alt="Clean warehouse after pest treatment"
              Fallback={SiteArt}
            />
          </div>

          <div data-reveal>
            <p className="home-eyebrow">Who we work with</p>
            <h2 id="ab-serve" className="home-h2">
              Built for places where cleanliness is not optional
            </h2>
            <div className="ab-aud">
              {AUDIENCES.map((a) => (
                <article key={a.title} className="ab-aud__item">
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <ul className="home-points">
                    {a.items.map((item) => (
                      <li key={item}>
                        <Check size={22} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Areas */}
      <section className="home-sec home-sec--tint" aria-labelledby="ab-areas">
        <div className="home-wrap">
          <p className="home-eyebrow" data-reveal>
            Where we work
          </p>
          <h2 id="ab-areas" className="home-h2" data-reveal style={{ "--i": 1 }}>
            Across Bikaner and its industrial areas
          </h2>
          <ul className="ab-areas" data-reveal style={{ "--i": 2 }}>
            {AREAS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p className="ab-p">
            Outside these areas? Call us. We will tell you honestly whether we
            can serve you well.
          </p>
        </div>
      </section>

      {/* 7. Team: hidden until you add real people to TEAM */}
      {TEAM.length > 0 && (
        <section className="home-sec" aria-labelledby="ab-team">
          <div className="home-wrap">
            <p className="home-eyebrow" data-reveal>
              Our people
            </p>
            <h2 id="ab-team" className="home-h2" data-reveal style={{ "--i": 1 }}>
              The team behind every visit
            </h2>
            <div className="ab-team">
              {TEAM.map((m, i) => (
                <article key={m.name} data-reveal style={{ "--i": i }}>
                  <div className="ab-team__photo">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} loading="lazy" />
                    ) : (
                      <span aria-hidden="true">{m.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Contact CTA */}
      <section className="home-sec">
        <div className="home-wrap">
          <div className="ab-cta" data-reveal>
            <div>
              <h2>Let us look at your site</h2>
              <p>
                Book a free inspection. We will walk the premises with you,
                tell you what we find and give you a clear quote.
              </p>
              <address className="ab-address">
                {COMPANY.address}
                <br />
                <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> ·{" "}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </address>
            </div>
            <div className="ab-cta__actions">
              <a className="home-btn home-btn--primary" href={COMPANY.phoneHref}>
                Call {COMPANY.phone}
              </a>
              <a className="home-btn home-btn--ghost" href="#contact">
                Request an inspection
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;