import './heading.css';

const Heading = ({headingtext}) => {
    return (
        <div className="headingWrapper">
            <div className="headingText">{headingtext}</div>
        </div>
    )
}

export default Heading;