import './thirdStep.css';

import Arrow from '../arrow/arrow.js';

const ThirdStep = () => {
    return  (
        <div className="thirdStepContainer">
            <div className="stepHead">
                <div className="stepDescription">
                    <div className="boldText">
                    Шаг 3. Использование ресурсов
                    </div>
                    Пожалуйста, выберите округ расположения производства
                </div>
            </div>
            <div className="resources">
                <div className="objSquareDescr">Планируемая площадь объектов капитального строительства</div>
                <div className="inputM">
                    <input type="text" 
                        className='inputResource'
                        name='objectsSquare'/>
                    <div className="unit">м<sup>2</sup></div>
                </div>
                <div className="staffDescr">Количество штатных сотрудников</div>
                <input type="text" 
                        className='inputResource'
                        name='staff'/>
                <div className="landSquareDescr">Предполагаемая площадь земельного участка для расположения промышленного производства (в квадратных метрах);</div>
                <div className="inputM">
                    <input type="text" 
                        className='inputResource'
                        name='landSquare'/>
                    <div className="unit">м<sup>2</sup></div>
                </div>

            </div>
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

export default ThirdStep;