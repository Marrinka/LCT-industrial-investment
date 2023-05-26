import WelcomeWindow from "../welcomeWindow/WelcomeWindow.js";
import Calculator from '../calculator/calculator.js';


const App = () => {
    const scrollToCalc = () => {
        window.scrollTo({
            top: window.innerHeight + 52,
            left: 0,
            behavior: 'smooth'
            
        });
    }

    return (
        <div className="App">
            <WelcomeWindow 
            onScrollToCalc = {scrollToCalc}/>
            <Calculator/>
        </div>
    );

}

export default App;
