import './hiddenStep.css';

const HiddenStep = ({step}) => {
    return (
        <div className="hiddenStep">
            <div className="hiddenStepText">{step}</div>
        </div>
    )
}

export default HiddenStep;