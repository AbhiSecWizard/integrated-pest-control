import { useState } from "react";
import "./service.css"
import {
  SERVICES,
  SERVICE_STATS,
  SERVICE_PROMISES,
} from "./Servicesdata";
import { ServiceArt, ART_BY_TITLE } from "./Serviceillustrations";

const PHONE = "+918947872622";
const PHONE_LABEL = "+91 89478 72622";

const ServiceCard = ({ service, index }) => {
  // A real photo wins if it exists. If it is missing or fails to load, the
  // animated illustration for this service is shown instead.
  const [imgFailed, setImgFailed] = useState(!service.image);
  const artName = service.art || ART_BY_TITLE[service.title];

  return (
    <article
      className="home-card"
      data-reveal
      style={{ "--i": index % 4 }}
    >
      <div className="home-card__art">
        {!imgFailed ? (
          <img
            className="home-card__img"
            src={service.image}
            alt={service.imageAlt || service.title}
            loading="lazy"
            decoding="async"
            width="640"
            height="400"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="home-card__illus">
            {artName ? (
              <ServiceArt name={artName} />
            ) : (
              <svg className="home-icon" viewBox="0 0 64 64" aria-hidden="true">
                {service.icon}
              </svg>
            )}
          </div>
        )}

        {service.frequency && (
          <span className="home-card__badge">{service.frequency}</span>
        )}
      </div>

      <div className="home-card__body">
        <div className="home-card__head">
          <svg
            className="home-card__mini-icon"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            {service.icon}
          </svg>
          <h3>{service.title}</h3>
        </div>

        <p>{service.text}</p>

        {service.points?.length > 0 && (
          <ul className="home-card__points">
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <a
          className="home-card__link"
          href={`#contact`}
          aria-label={`Get a quote for ${service.title}`}
        >
          Get a quote for this service
        </a>
      </div>
    </article>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="home-sec" aria-labelledby="services-title">
      <div className="home-wrap">
        <p className="home-eyebrow" data-reveal>
          Our services
        </p>

        <h2
          id="services-title"
          className="home-h2"
          data-reveal
          style={{ "--i": 1 }}
        >
          Every pest, every space, one trusted team
        </h2>

        <p className="home-lead" data-reveal style={{ "--i": 2 }}>
          From food factories and warehouses to homes and hotels, Integrated
          Pest Control keeps pests out and keeps your paperwork audit-ready.
          Tell us what you are dealing with and we will visit, inspect and
          quote for free.
        </p>

        <ul className="home-stats" data-reveal style={{ "--i": 3 }}>
          {SERVICE_STATS.map(([value, label]) => (
            <li key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="home-grid">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="home-cta" data-reveal>
          <div className="home-cta__text">
            <h3>Not sure which service you need?</h3>
            <p>
              Describe the problem and our team will inspect your site and
              suggest a plan. No obligation.
            </p>
            <ul className="home-cta__promises">
              {SERVICE_PROMISES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="home-cta__actions">
            <a className="home-btn home-btn--primary" href={`tel:${PHONE}`}>
              Call {PHONE_LABEL}
            </a>
            <a className="home-btn home-btn--ghost" href="#contact">
              Request a free inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;