import './welcomeWindow.css';

const WelcomeWindow = ({onScrollToCalc}) => {
    return (
        <div className="main_page">
            <div className="main_page__head">
                Рассчитайте бюджет своего производства в Москве за минуту!
            </div>
            <div className="main_page__devider"></div>
            <div className="main_page__text">
                Наш онлайн-калькулятор поможет вам рассчитать стоимость инвестиций, 
                необходимых для запуска или улучшения производства в Москве.
            </div>
            <div className="main_page__button" 
                onClick={onScrollToCalc}>
                <div className="button__descr">
                    РАССЧИТАТЬ СТОИМОСТЬ
                </div>
                <div className="button__arrow">
                    <img src={require('../../img/arrow.png')} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default WelcomeWindow;