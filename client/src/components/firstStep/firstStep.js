import { useState } from 'react';

import './firstStep.css';

import Arrow from "../arrow/arrow.js";
import Select from '../select/select.js';
import SelectWithoutLegend from '../selectWithoutLegend/selectWithoutLegend.js';

const FirstStep = () => {

    const [opf, choseOpf] = useState('');

    const onChoseOpf = (target) => {
        choseOpf(target.id);
    }

    const [opfRegister, choseOpfRegister] = useState('');

    const onChoseOpfRegister = (target) => {
        choseOpfRegister(target.id);
    }



    return (
        <div className="firstStepContainer">
            <div className="stepHead">
                <div className="stepDescription">
                    <div className="boldText">
                    Шаг 1. Выбор отрасли ведения хозяйственной деятельности
                    </div>
                    Пожалуйста, выберите отрасль ведения хозяйственной деятельности
                </div>
                <div className="opf">
                    <div className="opfChecker">
                        <div id="iBusiness"
                            onClick={(e) => onChoseOpf(e.target)}
                            className={(opf === 'iBusiness') ? 'opfActive' : ''}>ИП</div>
                        <div id="juridical"
                            onClick={(e) => onChoseOpf(e.target)}
                            className={(opf === 'juridical') ? 'opfActive' : ''}>Юридическое лицо</div>
                        <div id="nothing"
                            onClick={(e) => onChoseOpf(e.target)}
                            className={(opf === 'nothing') ? 'opfActive' : ''}>Не оформлена</div>
                    </div>
                    <div className="opfSubtitile">Текущая ОПФ</div>
                </div>
            </div>
        
                {(opf === 'nothing') ? (
                    <div className="mainIndustry">
                        <div className="selectIndustry">
                            <Select legend="Основная отрасль" 
                                options={[{value: 'foodIndustry', text:'Пищевая промышленность'},
                                {value: 'lightIndustry', text:'Легкая промышленность'},
                                {value: 'machineBuilding', text:'Машиностроение'},
                                {value: 'buildingIndustry', text:'Строительная промышленность'},
                                {value: 'heavyIndustry', text:'Тяжелая промышленность'}]}/>
                        </div>

                        <div className="opfRegistration">
                            <div className="opfRegistrationText">Зарегистрировать</div>
                            <div className="opfCheckerRegister">
                                <div id="iBusinessRegister"
                                    onClick={(e) => onChoseOpfRegister(e.target)}
                                    className={(opfRegister === 'iBusinessRegister') ? 'opfActive' : ''}>ИП</div>
                                <div id="juridicalRegister"
                                    onClick={(e) => onChoseOpfRegister(e.target)}
                                    className={(opfRegister === 'juridicalRegister') ? 'opfActive' : ''}>Юридическое лицо</div>
                            </div>
                        </div>
                    </div>
                ) : (<div className="mainIndustry onlySelector">
                        <div className="selectIndustry">
                            <Select legend="Основная отрасль" 
                                options={[{value: 'foodIndustry', text:'Пищевая промышленность'},
                                {value: 'lightIndustry', text:'Легкая промышленность'},
                                {value: 'machineBuilding', text:'Машиностроение'},
                                {value: 'buildingIndustry', text:'Строительная промышленность'},
                                {value: 'heavyIndustry', text:'Тяжелая промышленность'}]}/>
                        </div>
                    </div>)}

            <fieldset className="forIBusiness">
                <legend className='sectionLegend'>Только для ИП</legend>
                <div className="patent">
                    <div className="selectHeading">Выберите вид предпринимательской деятельности</div>
                    <div className="selectBusiness">
                        <SelectWithoutLegend legend="Вид деятельности"
                            options={[{value: "first", text: "Первый вид"}, 
                            {value: "second", text: "Второй вид"},
                            {value: "third", text: "Третий вид"},
                            {value: "fourth", text: "Четвертый вид"}]}/>
                    </div>

                    <div className="alreadyHave">Патент уже приобретен</div>
                </div>
                <div className="price">
                    <div className="priceDescription">Стоимость регистрации патента:</div>
                    <div className="calculatedPrice">0 тыс. рублей</div>
                </div>
            </fieldset>
            <div className="arrowWrapper">
                <Arrow
                    text="Далее"
                    rotation={false}
                    availabe={false}/>
            </div>

        </div>
    )
}

export default FirstStep;