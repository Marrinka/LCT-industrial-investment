import { useState, useRef, useEffect } from 'react';

import './selectWithoutLegend.css';
import '../select/select.css'

const SelectWithoutLegend = ({legend, options, onChangePatent, patent}) => {

    // const [chosenOption, chooseOption] = useState((legend) ? legend : ' ');
    const [searching, searchingOption] = useState(false);
    const [possibleOptions, filterOptions] = useState(options);
    const [inputValue, changeInputValue] = useState('');


    const onChooseOption = (option) => {
        onChangePatent(option);
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

                <div className={((searching) ? "default" : "chosenWithoutLegend") + ((searching) ? ' hidden' : '')}>{patent}</div>

                <input type="text" 
                    className={'searchOption' + ((!searching) ? ' hidden' : '') + ' withoutLegend'}
                    onChange={(e) => {onFilterOptions(e.target.value);
                    changeInputValue(e.target.value)}}
                    value={inputValue}/>
                
            </fieldset>

            {(searching) ? 
                (
                    <div className="optionsWrapper" ref={myRef}>
                        <div className="devided option"
                             onClick={() => onChooseOption('Патент уже приобретен')}>Патент уже приобретен</div>
                        {possibleOptions.map(item => (
                            <div className={item.value + ' option '}
                                onClick={() => onChooseOption(item.text)}>{item.text}</div>
                        ))}
                    </div>
                ) : <div></div>}
        </div>
    )

}

export default SelectWithoutLegend;
