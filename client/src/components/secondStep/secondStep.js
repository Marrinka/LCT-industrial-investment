import { animated } from 'react-spring';

import './secondStep.css';

import Arrow from '../arrow/arrow.js';

const SecondStep = ({onChangeActiveStep, style}) => {
    return  (
        <animated.div className="secondStepContainer" style={style}>
            <div className="stepHead">
                <div className="stepDescription">
                    <div className="boldText">
                    Шаг 2. Территория расположения производства
                    </div>
                    Пожалуйста, выберите округ расположения производства
                </div>
            </div>
            <div className="space"></div>
            <div className="arrowWrapper">
                <Arrow
                    text="Далее"
                    rotation={false}
                    availabe={'true'}
                    onChangeActiveStep={onChangeActiveStep}/>
                <Arrow
                    text="Назад"
                    rotation={true}
                    availabe={'true'}
                    onChangeActiveStep={onChangeActiveStep}/>
            </div>
        </animated.div>
    )
}

export default SecondStep;