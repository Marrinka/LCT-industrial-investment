import './arrow.css';
import arrow from  '../../img/blackArrow.png';
import unarrow from '../../img/unavailableArrow.png';

const Arrow = ({text, rotation, availabe, onChangeActiveStep}) => {
    return (
        <div className="navigationButton "
            onClick={() => onChangeActiveStep(availabe, rotation)}>
            <div className={"text"  + ((availabe === 'true') ? " available" : " unavailable")}>{text}</div>
            <div className={"arrow" + ((rotation) ? " rotation" : "")}>
                <img src={(availabe === 'true') ? arrow : unarrow} alt="arrow" />
            </div>
        </div>
    )
}

export default Arrow;