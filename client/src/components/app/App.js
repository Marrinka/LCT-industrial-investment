import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../home/Home.js';
import Results from '../results/results.js';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                        <Route path="/LCT-industrial-investment/" element = {<Home/>} />
                        <Route path="/LCT-industrial-investment/results" element = {<Results/>} />
                </Routes>
            </Router>
        </div>
    )

}

export default App;
