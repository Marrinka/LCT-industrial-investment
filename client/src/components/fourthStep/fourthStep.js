import { animated } from 'react-spring';

import './fourthStep.css';

import Arrow from '../arrow/arrow.js';

const FourthStep = ({onChangeActiveStep, style}) => {
    return  (
        <animated.div className="fourthStepContainer" style={style}>
            <div className="stepHead">
                <div className="stepDescription">
                    <div className="boldText">
                    Шаг 4. Дополнительные услуги
                    </div>
                    Пожалуйста, выберите округ расположения производства
                </div>
            </div>
            <div className="extra"></div>
            <div className="arrowWrapper">
                <Arrow
                    text="Рассчитать"
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

export default FourthStep;