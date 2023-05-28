import './calculator.css';

import { useState } from 'react';
import { useSpring } from 'react-spring';

import Heading from '../heading/heading.js';
import HiddenStep from '../hiddenStep/hiddenStep.js';
import FirstStep from '../firstStep/firstStep.js';
import SecondStep from '../secondStep/secondStep.js';
import ThirdStep from '../thirdStep/thirdStep.js';
import FourthStep from '../fourthStep/fourthStep.js';

import Authorization from "../authorization/authorization.js";

const Calculator = ({setData}) => {

    const [activeStep, setActiveStep] = useState(1);

    const changeActiveStep = (availabe, rotation) => {
        if (rotation) {
            setActiveStep(activeStep-1);
        }
        else {
            if (availabe === 'true') {
                setActiveStep(activeStep+1);
            }
        }
        
    }

    const [modal, setModal] = useState(false);
    const [autherized, setAutherized] = useState(false);

    const changeAutherized = () => {
        setAutherized(true);
    }

    const changeModal = () => {
        if (!autherized) setModal(!modal);
    }

    const expanding = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: (!autherized) ? "translateY(0)" : "translateY(20px)" },
        reset: true
      });
    

    const modalShow = useSpring(
        {
        from: {transform: 'translateX(627px)', opacity: 0},
        to: {transform: 'translateX(0)', opacity: 1},
        reset: true
    });



    return (
        <div className="calculatorContainer">
            <Heading headingtext='Инвеститиционный калькулятор города Москвы'/>
            {(modal) ? <Authorization onShow={modalShow} onChangeModal={changeModal} onChangeAutherized={changeAutherized}/> : <div></div>}
            {(activeStep === 1) ? <FirstStep onChangeActiveStep={changeActiveStep} style={expanding}  onChangeModal={changeModal} setData={setData}/> : <HiddenStep step='Шаг 1. Выбор отрасли ведения хозяйственной деятельности'/>}
            {(activeStep === 2) ? <SecondStep setData={setData} onChangeActiveStep={changeActiveStep} style={expanding}/> : <HiddenStep step='Шаг 2. Территория расположения производства'/>}
            {(activeStep === 3) ? <ThirdStep setData={setData} onChangeActiveStep={changeActiveStep} style={expanding}/> : <HiddenStep step='Шаг 3. Использование ресурсов'/>}
            {(activeStep === 4) ? <FourthStep setData={setData} onChangeActiveStep={changeActiveStep} style={expanding}/> : <HiddenStep step='Шаг 4. Дополнительные услуги'/>}
        </div>
    )
}

export default Calculator;