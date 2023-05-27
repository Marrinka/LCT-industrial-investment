import { animated } from 'react-spring';

import { useRef, useEffect } from 'react';

import './authorization.css';


const Authorization = ({onShow, onChangeModal, onChangeAutherized}) => {
    const modalRef = useRef(null);

    const clickOutsideOfModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onChangeModal();
            onChangeAutherized();
        }
      };
    
    useEffect(() => {
        document.addEventListener('click', clickOutsideOfModal, true);
    });

    const submitAythorization = () => {
        onChangeModal();
        onChangeAutherized();
    }

    return (
        <div className="modalFade">
            <animated.div className="authorizationWrapper" style={onShow} ref={modalRef}>
                <div className="authHeading">Авторизация на сайте</div>
                <form className='personalData' onSubmit={(e) => {
                    e.preventDefault();
                    submitAythorization();
                }}>
                    <div className="dataField">
                        <span>Ваше ФИО:</span>
                        <input className="dataInput" name='name' required></input>
                    </div>
                    <div className="dataField">
                        <span>Адрес электронной почты</span>
                        <input className="dataInput" name='email' required></input>
                    </div>
                    <div className="dataField">
                        <span>ИНН</span>
                        <input className="dataInput" name='inn' required></input>
                    </div>
                    <div className="dataField">
                        <span>Веб-сайт организации</span>
                        <input className="dataInput" name='web' required></input>
                    </div>
                    <div className="dataField">
                        <span>Страна</span>
                        <input className="dataInput" name='country' required></input>
                    </div>
                    <div className="dataField">
                        <span>Город</span>
                        <input className="dataInput" name='city' required></input>
                    </div>
                    <div className="dataField">
                        <span>Должность</span>
                        <input className="dataInput" name='position' required></input>
                    </div>
                    <div className="agreement">
                        <input type="checkbox" name='agreement' className='agreementCheck' required/>
                        <span className='agreementText'>Пользовательское соглашение</span>
                    </div>
                    <div className="finalStage">
                        <button className='Authorize'>Авторизоваться</button>
                        <div className="alreadyAuthorized">У меня уже есть аккаунт</div>
                    </div>
                </form>
                <div className="props">
                    <div className="propsHeading">Вам станут доступны</div>
                    <div className="propsDescr">
                        <ul className='firstList'>
                            <li>Скачивание подробного отчета</li>
                            <li>Отправка подробного отчета</li>
                            <li>Личный кабинет</li>
                        </ul>
                        <ul className='secondList'>
                            <li>История отчетов</li>
                            <li>Просмотр обобщенного отчета</li>
                            <li>Автозаполнение форм</li>
                        </ul>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default Authorization;