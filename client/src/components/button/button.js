export const Button = ({ btnType, children, onClick }) => {
  return (
    <button className="btn btn-primary" type={btnType} onClick={onClick}>
      {children}
    </button>
  );
};
