import React, { useState } from 'react';
import CalculatorCSS from './Calculator.module.css'
const Index = () => {
    const [result, setResult] = useState("")

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
        // concat() put string together
        // 
    }


    const clear = () => {
        setResult("")
    }

    const backspace = () => {
        // setResult(result.slice(0, result.length - 1))
        setResult(result.slice(0, -1))
        // slice() slice toàn bộ
        // slice(numA, numB) slice from numb A to numb B

    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
            let test = "console.log('hahaha')"
            eval(test)
        } catch (err) {
            setResult("Error")
        }
        // eval() excute a function or a statement
    }
    return (
        <div className={CalculatorCSS.test}>
            <div className={CalculatorCSS.container}>
                <form action="">
                    <input type="text" value={result} />
                </form>

                <div className={CalculatorCSS.keypad}>
                    <button className={CalculatorCSS.highlight} onClick={clear} id={CalculatorCSS.clear}>Clear</button>
                    <button className={CalculatorCSS.highlight} onClick={backspace} id={CalculatorCSS.backspace}>C</button>
                    <button className={CalculatorCSS.highlight} name="/" onClick={handleClick}>&divide;</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button className={CalculatorCSS.highlight} name="*" onClick={handleClick}>&times;</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button className={CalculatorCSS.highlight} name="-" onClick={handleClick}>&ndash;</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button className={CalculatorCSS.highlight} name="+" onClick={handleClick}>+</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button className={CalculatorCSS.highlight} onClick={calculate} id={CalculatorCSS.result}>=</button>

                </div>
            </div>
        </div>
    );
};

export default Index;