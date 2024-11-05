import { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calc.css'


function Calc() {
    const [screenValue, setScreenValue] = useState('');

    const handleButtonClick = (e) => {
        const buttonValue = e.target.dataset.key;

        if (buttonValue === 'clear') {
            setScreenValue('');
        } else if (buttonValue === 'equal') {
            try {
                const result = evaluate(screenValue);
                setScreenValue(result.toString());
            } catch (error) {
                setScreenValue('Error');
            }
        } else {
            setScreenValue(screenValue + buttonValue);
        }
    };
    return (
        <div className="calculator">
            <div id="screen">{screenValue}</div>
            <ul id="buttons">
                <li><button id="button-calc">⚛</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="clear">C</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="/">/</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="*">*</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="7">7</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="8">8</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="9">9</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="-">-</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="4">4</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="5">5</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="6">6</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="+">+</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="1">1</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="2">2</button></li>
                <li><button id="button-calc" onClick={handleButtonClick} data-key="3">3</button></li>
                <li><button onClick={handleButtonClick} data-key="equal" id="igual">=</button></li>
                <li><button onClick={handleButtonClick} data-key="0" id="cero">0</button></li>
                <li><button onClick={handleButtonClick} data-key="." id="punto">.</button></li>
            </ul>
        </div>
    );
}

export default Calc;