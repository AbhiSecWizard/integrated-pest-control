
import { useEffect, useState } from "react";

// ==========================================
// CONFIGURATION
// ==========================================

const GOOGLE_SCRIPT_URL=import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const PHONE = "+91 89478 72622";
const PHONE_HREF = "tel:+918947872622";
const EMAIL = "integratedpest101@gmail.com";

const ADDRESS =
  "D-8, Samta Nagar Extension, Near Basant Vihar Palace Road, Bikaner, Rajasthan 334001";

// ==========================================
// ICONS
// ==========================================

const TERMITE = (
  <>
    <ellipse cx="32" cy="38" rx="11" ry="14" />
    <circle cx="32" cy="18" r="6" />
    <path d="M29 13l-5-7M35 13l5-7M21 32l-9-4M21 40l-10 3M43 32l9-4M43 40l10 3" />
  </>
);

const MOSQUITO = (
  <>
    <ellipse cx="30" cy="34" rx="12" ry="5" />
    <circle cx="44" cy="31" r="4" />
    <path d="M48 33l10 6M24 29c-8-14-2-20 6-17-2 6-3 11-4 17M30 29c0-14 8-18 14-12-5 4-9 8-12 13M22 38l-8 12M28 39l-3 14M34 39l3 14" />
  </>
);

const COCKROACH = (
  <>
    <ellipse cx="32" cy="38" rx="12" ry="16" />
    <circle cx="32" cy="18" r="6" />
    <path d="M29 13c-2-5-6-7-10-6M35 13c2-5 6-7 10-6M20 32l-10-4M20 40l-11 4M44 32l10-4M44 40l11 4M32 24v28" />
  </>
);

const RODENT = (
  <>
    <path d="M10 44c0-12 10-20 22-20 8 0 14 4 16 10l10 4-10 4c-2 6-8 8-14 8H18c-5 0-8-2-8-6z" />
    <circle cx="36" cy="30" r="2.5" />
    <circle cx="26" cy="22" r="6" />
    <path d="M10 48c-4 4-4 8 0 10" />
  </>
);

const BEDBUG = (
  <>
    <ellipse cx="32" cy="34" rx="15" ry="17" />
    <path d="M32 17v34M18 28l-9-5M17 36l-10 1M19 44l-9 7M46 28l9-5M47 36l10 1M45 44l9 7M27 18l-3-8M37 18l3-8" />
  </>
);

const TANK = (
  <>
    <rect x="14" y="18" width="36" height="34" rx="5" />
    <path d="M14 28h36M32 6v12M26 6h12M32 33c-5 6-6 11-1 11s6-5 1-11z" />
  </>
);

const SOFA = (
  <path d="M12 30v-8a6 6 0 016-6h28a6 6 0 016 6v8M8 34a4 4 0 018 0v8h32v-8a4 4 0 018 0v14H8zM14 54v4M50 54v4" />
);

const PROOF = (
  <path d="M8 30L32 10l24 20M14 26v26h36V26M32 34c-6 7-6 13 0 13s6-6 0-13z" />
);

// ==========================================
// CONTENT
// ==========================================

const SERVICES = [
  {
    title: "Termite Control",
    text: "Protect buildings, furniture and stored goods.",
    icon: TERMITE,
  },
  {
    title: "Mosquito Control",
    text: "Spraying for drains, gardens and standing water.",
    icon: MOSQUITO,
  },
  {
    title: "Cockroach Control",
    text: "Kitchens, toilets, drainage and dirty areas.",
    icon: COCKROACH,
  },
  {
    title: "Rodent Control",
    text: "Rodent boxes, glue pads and regular checks.",
    icon: RODENT,
  },
  {
    title: "Bed-Bug Control",
    text: "Treatment for beds, mattresses and furniture.",
    icon: BEDBUG,
  },
  {
    title: "Water Tank Cleaning",
    text: "Overhead and underground tank cleaning.",
    icon: TANK,
  },
  {
    title: "Sofa, Carpet & Mattress Cleaning",
    text: "Deep cleaning for fabric furniture.",
    icon: SOFA,
  },
  {
    title: "Water Proofing",
    text: "Leakage and seepage protection.",
    icon: PROOF,
  },
];

const SERVICE_OPTIONS = [
  ...SERVICES.map((service) => service.title),
  "Warehouse Fumigation",
  "Factory Pest Programme",
];

const PROPERTY_OPTIONS = [
  "Home",
  "Shop / Office",
  "Factory / Food unit",
  "Warehouse",
];

const FEATURES = [
  ["Documented visits", "Area-wise service records"],
  ["Fumigation", "With degassing reports"],
  ["Gap analysis", "Corrective & preventive actions"],
  ["Homes to factories", "One team, every site"],
];

const FACTORY_POINTS = [
  [
    "Warehouse fumigation & degassing",
    "with stack-wise dosage and dates on a signed report.",
  ],
  [
    "Food-plant programme",
    "covering rodents, flies, cockroaches, lizards and spiders.",
  ],
  [
    "Gap analysis & CAPA",
    "with photo evidence, owners and target dates.",
  ],
];

const STEPS = [
  ["Inspect", "Survey the site, find pest activity and entry gaps."],
  ["Treat", "Spray, traps, baits or fumigation for the pest at hand."],
  ["Record", "Log every area and get the visit signed."],
  ["Review", "Monthly report and trend analysis for your team."],
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

const Check = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="home-check"
  >
    <circle cx="10" cy="10" r="10" fill="#9EB86E" />
    <path
      d="M5.5 10.5l3 3 6-7"
      stroke="#353535"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Badge = ({ x, y, delay = 0, children }) => (
  <g transform={`translate(${x} ${y})`}>
    <g
      className="art-bob"
      style={{ animationDelay: `${delay}s` }}
    >
      <circle cx="32" cy="32" r="34" fill="#fff" />

      <g
        fill="none"
        stroke="#353535"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
        <path d="M8 58L58 8" strokeWidth="6" />
      </g>
    </g>
  </g>
);

const HeroArt = () => (
  <svg
    viewBox="0 0 520 440"
    role="img"
    aria-label="Illustration of a factory protected from pests"
    className="home-art"
  >
    <circle className="art-breathe" cx="260" cy="220" r="210" fill="#9EB86E" />
    <circle cx="260" cy="220" r="165" fill="#B5CB8A" />

    <rect x="60" y="356" width="400" height="10" rx="5" fill="#fff" />
    <rect x="110" y="214" width="300" height="144" fill="#fff" />

    <polygon
      points="100,214 100,164 170,214 170,164 240,214 240,164 310,214 310,164 380,214 380,164 420,214"
      fill="#353535"
    />

    <rect x="232" y="268" width="76" height="90" fill="#353535" />
    <path d="M270 268v90" stroke="#fff" strokeWidth="3" />

    <rect x="128" y="240" width="52" height="34" fill="#DCE4CB" />
    <rect x="340" y="240" width="40" height="22" fill="#DCE4CB" />

    <g className="art-shield">
      <path
        d="M400 262l54 20v44c0 36-24 60-54 72-30-12-54-36-54-72v-44z"
        fill="#353535"
        stroke="#fff"
        strokeWidth="6"
      />
      <path
        className="art-check"
        pathLength="1"
        d="M374 328l20 20 36-44"
        stroke="#9EB86E"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <Badge x={22} y={236}>{COCKROACH}</Badge>
    <Badge x={404} y={70} delay={1.2}>{RODENT}</Badge>
  </svg>
);

const StorageArt = () => (
  <svg
    viewBox="0 0 520 380"
    role="img"
    aria-label="Illustration of grain bag stacks under a fumigation cover"
    className="home-art home-art--panel"
  >
    <path d="M0 40h520M0 90h520" stroke="#C6D6A3" strokeWidth="6" />
    <rect y="300" width="520" height="80" fill="#C6D6A3" />

    <polygon points="40,300 70,196 190,196 220,300" fill="#fff" />
    <path
      d="M55 248h150M63 222h122M47 274h166M130 196v104"
      stroke="#9EB86E"
      strokeWidth="4"
    />

    <polygon points="260,300 290,150 450,150 480,300" fill="#353535" />
    <path
      d="M300 150l-24 150M350 150l-10 150M400 150l10 150M440 150l22 150"
      stroke="#555"
      strokeWidth="3"
    />

    <rect x="323" y="206" width="104" height="34" rx="6" fill="#9EB86E" />
    <text
      x="375"
      y="228"
      textAnchor="middle"
      fontFamily="Montserrat, sans-serif"
      fontWeight="800"
      fontSize="12"
      fill="#353535"
    >
      FUMIGATION
    </text>

    <g fill="#fff">
      <circle className="art-puff" style={{ animationDelay: "0s" }} cx="320" cy="140" r="9" />
      <circle className="art-puff" style={{ animationDelay: "1.1s" }} cx="372" cy="132" r="12" />
      <circle className="art-puff" style={{ animationDelay: "2.2s" }} cx="420" cy="140" r="8" />
      <circle className="art-puff" style={{ animationDelay: "3s" }} cx="348" cy="128" r="7" />
    </g>
  </svg>
);

const Field = ({ label, id, children }) => (
  <div className="home-field">
    <label htmlFor={id}>{label}</label>
    {children}
  </div>
);

// ==========================================
// MAIN HOME COMPONENT
// ==========================================

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    property: "",
    area: "",
    commodity: "",
    quantity: "",
    message: "",
  });

  const [anim, setAnim] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const isFumigation =
    formData.service === "Warehouse Fumigation";

  // ==========================================
  // FORM INPUT HANDLER
  // ==========================================

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // ==========================================
  // ANIMATIONS
  // ==========================================

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setAnim(true);
  }, []);

  useEffect(() => {
    if (!anim) return;

    const elements = document.querySelectorAll(
      ".home [data-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [anim]);

  // ==========================================
  // FLOATING CALL BUTTON
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 600);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // GOOGLE SHEETS FORM SUBMISSION
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (
      !GOOGLE_SCRIPT_URL.startsWith(
        "https://script.google.com/macros/s/"
      ) ||
      GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE")
    ) {
      setSubmitStatus(
        "Google Apps Script URL is not configured."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    const enquiryData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      property: formData.property,
      area: formData.area.trim(),
      commodity: isFumigation
        ? formData.commodity.trim()
        : "",
      quantity: isFumigation
        ? formData.quantity
        : "",
      message: formData.message.trim(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(enquiryData),
      });

      setSubmitStatus(
        "Enquiry submitted. Please wait while we review your request."
      );

      setFormData({
        name: "",
        phone: "",
        service: "",
        property: "",
        area: "",
        commodity: "",
        quantity: "",
        message: "",
      });

    } catch (error) {
      console.error("Google Sheets Error:", error);

      setSubmitStatus(
        "Unable to submit your enquiry. Please try again."
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // JSX
  // ==========================================

  return (
    <div className={`home${anim ? " home--anim" : ""}`}>

      {/* HERO SECTION */}

      <section className="home-hero">
        <div className="home-wrap home-hero__grid">
          <div>
            <p
              className="home-eyebrow home-eyebrow--light hero-in"
              style={{ "--d": 0 }}
            >
              Pest control, fumigation and cleaning in Bikaner
            </p>

            <h1>
              <span className="home-line">
                <span style={{ "--d": 150 }}>
                  Keep pests out.
                </span>
              </span>

              <span className="home-line">
                <span style={{ "--d": 300 }}>
                  Keep your business running.
                </span>
              </span>
            </h1>

            <p
              className="home-lead hero-in"
              style={{ "--d": 550 }}
            >
              From food factories and grain warehouses to
              family homes, we deliver scheduled treatments
              with a clear record of every visit.
            </p>

            <div
              className="home-actions hero-in"
              style={{ "--d": 700 }}
            >
              <a className="home-btn" href="#contact">
                Get a site inspection
              </a>

              <a
                className="home-btn home-btn--ghost"
                href="#services"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="home-hero__art">
            <HeroArt />

            <div className="home-chip">
              <Check size={22} />
              Monthly report signed
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <div className="home-wrap home-strip-wrap">
        <div className="home-strip">
          {FEATURES.map(([title, subtitle], index) => (
            <div
              className="home-strip__item"
              key={title}
              data-reveal
              style={{ "--i": index }}
            >
              <Check size={34} />

              <div>
                <strong>{title}</strong>
                <br />
                <span>{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}

      <section id="services" className="home-sec">
        <div className="home-wrap">
          <p className="home-eyebrow" data-reveal>
            Our services
          </p>

          <h2
            className="home-h2"
            data-reveal
            style={{ "--i": 1 }}
          >
            Every pest, every space, one trusted team
          </h2>

          <div className="home-grid">
            {SERVICES.map((service, index) => (
              <article
                className="home-card"
                key={service.title}
                data-reveal
                style={{ "--i": index % 4 }}
              >
                <div className="home-card__art">
                  <svg
                    className="home-icon"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </svg>
                </div>

                <div className="home-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORIES AND WAREHOUSES */}

      <section
        id="industrial"
        className="home-sec home-sec--tint"
      >
        <div className="home-wrap home-split">
          <div data-reveal>
            <StorageArt />
          </div>

          <div data-reveal style={{ "--i": 1 }}>
            <p className="home-eyebrow">
              For factories and warehouses
            </p>

            <h2 className="home-h2">
              Storage and food units, covered end to end
            </h2>

            <ul className="home-points">
              {FACTORY_POINTS.map(([title, description]) => (
                <li key={title}>
                  <Check size={26} />
                  <span>
                    <strong>{title}</strong> {description}
                  </span>
                </li>
              ))}
            </ul>

            <a
              className="home-btn home-btn--dark"
              href="#contact"
            >
              Talk to our team
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section id="process" className="home-sec">
        <div className="home-wrap">
          <p className="home-eyebrow" data-reveal>
            How we work
          </p>

          <h2
            className="home-h2"
            data-reveal
            style={{ "--i": 1 }}
          >
            Four steps, every visit
          </h2>

          <ol className="home-steps">
            {STEPS.map(([title, description], index) => (
              <li
                key={title}
                data-reveal
                style={{ "--i": index }}
              >
                <span className="home-steps__n">
                  {index + 1}
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="home-sec home-sec--tint"
      >
        <div
          className="home-wrap home-about"
          data-reveal
        >
          <h2 className="home-h2">
            About Integrated Pest Control
          </h2>

          <p>
            We are a pest management company based in Bikaner.
            We work with food processing units, warehouses and
            homes, and we keep a written record of every visit
            so your team can see exactly what was done and where.
          </p>
        </div>
      </section>

      {/* CONTACT AND ENQUIRY FORM */}

      <section id="contact" className="home-contact">
        <div className="home-wrap home-split">

          <div data-reveal>
            <h2 className="home-h2">
              Book a site inspection
            </h2>

            <p className="home-lead home-lead--dark">
              Tell us what you need and our team in Bikaner
              will get back to you.
            </p>

            <p>
              <strong>Address</strong>
              <br />
              {ADDRESS}
            </p>

            <p>
              <strong>Phone</strong>
              <br />
              <a
                className="home-underline"
                href={PHONE_HREF}
              >
                {PHONE}
              </a>
            </p>

            <p>
              <strong>Email</strong>
              <br />
              <a
                className="home-underline"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </p>
          </div>

          <form
            className="home-form"
            onSubmit={handleSubmit}
            data-reveal
            style={{ "--i": 1 }}
          >
            <Field label="Full name" id="h-name">
              <input
                id="h-name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange("name")}
                autoComplete="name"
                maxLength={100}
              />
            </Field>

            <Field
              label="Phone / WhatsApp number"
              id="h-phone"
            >
              <input
                id="h-phone"
                type="tel"
                inputMode="tel"
                required
                minLength={10}
                maxLength={15}
                value={formData.phone}
                onChange={handleChange("phone")}
                autoComplete="tel"
              />
            </Field>

            <Field label="Service needed" id="h-service">
              <select
                id="h-service"
                required
                value={formData.service}
                onChange={handleChange("service")}
              >
                <option value="" disabled>
                  Select a service
                </option>

                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Property type" id="h-prop">
              <select
                id="h-prop"
                value={formData.property}
                onChange={handleChange("property")}
              >
                <option value="">
                  Select (optional)
                </option>

                {PROPERTY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Area in Bikaner" id="h-area">
              <input
                id="h-area"
                type="text"
                value={formData.area}
                onChange={handleChange("area")}
                placeholder="e.g. Karni Industrial Area"
                maxLength={150}
              />
            </Field>

            {isFumigation && (
              <>
                <Field label="Commodity" id="h-com">
                  <input
                    id="h-com"
                    type="text"
                    required
                    value={formData.commodity}
                    onChange={handleChange("commodity")}
                    placeholder="e.g. Chana"
                    maxLength={150}
                  />
                </Field>

                <Field label="Quantity (MT)" id="h-qty">
                  <input
                    id="h-qty"
                    type="number"
                    min="0"
                    step="any"
                    required
                    value={formData.quantity}
                    onChange={handleChange("quantity")}
                  />
                </Field>
              </>
            )}

            <Field label="Message" id="h-msg">
              <textarea
                id="h-msg"
                rows="3"
                value={formData.message}
                onChange={handleChange("message")}
                maxLength={1000}
              />
            </Field>

            <button
              className="home-btn home-btn--dark"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Enquiry"}
            </button>

            {submitStatus && (
              <p
                className="home-note"
                role="status"
                aria-live="polite"
              >
                {submitStatus}
              </p>
            )}

            <p className="home-note">
              Your details are used only to reply to this enquiry.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="home-footer">
        <div className="home-wrap home-footer__row">
          <a
            href="/"
            className="home-footer__logo"
            aria-label="Integrated Pest Control, home"
          >
            <img
              src="/IPC_LOGO.png"
              alt="Integrated Pest Control"
              height="44"
            />
          </a>

          <p>
            {ADDRESS}
            <br />
            {PHONE} · {EMAIL}
          </p>
        </div>

        <div className="home-wrap home-footer__copy">
          © {new Date().getFullYear()} Integrated Pest Control,
          Bikaner. All rights reserved.
        </div>
      </footer>

      {/* FLOATING CALL BUTTON */}

      <a
        className={`home-fab${showFab ? " is-on" : ""}`}
        href={PHONE_HREF}
        aria-label={`Call ${PHONE}`}
        aria-hidden={!showFab}
        tabIndex={showFab ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

    </div>
  );
}