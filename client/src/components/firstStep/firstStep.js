import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import gIndustries from './getIndustries.js';
import getPatents from './getPatents.js';

import './firstStep.css';

import Arrow from "../arrow/arrow.js";
import Select from '../select/select.js';
import SelectWithoutLegend from '../selectWithoutLegend/selectWithoutLegend.js';

const FirstStep = ({onChangeActiveStep, style, onChangeModal, setData}) => {

    if (!localStorage.getItem('opf')) localStorage.setItem('opf', ''); 
    const [opf, chooseOpf] = useState(localStorage.getItem('opf'));

    const onChoseOpf = (target) => {
        chooseOpf(target.id);
        localStorage.setItem('opf', target.id);
        secondIsAvailable(target.id, industry, patent, opfRegister);
    }

    if (!localStorage.getItem('opfRegister')) localStorage.setItem('opfRegister', '');
    const [opfRegister, chooseOpfRegister] = useState(localStorage.getItem('opfRegister'));

    const onChoseOpfRegister = (target) => {
        chooseOpfRegister(target.id);
        localStorage.setItem('opfRegister', target.id);
        secondIsAvailable(opf, industry, patent, target.id);
    }

    if (!localStorage.getItem('industry')) localStorage.setItem('industry', '');
    const [industry, setIndustry] = useState(localStorage.getItem('industry'));
    
    const changeIndustry = (val) => {
        setIndustry(val);
        localStorage.setItem('industry', val);
        secondIsAvailable(opf, val, patent, opfRegister);
    }

    if (!localStorage.getItem('patent')) localStorage.setItem('patent', '');
    const [patent, setPatent] = useState(localStorage.getItem('patent'));

    const changePatent = (val) => {
        setPatent(val);
        localStorage.setItem('patent', val);
        secondIsAvailable(opf, industry, val, opfRegister);
    }

    if (!localStorage.getItem('arrowToSecond')) localStorage.setItem('arrowToSecond', 'false');
    const [arrowToSecond, isActiveToSecond] = useState(localStorage.getItem('arrowToSecond'));

    const secondIsAvailable = (opf, industry, patent, opfRegister) => {
        switch(opf) {
            case 'juridical':
                if (industry) {
                    isActiveToSecond('true');
                    localStorage.setItem('arrowToSecond', true);
                }
                else {
                    isActiveToSecond('false');
                    localStorage.setItem('arrowToSecond', false);
                }
                break;
            case 'iBusiness':
                if (industry && patent) {
                    isActiveToSecond('true');
                    localStorage.setItem('arrowToSecond', true);
                }
                else {
                    isActiveToSecond('false');
                    localStorage.setItem('arrowToSecond', false);
                }
                break;
            case 'nothing': {
                if (industry && opfRegister) {
                    if (opfRegister === 'juridicalRegister') {
                        isActiveToSecond('true');
                        localStorage.setItem('arrowToSecond', true);
                    }
                    else {
                        if (patent) {
                            isActiveToSecond('true');
                            localStorage.setItem('arrowToSecond', true);
                        }
                        else {
                            isActiveToSecond('false');
                            localStorage.setItem('arrowToSecond', false);
                        }
                    }
                } 
                else {
                    isActiveToSecond('false');
                    localStorage.setItem('arrowToSecond', false);
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

    const [opfAnimated, setOpfAnimated] = useState(false);

    const opfAnimation = useSpring({ opacity: 1, from: { opacity: (opfAnimated) ? 0 : 1}, config: {duration: 500}, reset: true});
    
    const [industries, setIndustries] = useState([]);
    const [patents, setPatents] = useState([]);

    useEffect(() => {
        const getOptions = async () => {
            gIndustries(setIndustries);
            getPatents(setPatents);
        };

        getOptions();
    }, []);

    useEffect(() => {
        const [data, setNewData] = setData();

        setNewData({...data, industry, opf, patent});

    }, [industry, opf, patent]);

    const getPrice = () => {
        if (patent === 'Патент уже приобретен' || !patents.length) return 0;
        else {
            return 79;
        }
    }

    return (
        <animated.div className="firstStepContainer" style={style}>
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
                                changeSelectPosition(-289);
                                setOpfAnimated(true);}}
                            className={(opf === 'nothing') ? 'opfActive' : ''}>Не оформлена</div>
                    </div>
                    <div className="opfSubtitile">Текущая ОПФ</div>
                </div>
            </div>

            <div className={"mainIndustry"}>
                        <div className={"selectIndustry"}
                            style={{transform: `translateX(${selectPosition}px)`}}>
                            <Select legend="Основная отрасль" 
                                options={industries}
                                onChangeIndustry={changeIndustry}
                                chosen={industry}
                                onChangeModal={onChangeModal}/>
                        </div>
        
                {(opf === 'nothing') ? (
                        <animated.div className="opfRegistration" style={opfAnimation}>
                            <div className="opfRegistrationText">Зарегистрировать</div>
                            <div className="opfCheckerRegister">
                                <div id="iBusinessRegister"
                                    onClick={(e) => {onChoseOpfRegister(e.target);
                                        setOpfAnimated(false);}}
                                    className={(opfRegister === 'iBusinessRegister') ? 'opfActive' : ''}>ИП</div>
                                <div id="juridicalRegister"
                                    onClick={(e) => {onChoseOpfRegister(e.target);
                                        setOpfAnimated(false);}}
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
                            options={patents.map(patent => patent.type)}
                            onChangePatent={changePatent}
                            patent={patent}
                            />
                    </div>

                    <div className="alreadyHave"
                        onClick={() => changePatent('Патент уже приобретен')}>Патент уже приобретен</div>
                </div>
                <div className="price">
                    <div className="priceDescription">Стоимость регистрации патента:</div>
                    <div className="calculatedPrice">{getPrice()} тыс. рублей</div>
                </div>
            </fieldset>
            <div className="arrowWrapper">
                <Arrow
                    text="Далее"
                    rotation={false}
                    availabe={arrowToSecond}
                    onChangeActiveStep={onChangeActiveStep}/>
            </div>

        </animated.div>
    )
}

export default FirstStep;