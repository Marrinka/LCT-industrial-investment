import './secondStep.css';

import Arrow from '../arrow/arrow.js';

const SecondStep = () => {
    return  (
        <div className="secondStepContainer">
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
                    availabe={false}/>
                <Arrow
                    text="Назад"
                    rotation={true}
                    availabe={true}/>
            </div>
        </div>
    )
}

export default SecondStep;