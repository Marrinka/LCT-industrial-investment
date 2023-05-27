import './fourthStep.css';

import Arrow from '../arrow/arrow.js';

const FourthStep = () => {
    return  (
        <div className="fourthStepContainer">
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
                    availabe={false}/>
                <Arrow
                    text="Назад"
                    rotation={true}
                    availabe={true}/>
            </div>
        </div>
    )
}

export default FourthStep;