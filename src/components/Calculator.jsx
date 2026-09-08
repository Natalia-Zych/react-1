import { useState } from 'react'
import Button from './Button';
import styles from './Calculator.module.css'


function Calculator() {

    const operations = ["+", "-", "*", "/"];


    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);
    const [result, setResult] = useState(2);
    const [selectedOperation, setSelectedOperation] = useState("+");


    function calculateHandleClick() {
        switch (selectedOperation) {
            case "+":
                setResult(+number1 + +number2);
                break;
            case "-":
                setResult(+number1 - +number2);
                break;
            case "*":
                setResult(+number1 * +number2);
                break;
            case "/":
                setResult(+number1 / +number2);
                break;
            default:
                console.log("błąd");
        }

    }


    return (
        <section>

            <h2>Kalkulator</h2>
            <input value={number1} onChange={e => setNumber1(e.target.value)} />
            <select onChange={e => {
                console.log(e.target.value)
                setSelectedOperation(e.target.value)
            }}>
                {operations.map(x =>
                    <option value={x} key={operations.indexOf(x)}>{x}</option>
                )}
            </select>
            <input value={number2} type='number' onChange={e => setNumber2(e.target.value)} />
            <Button text="Oblicz" onClick={calculateHandleClick}></Button>
            <p>Wynik: {result}</p>
        </section>
    )
}

export default Calculator