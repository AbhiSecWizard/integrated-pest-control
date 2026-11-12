import { NavLink } from "react-router-dom";
import { ABOUT_STATS, ABOUT_POINTS } from "../data/aboutData";
import Check from "../shared/Check";
import AboutImage from "./AboutImage";
import { OperatorArt } from "./Aboutillustrations";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="home-sec home-sec--tint"
      aria-labelledby="about-title"
    >
      <div className="home-wrap home-split ab-home">
        <div data-reveal>
          <AboutImage
            src="/images/about/hero.jpg"
            alt="Integrated Pest Control operator at a client site in Bikaner"
            Fallback={OperatorArt}
            className="ab-figure--tilt"
          />
        </div>

        <div data-reveal style={{ "--i": 1 }}>
          <p className="home-eyebrow">About us</p>

          <h2 id="about-title" className="home-h2">
            Pest control that leaves a paper trail
          </h2>

          <p className="ab-lead">
            We are a pest management company based in Bikaner. We work with
            food processing units, warehouses and homes, and we keep a written
            record of every visit so your team can see exactly what was done
            and where.
          </p>

          <ul className="home-points">
            {ABOUT_POINTS.map((point) => (
              <li key={point}>
                <Check size={26} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <ul className="ab-mini-stats">
            {ABOUT_STATS.map(([value, label]) => (
              <li key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <NavLink className="home-btn home-btn--dark" to="/about">
            Read our full story
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;