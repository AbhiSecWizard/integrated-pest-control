
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

export default Check;

