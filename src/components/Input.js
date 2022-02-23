import "./Input.css";

const Input = ({ digits, result }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <h1>{result}</h1>
      </div>

      <div className="digits">
        <h3>{digits}</h3>
      </div>
    </div>
  );
};

export default Input;