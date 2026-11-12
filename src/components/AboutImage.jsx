import { useState } from "react";

/**
 * Shows your real photo. If the file is missing or fails to load, it shows the
 * fallback illustration instead, so the page never has a broken image.
 */
const AboutImage = ({ src, alt, Fallback, className = "", caption }) => {
  const [failed, setFailed] = useState(!src);

  return (
    <figure className={`ab-figure ${className}`}>
      <div className="ab-figure__frame">
        {failed ? (
          <Fallback />
        ) : (
          <img
            src={src}
            alt={alt}
            width="960"
            height="720"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default AboutImage;