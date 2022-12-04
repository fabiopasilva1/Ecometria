import * as React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pages from './pages';


import './style.css'
function App() {



    return (
        <BrowserRouter>
            <div className="App">


                <Routes>

                    <Route path='*' element={<Pages />} />
                    <Route path='/' element={<Pages />} />

                    <Route path=':pageName' element={<Pages />} />
                    <Route path=':pageName/:params' element={<Pages />} />




                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
