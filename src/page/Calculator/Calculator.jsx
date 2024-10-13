import React,{useState} from 'react'
import './Calculator.css'



function Calculator() {
  const [curInput, setCurInput] = useState("");
    const [preInput, setPreInput] = useState("");
    const [operator, setOperator] = useState("");

    const formatDisplay = () => {
        if (preInput === "" && curInput === "") return "0"; 
        if (operator === "") return numberWithCommas(curInput);
        return `${numberWithCommas(preInput)}${operator}${numberWithCommas(curInput)}`;
    };

    const appendNum = (value) => {
        if (curInput === "" && value === "0") return;
        if (curInput === "0" && value !== ".") {
            setCurInput(value);
        } else {
            setCurInput(curInput + value);
        }
    };

    const manageOpera = (value) => {
        switch (value) {
            case "AC":
                allClear();
                break;
            case "DE":
                deleteL();
                break;
            case "%":
                percentCal();
                break;
            case "=":
                calcuResult();
                break;
            default:
                basicOpera(value);
                break;
        }
    };

    const basicOpera = (value) => {
        if (curInput === "" && value !== "-") return;
        if (preInput !== "") {
            calcuResult();
        }
        setOperator(value);
        setPreInput(curInput);
        setCurInput("");
    };

    const percentCal = () => {
        if (curInput === "") return;
        setCurInput((parseFloat(curInput) / 100).toString());
    };

    const calcuResult = () => {
        if (preInput === "" || curInput === "" || operator === "") return;
        const prev = parseFloat(preInput);
        const num2 = parseFloat(curInput);
        let result;

        switch (operator) {
            case "+":
                result = prev + num2;
                break;
            case "-":
                result = prev - num2;
                break;
            case "*":
                result = prev * num2;
                break;
            case "/":
                result = prev / num2;
                break;
            default:
                return;
        }

        setCurInput(result.toString());
        setPreInput("");
        setOperator("");
    };

    const allClear = () => {
        setCurInput("");
        setPreInput("");
        setOperator("");
    };

    const deleteL = () => {
        if (curInput.length > 0) {
            setCurInput(curInput.slice(0, -1));
        }
    };

    const numberWithCommas = (x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
        return x;
    };

  return (
    <div className='calculator-container rounded'>

      <div className="cal-container bg-info rounded">
            <div className="screen">
                <input type="text" className="display" value={formatDisplay()} readOnly />
            </div>
            <div className="buttons">
                <div className="btn-1">
                    <button onClick={() => manageOpera("AC")} className="btn btn-danger">AC &#8635;</button>
                    <button onClick={() => manageOpera("DE")} className="btn btn-danger">Del &#8592;</button>
                    <button onClick={() => manageOpera("%")} className="btn btn-danger">%</button>
                    <button onClick={() => manageOpera("/")} className="btn btn-danger">&divide;</button>
                </div>
                <div className="btn-2">
                    <button className='btn btn-dark' onClick={() => appendNum("7")}>7</button>
                    <button className='btn btn-dark' onClick={() => appendNum("8")}>8</button>
                    <button className='btn btn-dark' onClick={() => appendNum("9")}>9</button>
                    <button onClick={() => manageOpera("*")} className="btn btn-danger">&times;</button>
                </div>
                <div className="btn-3">
                    <button className='btn btn-dark' onClick={() => appendNum("4")}>4</button>
                    <button className='btn btn-dark' onClick={() => appendNum("5")}>5</button>
                    <button className='btn btn-dark' onClick={() => appendNum("6")}>6</button>
                    <button onClick={() => manageOpera("-")} className="btn btn-danger">&minus;</button>
                </div>
                <div className="btn-4">
                    <button className='btn btn-dark' onClick={() => appendNum("1")}>1</button>
                    <button className='btn btn-dark' onClick={() => appendNum("2")}>2</button>
                    <button className='btn btn-dark' onClick={() => appendNum("3")}>3</button>
                    <button onClick={() => manageOpera("+")} className="btn btn-danger">+</button>
                </div>
                <div className="btn-5">
                    <button className='btn btn-dark' onClick={() => appendNum("0")}>0</button>
                    <button className='btn btn-dark' onClick={() => appendNum("00")}>00</button>
                    <button className='btn btn-dark' onClick={() => appendNum(".")}>.</button>
                    <button onClick={() => manageOpera("=")} className="btn btn-warning">=</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator
