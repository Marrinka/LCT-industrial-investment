import './calculator.css';

import Heading from '../heading/heading.js';


import FirstStep from '../firstStep/firstStep.js';

const Calculator = () => {

    return (
        <div className="calculatorContainer">
            <Heading/>
            <FirstStep/>
        </div>
    )
}

export default Calculator;