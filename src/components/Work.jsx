import React from "react";
import '../style.css'
import PageNotFound from '../assets/images/notfound.png'
import Todo from '../assets/images/TODO.png'
import pokememory from '../assets/images/pokememory.png'
import darkmode from '../assets/images/Dark mode.png'
import habit from '../assets/images/Habit.png'
import WorkData from "../components/work.json"

const Work = () => {
    return (
<div>
             
    <h1 className="titles text-center" id="work">Work</h1>
    <section className="container-fluid" id="work">
            <div className="container-fluid text-center">
                <div className="row gy-3">
                    <div className="col-md-6">
                        <div className="p-3 customDiv">
                            <div className="card " style={{width: '25rem'}}>
                                <img src={PageNotFound} className="card-img-top rounded-3 customImg "
                                    alt="page not found screenshot" />
                                <div className="card-body">
                                    <h4 className="card-title titles"></h4>
                                    <p className="card-text CustomText">A simple Page not found that indicates the user reached the domain they requested, but the URL path provided no information.</p>
                                    <h5>HTML, CSS and JavaScript</h5>
                                    <a href="https://github.com/DaniloRua/Page-not-found" target="_blank"
                                        className="btn btn-primary titles"> Github Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 customDiv">
                            <div className="card" style={{width: '25rem'}}>
                                <img src={Todo} className="card-img-top rounded-3 customImg"
                                    alt="page not found screenshot" />
                                <div className="card-body">
                                    <h4 className="card-title titles">To Do List</h4>
                                    <p className="card-text"> A to do list app helps you organize tasks and stay on top of your deadlines. You can use it to manage everything from grocery lists to work-related tasks and more.</p>
                                    <h5>HTML, CSS and JavaScript</h5>
                                    <a href="https://github.com/DaniloRua/TODO-list-CRUD" target="_blank"
                                        className="btn btn-primary titles"> Github Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 customDiv">
                            <div className="card" style={{width: '25rem'}}>
                                <img src={darkmode} className="card-img-top rounded-3 customImg"alt="page not found screenshot"/>
                                <div className="card-body">
                                    <h4 className="card-title titles">Dark Mode Login Page</h4>
                                    <p className="card-text"> A login page specifies the login URL in a web application that users must pass through to get to the authenticated URLs. Dark mode displays gray-ish or light text on a dark background instead of dark text and graphics against a white background.</p>
                                    <a href="https://github.com/DaniloRua/Login-Dark-Mode" target="_blank"
                                        className="btn btn-primary titles"> Github Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 customDiv">
                            <div className="card"  style={{width: '25rem'}}>
                                <img src={habit} className="card-img-top rounded-3 customImg" alt="page not found screenshot" />
                                <div className="card-body">
                                    <h4 className="card-title titles">Habit Tracker</h4>
                                    <p className="card-text">Habit Tracker is a web application crafted to assist you in building habits and achieving goals by meticulously recording your daily routines and customary habits.</p>
                                    <a href="https://github.com/DaniloRua/nlw-setup" target="_blank"
                                        className="btn btn-primary titles"> Github Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        </div>
    )
}

export default Work;