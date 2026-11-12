
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

const HeroArt = ({ COCKROACH, RODENT }) => (
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
    aria-label="Illustration of grain bags under a fumigation cover"
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

export { HeroArt, StorageArt };
