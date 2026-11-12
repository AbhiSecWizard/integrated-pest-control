
import { CONTACT_INFO } from "../data/homeData";

const FooterSection = () => {
  return (
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
          {CONTACT_INFO.address}
          <br />
          {CONTACT_INFO.phone} · {CONTACT_INFO.email}
        </p>
      </div>

      <div className="home-wrap home-footer__copy">
        © {new Date().getFullYear()} Integrated Pest Control,
        Bikaner. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
