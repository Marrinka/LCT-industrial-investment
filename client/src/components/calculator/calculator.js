import './calculator.css';

import Heading from '../heading/heading.js';
import FirstStep from '../firstStep/firstStep.js';
import SecondStep from '../secondStep/secondStep.js';
import ThirdStep from '../thirdStep/thirdStep.js';

const Calculator = () => {

    return (
        <div className="calculatorContainer">
            <Heading/>
            <FirstStep/>
            <SecondStep/>
            <ThirdStep/>
        </div>
    )
}

export default Calculator;