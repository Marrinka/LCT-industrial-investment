import './welcomeWindow.css';

import arrowPhoto from '../../img/arrow.png';

const WelcomeWindow = ({onScrollToCalc}) => {
    return (
        <div className="mainPage">
            <div className="mainPageHead">
                Рассчитайте бюджет своего производства в Москве за минуту!
            </div>
            <div className="mainPageDevider"></div>
            <div className="mainPageText">
                Наш онлайн-калькулятор поможет вам рассчитать стоимость инвестиций, 
                необходимых для запуска или улучшения производства в Москве.
            </div>
            <div className="mainPageButton" 
                onClick={onScrollToCalc}>
                <div className="buttonDescr">
                    РАССЧИТАТЬ СТОИМОСТЬ
                </div>
                <div className="buttonArrow">
                    <img src={arrowPhoto} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default WelcomeWindow;