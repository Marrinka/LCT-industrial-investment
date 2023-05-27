import './calculator.css';

import { useState } from 'react';
import { useSpring } from 'react-spring';

import Heading from '../heading/heading.js';
import HiddenStep from '../hiddenStep/hiddenStep.js';
import FirstStep from '../firstStep/firstStep.js';
import SecondStep from '../secondStep/secondStep.js';
import ThirdStep from '../thirdStep/thirdStep.js';
import FourthStep from '../fourthStep/fourthStep.js';

const Calculator = () => {

    const [activeStep, setActiveStep] = useState(1);

    const changeActiveStep = (availabe, rotation) => {
        if (rotation) {
            setActiveStep(activeStep-1);
        }
        else {
            if (availabe) {
                setActiveStep(activeStep+1);
            }
        }
        
    }

    const expanding = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(20px)" },
        reset: true
      });

    return (
        <div className="calculatorContainer">
            <Heading/>
            {(activeStep === 1) ? <FirstStep onChangeActiveStep={changeActiveStep} style={expanding}/> : <HiddenStep step='Шаг 1. Выбор отрасли ведения хозяйственной деятельности'/>}
            {(activeStep === 2) ? <SecondStep onChangeActiveStep={changeActiveStep} style={expanding}/> : <HiddenStep step='Шаг 2. Территория расположения производства'/>}
            {(activeStep === 3) ? <ThirdStep onChangeActiveStep={changeActiveStep} style={expanding}/> : <HiddenStep step='Шаг 3. Использование ресурсов'/>}
            {(activeStep === 4) ? <FourthStep onChangeActiveStep={changeActiveStep} style={expanding}/> : <HiddenStep step='Шаг 4. Дополнительные услуги'/>}
        </div>
    )
}

export default Calculator;