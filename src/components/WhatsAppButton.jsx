import "./whatsAppButton.css";

/**
 * Floating WhatsApp "Contact us" button.
 *
 * Usage (put it once, e.g. in App.jsx, after your page sections):
 *   <WhatsAppButton />
 *
 * Optional props:
 *   phone    digits only, with country code (default: Integrated Pest Control)
 *   message  text that is typed into the chat for the visitor
 *   label    text shown next to the icon
 *   side     "right" (default) or "left"
 */
const WhatsAppButton = ({
  phone = "918947872622",
  message = "Hello Integrated Pest Control, I would like a site inspection and a quote.",
  label = "Chat on WhatsApp",
  side = "right",
}) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className={`wa-fab wa-fab--${side}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
    >
      <span className="wa-fab__label">{label}</span>

      <span className="wa-fab__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="30" height="30" focusable="false">
          {/* chat bubble with tail */}
          <path
            fill="currentColor"
            d="M16 3C8.82 3 3 8.82 3 16c0 2.45.68 4.74 1.86 6.7L3 29l6.5-1.82A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6c-2.07 0-4-.6-5.63-1.62l-.4-.24-3.86 1.08 1.1-3.76-.26-.42A10.54 10.54 0 0 1 5.4 16C5.4 10.15 10.15 5.4 16 5.4z"
          />
          {/* phone handset */}
          <g transform="translate(7.6 7.6) scale(0.7)">
            <path
              fill="currentColor"
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            />
          </g>
        </svg>
      </span>
    </a>
  );
};

export default WhatsAppButton;