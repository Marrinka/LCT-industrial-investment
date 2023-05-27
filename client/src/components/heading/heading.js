import './heading.css';

const Heading = ({onChangeModal}) => {
    return (
        <div className="headingWrapper" onMouseEnter={onChangeModal}>
            <div className="headingText">Инвеститиционный калькулятор города Москвы</div>
        </div>
    )
}

export default Heading;