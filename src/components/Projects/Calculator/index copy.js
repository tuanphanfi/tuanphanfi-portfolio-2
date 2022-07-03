import React, { useState } from 'react';

const Index = () => {
    const [num0, setNum0] = useState(0)
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(2)
    const [num3, setNum3] = useState(3)
    const [num5, setNum5] = useState(5)
    const [num6, setNum6] = useState(6)
    const [num7, setNum7] = useState(7)
    const [num8, setNum8] = useState(8)
    const [num9, setNum9] = useState(9)
    const [plus, setPlus] = useState('+')

    const [inputNumA, setInputNumA] = useState(0)
    const [inputNumB, setInputNumB] = useState(0)

    const [result, setResult] = useState(0)

    const [equaltion, setEqualtion] = useState('')

    const sum = () => {
        setResult(inputNumA + inputNumB)
    }

    const subtract = () => {

    }

    const multiply = () => {

    }

    const divide = () => {

    }

    // input 9 number
    const getNum0 = (number = 0) => {
        // setInputNumA(number)
        let temp = number.toString()
        setEqualtion(temp)
    }
    const getNum1 = (number = 1) => {
        let temp = number.toString()
        setEqualtion(temp)

    }
    const getNum2 = (number = 2) => {
        setInputNumA(number)
        setEqualtion(number)
    }
    // const inputNum3 = () => {
    //     setNum3(3)
    // }
    // const inputNum4 = () => {
    //     setNum4(4)
    // }
    // const inputNum5 = () => {
    //     setNum5(5)
    // }
    // const inputNum6 = () => {
    //     setNum6(6)
    // }
    // const inputNum7 = () => {
    //     setNum7(7)
    // }
    // const inputNum8 = () => {
    //     setNum8(8)
    // }
    // const inputNum9 = () => {
    //     setNum9(9)
    // }



    return (
        <div>
            This is a calulator
            {/* designing template */}
            <h1>Show here {equaltion}</h1>
            <h1>Result: {result}</h1>
            <button
                onClick={getNum0}

            >0</button>
            <button onClick={getNum1}>1</button>
            <button onClick={getNum2}>2</button>
            <button onClick={sum}>+</button>
            {/* <button onClick={equal}>=</button> */}
            {/* initialized buttons value */}
            {/* writting logic for calculator*/}

        </div>
    );
};

export default Index;