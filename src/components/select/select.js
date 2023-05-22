import { useState } from 'react'

import './select.css'

const Select = ({legend, options, name}) => {

    const [selectState, setSelectState] = useState(false);
    
    const seletOption = () => {
        setSelectState((!selectState) ? !selectState : selectState);
    }

    return (
        <fieldset className={(!selectState) ? "offLegend" : ""}>
            <legend>{(selectState) ? legend : ''}</legend>
            <select required
                name={name} 
                onChange={seletOption}
                className={(!selectState) ? "nonSelected" : ""}
                id={name}>
                <option selected disabled hidden>{legend}</option>
                {options.map(item => (
                    <option value={item.value}>{item.text}</option>
                ))}
            </select>
        </fieldset>
    )

}

export default Select;