import './mainHeading.css';

const MainHeading = ({headingtext}) => {
    return (
        <div className="mainHeadingWrapper">
            <div className="mainHeadingText">{headingtext}</div>
        </div>
    )
}

export default MainHeading;