import { evaluate } from "mathjs";
import { useEffect, useState } from "react";

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function Calculator() {
  const box =
    "h-16 w-20 text-white bg-white/10 shadow-emerald-200 shadow-inner  font-bold text-3xl rounded-xl border border-emerald-500 ";
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("0");
  const [calculated, setCalculated] = useState(false);

  function handleAllclear() {
    setExpression("0");
    setResult("0");
    setCalculated(false);
  }

  function handleDelete() {
    setExpression((prevExpression) => {
      if (prevExpression === "0") {
        return prevExpression;
      } else {
        return prevExpression.slice(0, -1) || "0";
      }
    });
  }

  function handleNumber(numberClicked) {
    if (calculated) {
      setExpression(numberClicked);
      setCalculated(false);
    } else {
      setExpression((prevExpression) => {
        if (prevExpression === "0") {
          return numberClicked;
        } else {
          return prevExpression + numberClicked;
        }
      });
    }
  }

  function handleOperator(operatorClicked) {
    setExpression((prevExpression) => {
      const lastCharacter = prevExpression.slice(-1);
      if (["+", "-", "*", "/"].includes(lastCharacter)) {
        return prevExpression.slice(0, -1) + operatorClicked;
      } else {
        return prevExpression + operatorClicked;
      }
    });
    setCalculated(false);
  }

  function handleEqual() {
    try {
      setExpression((prevExpression) => {
        return prevExpression.replace(/[+\-*/]+$/, "");
      });
      const evaluatedResult = evaluate(expression);
      // Rounding to 7 decimal places
      const roundedResult = Math.round(evaluatedResult * 1e7) / 1e7;
      setResult(roundedResult.toString());
    } catch (error) {
      setResult("Error");
    }
    setCalculated(true);
  }

  return (
    <div className="flex min-h-dvh items-center justify-center gap-12 bg-gradient-to-r from-indigo-500 from-30% via-sky-500 via-60% to-emerald-500 to-80%">
      <div className="rounded-xl bg-black p-4 shadow-inner">
        <div className="mb-4 flex h-28 flex-col items-end justify-between rounded-xl bg-indigo-300 p-3 text-right font-semibold">
          <div className="text-xl text-gray-900 underline underline-offset-2">
            {expression}
          </div>
          <div className="justify-end text-5xl font-bold">
            {calculated ? result : expression}
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-4 gap-4 rounded-lg bg-purple-950 p-2 backdrop-blur-2xl">
            <Button className={box}>{"<->"}</Button>
            <Button className={box}>%</Button>
            <Button className={box} onClick={handleAllclear}>
              AC
            </Button>
            <Button className={box} onClick={handleDelete}>
              C
            </Button>
            {[7, 8, 9].map((number) => (
              <Button
                key={number}
                className={box}
                onClick={() => handleNumber(number.toString())}
              >
                {number}
              </Button>
            ))}
            <Button className={box} onClick={() => handleOperator("/")}>
              /
            </Button>
            {[4, 5, 6].map((number) => (
              <Button
                key={number}
                className={box}
                onClick={() => handleNumber(number.toString())}
              >
                {number}
              </Button>
            ))}
            <Button className={box} onClick={() => handleOperator("*")}>
              *
            </Button>
            {[1, 2, 3].map((number) => (
              <Button
                key={number}
                className={box}
                onClick={() => handleNumber(number.toString())}
              >
                {number}
              </Button>
            ))}
            <Button className={box} onClick={() => handleOperator("-")}>
              -
            </Button>
            <Button className={box} onClick={() => handleNumber(".")}>
              .
            </Button>
            <Button className={box} onClick={() => handleNumber("0")}>
              0
            </Button>
            <Button className={box} onClick={handleEqual}>
              =
            </Button>
            <Button className={box} onClick={() => handleOperator("+")}>
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
