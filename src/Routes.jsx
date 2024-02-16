import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const AppRoutes = () => {
    return(

        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                
            </Routes>
        </Router>
    )
}

export default AppRoutes;