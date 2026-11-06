import { useEffect, useState } from "react";


// Logo file lives in your project's /public folder.
// Files in /public are served from the site root, so use "/IPC_LOGO.png"
// (match the exact name and extension, it is case-sensitive once deployed).
const LOGO_SRC = "/IPC_LOGO.png";

const PHONE_LABEL = "+91 89478 72622";
const PHONE_HREF = "tel:+918947872622";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Factories & Warehouses", href: "#industrial" },
  { label: "How We Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="ipc-nav">
      <div className="ipc-nav__bar">
        <a className="ipc-nav__logo" href="/" aria-label="Integrated Pest Control, home">
          <img src={LOGO_SRC} alt="Integrated Pest Control" height="48" />
        </a>

        <button
          type="button"
          className="ipc-nav__toggle"
          aria-expanded={open}
          aria-controls="ipc-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="ipc-sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="ipc-nav__burger" aria-hidden="true" />
        </button>

        <nav id="ipc-menu" className={`ipc-nav__menu${open ? " is-open" : ""}`} aria-label="Main">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className="ipc-nav__link" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="ipc-nav__cta" href={PHONE_HREF}>
            Call {PHONE_LABEL}
          </a>
        </nav>
      </div>
    </header>
  );
}