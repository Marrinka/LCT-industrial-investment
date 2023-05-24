import './firstStep.css';

import Arrow from "../arrow/arrow.js";
import Select from '../select/select.js';

const FirstStep = () => {
    return (
        <div className="container">
            <div className="head">
                <div className="description">
                    <div className="boldText">
                    Шаг 1. Выбор отрасли ведения хозяйственной деятельности
                    </div>
                    Пожалуйста, выберите отрасль ведения хозяйственной деятельности.
                </div>
                <div className="opf">
                    <div className="opfChecker">
                        <div className="iBusiness">ИП</div>
                        <div className="juridical">Юридическое лицо</div>
                        <div className="nothing">Не оформлена</div>
                    </div>
                    <div className="opfSubtitile">Текущая ОПФ</div>
                </div>
            </div>

            <div className="mainIndustry">
                <Select legend="Основная отрасль" 
                    options={[{value: 'foodIndustry', text:'Пищевая промышленность'},
                    {value: 'lightIndustry', text:'Легкая промышленность'},
                    {value: 'machineBuilding', text:'Машиностроение'},
                    {value: 'buildingIndustry', text:'Строительная промышленность'},
                    {value: 'heavyIndustry', text:'Тяжелая промышленность'}]}/>
            </div>

            <fieldset className="forIBusiness">
                <legend className='sectionLegend'>Только для ИП</legend>
                <div className="patent">
                    <div className="selectHeading">Выберите вид предпринимательской деятельности</div>
                    <Select legend="Вид деятельности"
                        options={[{value: "first", text: "Первый вид"}, 
                        {value: "second", text: "Второй вид"},
                        {value: "third", text: "Третий вид"},
                        {value: "fourth", text: "Четвертый вид"}]}/>
                    <div className="alreadyHave">Патент уже приобретен</div>
                </div>
                <div className="price">
                    <div className="priceDescription">Стоимость регистрации патента:</div>
                    <div className="calculatedPrice">0 тыс. рублей</div>
                </div>
            </fieldset>
            <div className="arrowNextWrapper">
                <Arrow
                    text="Далее"
                    rotation={false}
                    availabe={false}/>
            </div>

        </div>
    )
}

export default FirstStep;