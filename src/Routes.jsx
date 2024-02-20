import React from "react";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Resume from "./components/Resume";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const AppRoutes = () => {
    return(

        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/about-me" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/work" element={<Work />}></Route>
             
            </Routes>
        </Router>
    )
}

export default AppRoutes;