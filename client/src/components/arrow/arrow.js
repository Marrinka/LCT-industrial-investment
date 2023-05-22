import './arrow.css';
import arrow from  '../../img/blackArrow.png';
import unarrow from '../../img/unavailableArrow.png';

const Arrow = ({text, rotation, availabe}) => {
    return (
        <div className="navigationButton ">
            <div className={"text"  + ((availabe) ? " available" : " unavailable")}>{text}</div>
            <div className={"arrow" + ((rotation) ? " rotation" : "")}>
                <img src={(availabe) ? arrow : unarrow} alt="arrow" />
            </div>
        </div>
    )
}

export default Arrow;