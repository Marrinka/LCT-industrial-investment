import WelcomeWindow from "../welcomeWindow/WelcomeWindow.js";
import Calculator from '../calculator/calculator.js';
import Footer from "../footer/footer.js";

const Home = () => {
    const scrollToCalc = () => {
        window.scrollTo({
            top: window.innerHeight + 52,
            left: 0,
            behavior: 'smooth'
            
        });
    }

    return (
        <div className="home">
            <WelcomeWindow 
            onScrollToCalc = {scrollToCalc}/>
            <Calculator/>
            <Footer/>
        </div>
    );
}

export default Home;