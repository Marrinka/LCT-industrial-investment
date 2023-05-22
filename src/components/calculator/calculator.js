import './calculator.css';

import Arrow from "../arrow/arrow.js";
import Select from '../select/select.js';

const Calculator = () => {
    return (
        <div className="calculatorContainer">
            <Arrow text="Вперед" rotation={false} availabe={false}/>
            <Arrow text="Назад" rotation={true} availabe={true}/>
            <Select legend="Основная отрасль" 
                name="industry"
                options={[{value: 'foodIndustry', text:'Пищевая промышленность'},
                {value: 'lightIndustry', text:'Легкая промышленность'},
                {value: 'machineBuilding', text:'Машиностроение'}]}/>
        </div>
    )
}

export default Calculator;