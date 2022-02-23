import { useState } from "react";
import * as math from "mathjs"; //exporting everything with math from mathjs, ran npm i mathjs [google]
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [digits, setDigits] = useState("");
  const [result, setResult] = useState("");

  const addNums = (nums) => {
    setDigits((digits) => [...digits, nums + " "]);
  };

  const calculateResult = () => {
    const input = digits.join(""); // Remove commas

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setDigits("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="btn-bg">
        <Input digits={digits} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addNums} />
          <Button symbol="8" handleClick={addNums} />
          <Button symbol="9" handleClick={addNums} />
          <Button symbol="/" handleClick={addNums} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addNums} />
          <Button symbol="5" handleClick={addNums} />
          <Button symbol="6" handleClick={addNums} />
          <Button symbol="*" handleClick={addNums} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addNums} />
          <Button symbol="2" handleClick={addNums} />
          <Button symbol="3" handleClick={addNums} />
          <Button symbol="+" handleClick={addNums} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addNums} />
          <Button symbol="." handleClick={addNums} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" handleClick={addNums} />
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;