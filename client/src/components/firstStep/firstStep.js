import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './firstStep.css';

import Arrow from "../arrow/arrow.js";
import Select from '../select/select.js';
import SelectWithoutLegend from '../selectWithoutLegend/selectWithoutLegend.js';

const FirstStep = ({onChangeActiveStep}) => {

    if (!localStorage.getItem('opf')) localStorage.setItem('opf', ''); 
    const [opf, chooseOpf] = useState(localStorage.getItem('opf'));

    const onChoseOpf = (target) => {
        chooseOpf(target.id);
        localStorage.setItem('opf', target.id);
        checkIsActive(target.id, industry, patent, opfRegister);
    }

    if (!localStorage.getItem('opfRegister')) localStorage.setItem('opfRegister', '');
    const [opfRegister, chooseOpfRegister] = useState(localStorage.getItem('opfRegister'));

    const onChoseOpfRegister = (target) => {
        chooseOpfRegister(target.id);
        localStorage.setItem('opfRegister', target.id);
        checkIsActive(opf, industry, patent, target.id);
    }

    if (!localStorage.getItem('industry')) localStorage.setItem('industry', '');
    const [industry, setIndustry] = useState(localStorage.getItem('industry'));
    
    const changeIndustry = (val) => {
        setIndustry(val);
        localStorage.setItem('industry', val);
        checkIsActive(opf, val, patent, opfRegister);
    }

    if (!localStorage.getItem('patent')) localStorage.setItem('patent', '');
    const [patent, setPatent] = useState(localStorage.getItem('patent'));

    const changePatent = (val) => {
        setPatent(val);
        localStorage.setItem('patent', val);
        checkIsActive(opf, industry, val, opfRegister);
    }

    if (!localStorage.getItem('arrow')) localStorage.setItem('arrow', 'false');
    const [arrow, isActive] = useState(localStorage.getItem('arrow'));

    const checkIsActive = (opf, industry, patent, opfRegister) => {
        switch(opf) {
            case 'juridical':
                if (industry) {
                    isActive('true');
                    localStorage.setItem('arrow', true);
                }
                else {
                    isActive('false');
                    localStorage.setItem('arrow', false);
                }
                break;
            case 'iBusiness':
                if (industry && patent) {
                    isActive('true');
                    localStorage.setItem('arrow', true);
                }
                else {
                    isActive('false');
                    localStorage.setItem('arrow', false);
                }
                break;
            case 'nothing': {
                if (industry && opfRegister) {
                    if (opfRegister === 'juridicalRegister') {
                        isActive('true');
                        localStorage.setItem('arrow', true);
                    }
                    else {
                        if (patent) {
                            isActive('true');
                            localStorage.setItem('arrow', true);
                        }
                        else {
                            isActive('false');
                            localStorage.setItem('arrow', false);
                        }
                    }
                } 
                else {
                    isActive('false');
                    localStorage.setItem('arrow', false);
                }
                break;
            }
            default:
                break;
        }
    }

    if (!localStorage.getItem('selectPosition')) localStorage.setItem('selectPosition', 0);
    const [selectPosition, setSelectPosition] = useState(localStorage.getItem('selectPosition'));

    const changeSelectPosition = (x) => {
        setSelectPosition(x);
        localStorage.setItem('selectPosition', x);
    }

    const opfAnimation = useSpring({ opacity: 1, from: { opacity: 0 }});

    return (
        <form name='firstStep'>
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
                                onClick={(e) => {onChoseOpf(e.target);
                                    changeSelectPosition(0);}}
                                className={(opf === 'iBusiness') ? 'opfActive' : ''}>ИП</div>
                            <div id="juridical"
                                onClick={(e) => {onChoseOpf(e.target);
                                    changeSelectPosition(0);}}
                                className={(opf === 'juridical') ? 'opfActive' : ''}>Юридическое лицо</div>
                            <div id="nothing"
                                onClick={(e) => {onChoseOpf(e.target);
                                    changeSelectPosition(-289);}}
                                className={(opf === 'nothing') ? 'opfActive' : ''}>Не оформлена</div>
                        </div>
                        <div className="opfSubtitile">Текущая ОПФ</div>
                    </div>
                </div>

                <div className={"mainIndustry"}>
                            <div className={"selectIndustry"}
                                style={{transform: `translateX(${selectPosition}px)`}}>
                                <Select legend="Основная отрасль" 
                                    options={[{value: 'foodIndustry', text:'Пищевая промышленность'},
                                    {value: 'lightIndustry', text:'Легкая промышленность'},
                                    {value: 'machineBuilding', text:'Машиностроение'},
                                    {value: 'buildingIndustry', text:'Строительная промышленность'},
                                    {value: 'heavyIndustry', text:'Тяжелая промышленность'}]}
                                    onChangeIndustry={changeIndustry}
                                    chosen={industry}/>
                            </div>
            
                    {(opf === 'nothing') ? (
                            <animated.div className="opfRegistration" style={opfAnimation}>
                                <div className="opfRegistrationText">Зарегистрировать</div>
                                <div className="opfCheckerRegister">
                                    <div id="iBusinessRegister"
                                        onClick={(e) => onChoseOpfRegister(e.target)}
                                        className={(opfRegister === 'iBusinessRegister') ? 'opfActive' : ''}>ИП</div>
                                    <div id="juridicalRegister"
                                        onClick={(e) => onChoseOpfRegister(e.target)}
                                        className={(opfRegister === 'juridicalRegister') ? 'opfActive' : ''}>Юридическое лицо</div>
                                </div>
                            </animated.div>
                    ) : <div></div>}
                    </div>

                <fieldset className="forIBusiness">
                    <legend className='sectionLegend'>Только для ИП</legend>
                    <div className="patent">
                        <div className="selectHeading">Выберите вид предпринимательской деятельности</div>
                        <div className="selectBusiness">
                            <SelectWithoutLegend legend="Вид деятельности"
                                options={[{value: "first", text: "Первый вид"}, 
                                {value: "second", text: "Второй вид"},
                                {value: "third", text: "Третий вид"},
                                {value: "fourth", text: "Четвертый вид"}]}
                                onChangePatent={changePatent}
                                patent={patent}
                                />
                        </div>

                        <div className="alreadyHave"
                            onClick={() => changePatent('Патент уже приобретен')}>Патент уже приобретен</div>
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
                        availabe={arrow}
                        onChangeActiveStep={onChangeActiveStep}/>
                </div>

            </div>
        </form>
    )
}

export default FirstStep;