import { Component } from 'react';

import WelcomeWindow from "../welcomeWindow/WelcomeWindow";
import Calculator from '../calculator/calculator';

class App extends Component{
    scrollToCalc = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
            
        });
    }

    render() {
        return (
            <div className="App">
                <WelcomeWindow 
                onScrollToCalc = {this.scrollToCalc}/>
                <Calculator/>
            </div>
        );
    }

}

export default App;
