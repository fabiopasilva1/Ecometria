import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavTop from './components/navigation/NavTop';
//import components Globais
import Pages from './pages';
import Page404 from './pages/Page404';


import './style.css'
function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Page404 />} />
                    <Route path="/" element={<Pages />} />
                    <Route path=":slug" element={<Pages />} />
                </Routes>
            </BrowserRouter>
        </div>


    );
}

export default App;
