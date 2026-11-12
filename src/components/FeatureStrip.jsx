
import { FEATURES } from "../data/homeData";
import Check from "../shared/Check";

const FeatureStrip = () => {
  return (
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
  );
};

export default FeatureStrip;
