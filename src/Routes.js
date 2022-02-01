import React from 'react'
import MainAppBar from './shared/appbar';
import { Home, About, Blog } from './App';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const RouteList = () => {
    return (
        <Router>
            <div>
                <MainAppBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
};

export default RouteList;