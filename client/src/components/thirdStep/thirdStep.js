import { animated } from 'react-spring';
import { useState } from 'react';

import './thirdStep.css';

import Arrow from '../arrow/arrow.js';

const ThirdStep = ({onChangeActiveStep, style}) => {

    if (!localStorage.getItem('objSquare')) localStorage.setItem('objSquare', '');
    const [objSquare, setObjSquare] = useState(localStorage.getItem('objSquare'));
    
    const changeObjSquare = (val) => {
        setObjSquare(val.replace(/\D/g, ''));
        localStorage.setItem('objSquare', val.replace(/\D/g, ''));
        fourthIsAvailable(val.replace(/\D/g, ''), staff, landSquare);
    }

    if (!localStorage.getItem('staff')) localStorage.setItem('staff', '');
    const [staff, setStaff] = useState(localStorage.getItem('staff'));
    
    const changeStaff = (val) => {
        setStaff(val.replace(/\D/g, ''));
        localStorage.setItem('staff', val.replace(/\D/g, ''));
        fourthIsAvailable(objSquare, val.replace(/\D/g, ''), landSquare);
    }

    if (!localStorage.getItem('landSquare')) localStorage.setItem('landSquare', '');
    const [landSquare, setLandSquare] = useState(localStorage.getItem('landSquare'));
    
    const changeLandSquare = (val) => {
        setLandSquare(val.replace(/\D/g, ''));
        localStorage.setItem('landSquare', val.replace(/\D/g, ''));
        fourthIsAvailable(objSquare, staff, val.replace(/\D/g, ''));
    }

    if (!localStorage.getItem('arrowToFourth')) localStorage.setItem('arrowToFourth', 'false');
    const [arrowToFourth, isActiveToFourth] = useState(localStorage.getItem('arrowToFourth'));

    const fourthIsAvailable =(objSquare, staff, landSquare) => {
        if (objSquare && staff && landSquare) {
            isActiveToFourth('true');
            localStorage.setItem('arrowToFourth', 'true');
        }
        else {
            isActiveToFourth('false');
            localStorage.setItem('arrowToFourth', 'false');
        }
    }

    return  (
        <animated.div className="thirdStepContainer" style={style}>
            <div className="stepHead">
                <div className="stepDescription">
                    <div className="boldText">
                    Шаг 3. Использование ресурсов
                    </div>
                    Пожалуйста, введите необходимые данные
                </div>
            </div>
            <div className="resources">
                <div className="objSquareDescr">Планируемая площадь объектов капитального строительства</div>
                <div className="inputM">
                    <input type="text" 
                        className='inputResource'
                        name='objectsSquare'
                        onChange={(e) => changeObjSquare(e.target.value)}
                        value={objSquare}/>
                    <div className="unit">м<sup>2</sup></div>
                </div>
                <div className="staffDescr">Количество штатных сотрудников</div>
                <input type="text" 
                        className='inputResource'
                        name='staff'
                        onChange={(e) => changeStaff(e.target.value)}
                        value={staff}/>
                <div className="landSquareDescr">Предполагаемая площадь земельного участка для расположения промышленного производства (в квадратных метрах);</div>
                <div className="inputM">
                    <input type="text" 
                        className='inputResource'
                        name='landSquare'
                        onChange={(e) => changeLandSquare(e.target.value)}
                        value={landSquare}/>
                    <div className="unit">м<sup>2</sup></div>
                </div>

            </div>
            <div className="arrowWrapper">
                <Arrow
                    text="Далее"
                    rotation={false}
                    availabe={arrowToFourth}
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

export default ThirdStep;