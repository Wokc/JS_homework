import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HelloComponent from './Components/HelloComponent/HelloComponent';
import AboutUs from './Components/AboutUs/AboutUs';
import Nav from './Components/Nav/Nav';

function App () {
    return (
    <div>
            <Nav/>
            <Routes>
                <Route path="/hello" element={<HelloComponent/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
            </Routes>
    </div>
    )
}

export default App