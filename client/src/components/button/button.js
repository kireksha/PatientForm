export const Button = ({ btnType, children, onClick, disabled }) => {
  return (
    <button
      className="btn btn-primary"
      type={btnType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
