import Heading from "../heading/heading.js";
import MainHeading from "../mainHeading/mainHeading.js";
import ResultDescription from "../resultDescription/resultDescription.js";
import Footer from "../footer/footer.js";

const Results = () => {
    return (
        <div className="results">
            <MainHeading headingtext='Спасибо, что воспользовались инвестиционным калькулятором города Москвы'/>
            <ResultDescription/>
            <Heading headingtext='Вы также можете получить детализированный отчет в удобном формате'/>
            <Footer/>
        </div>
        
    )
}

export default Results;