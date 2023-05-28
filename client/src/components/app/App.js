import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../home/Home.js';
import Results from '../results/results.js';
import { useState } from 'react';

const App = () => {
    const [data, setData] = useState({});

    return (
        <div className="App">
            <Router>
                <Routes>
                        <Route path="/LCT-industrial-investment/" element = {<Home setData={() => [data, setData]} />} />
                        <Route path="/LCT-industrial-investment/results" element = {<Results data={data}/>} />
                </Routes>
            </Router>
        </div>
    )

}

export default App;
