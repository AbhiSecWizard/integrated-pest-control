
const Field = ({ label, id, children }) => (
  <div className="home-field">
    <label htmlFor={id}>{label}</label>
    {children}
  </div>
);

export default Field;
