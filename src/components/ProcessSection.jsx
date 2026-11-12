
// import { STEPS } from "../data/homeData";

// const ProcessSection = () => {
//   return (
//     <section id="process" className="home-sec">
//       <div className="home-wrap">
//         <p className="home-eyebrow" data-reveal>
//           How we work
//         </p>

//         <h2 className="home-h2" data-reveal style={{ "--i": 1 }}>
//           Four steps, every visit
//         </h2>

//         <ol className="home-steps">
//           {STEPS.map(([title, description], index) => (
//             <li
//               key={title}
//               data-reveal
//               style={{ "--i": index }}
//             >
//               <span className="home-steps__n">
//                 {index + 1}
//               </span>

//               <div>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

import { STEPS } from "../data/processData";
import "./process.css"
import { useEffect, useRef } from "react";

import {
  InspectArt,
  TreatArt,
  RecordArt,
  ReviewArt,
} from "../components/Processillustrations"

const ART = {
  inspect: InspectArt,
  treat: TreatArt,
  record: RecordArt,
  review: ReviewArt,
};

const ProcessSection = () => {
  const listRef = useRef(null);

  /* Add "is-in" to each step as it scrolls into view; this starts its
     illustration animation and draws the connector line to the next step. */
  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li.home-steps__item");
    if (!items?.length) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="home-sec"
      aria-labelledby="process-title"
    >
      <div className="home-wrap">
        <p className="home-eyebrow" data-reveal>
          How we work
        </p>

        <h2
          id="process-title"
          className="home-h2"
          data-reveal
          style={{ "--i": 1 }}
        >
          Four steps, every visit
        </h2>

        <p className="home-lead" data-reveal style={{ "--i": 2 }}>
          You always know what we found, what we did and what happens next.
          Every visit follows the same four steps, and every step leaves a
          record behind.
        </p>

        <ol className="home-steps" ref={listRef}>
          {STEPS.map((step, index) => {
            const Art = ART[step.art];
            return (
              <li
                key={step.title}
                className="home-steps__item"
                style={{ "--i": index }}
              >
                <div className="home-steps__rail">
                  <span className="home-steps__n" aria-hidden="true">
                    {index + 1}
                  </span>
                </div>

                <div className="home-steps__art">{Art && <Art />}</div>

                <h3 className="home-steps__title">{step.title}</h3>

                <p className="home-steps__text">{step.description}</p>

                {step.details?.length > 0 && (
                  <ul className="home-steps__details">
                    {step.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>

        <div className="home-steps__cta" data-reveal>
          <p>
            Want to see what a visit looks like at your site? We will walk
            through it with you before you commit.
          </p>
          <a className="home-btn home-btn--dark" href="#contact">
            Book a free inspection
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;