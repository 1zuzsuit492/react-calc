import "./Button.css";

const Button = ({ symbol, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="buttons" >
      {symbol}
    </div>
  );
};

export default Button;