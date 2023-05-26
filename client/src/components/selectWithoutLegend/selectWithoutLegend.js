import { useState, useRef, useEffect } from 'react';

import './selectWithoutLegend.css';
import '../select/select.css'

const SelectWithoutLegend = ({legend, options, name}) => {

    const [chosenOption, chooseOption] = useState((legend) ? legend : ' ');
    const [searching, searchingOption] = useState(false);
    const [possibleOptions, filterOptions] = useState(options);
    const [inputValue, changeInputValue] = useState('');


    const onChooseOption = (option) => {
        chooseOption(option);
        changeInputValue(option);
    }

    const onFilterOptions = (term) => {
        let items = [...options];
        if (term.length === 0) {
            filterOptions(items);
        }
        else {
            filterOptions(items.filter(item => item.text.toLowerCase().indexOf(term.toLowerCase()) > -1));
        }
    }
    
    const onSearchingOption = () => {
        searchingOption(!searching);
    }

    
    const myRef = useRef(null);

    const clickOutside = (e) => {
        if (myRef.current && !myRef.current.contains(e.target)) {
          searchingOption(false);
        }
      };
    
    useEffect(() => {
        document.addEventListener('click', clickOutside, true);
    });
    

    return (
        <div className="selectorWrapper">
            <fieldset className={"selectFieldset offLegend"}
            onClick={onSearchingOption}>

                <div className={((chosenOption === legend || searching) ? "default" : "chosenWithoutLegend") + ((searching) ? ' hidden' : '')}>{chosenOption}</div>

                <input type="text" 
                    className={'searchOption' + ((!searching) ? ' hidden' : '') + ' withoutLegend'}
                    onChange={(e) => {onFilterOptions(e.target.value);
                    changeInputValue(e.target.value)}}
                    value={inputValue}/>
                
            </fieldset>

            {(searching) ? 
                (
                    <div className="optionsWrapper" ref={myRef}>
                        {possibleOptions.map(item => (
                            <div className={item.value + ' option '}
                                onClick={() => onChooseOption(item.text)}>{item.text}</div>
                        ))}
                    </div>
                ) : <div className="devider"></div>}
        </div>
    )

}

export default SelectWithoutLegend;
