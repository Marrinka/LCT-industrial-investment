import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

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
                    Пожалуйста, выберите дополнительные услуги
                </div>
            </div>
            <div className="extra"></div>
            <div className="arrowWrapper">
                <Link to='/LCT-industrial-investment/results'
                    style={{ textDecoration: 'none', color: 'rgba(17, 17, 17, 0.85)'}}>
                    <Arrow
                        text="Рассчитать"
                        rotation={false}
                        availabe={'true'}
                        onChangeActiveStep={onChangeActiveStep}/>
                </Link>
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