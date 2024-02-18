import React from "react";
import '../style.css'

const Work = () => {
    return (

        <main className="container-fluid">
    <h1 className="titles text-center" id="work">Work</h1>
        <section className="container-fluid" id="work">
            <div className="container overflow-hidden text-center">
                <div className="row gy-3">
                    <div class="col-md-6">
                        <div className="p-3 customDiv">
                            <div className="card" style="width: 30rem;">
                                <img src="css/images/notfound.png" className="card-img-top rounded-3 customImg"
                                    alt="page not found screenshot" />
                                <div className="card-body">
                                    <h5 className="card-title titles">Page not found</h5>
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
                            <div className="card" style="width: 30rem;">
                                <img src="css/images/TODO.png" className="card-img-top rounded-3 customImg"
                                    alt="page not found screenshot" />
                                <div className="card-body">
                                    <h5 className="card-title titles">To Do List</h5>
                                    <p className="card-text"> A to do list app helps you organize tasks and stay on top of your deadlines. You can use it to manage everything from grocery lists to work-related tasks and more.</p>
                                    <h5>HTML, CSS and JavaScript</h5>
                                    <a href="https://github.com/DaniloRua/TODO-list-CRUD" target="_blank"
                                        className="btn btn-primary titles"> Github Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 customDiv">
                            <div class="card" style="width: 30rem;">
                                <img src="" class="card-img-top rounded-3 customImg"alt="page not found screenshot"/>
                                <div class="card-body">
                                    <h5 class="card-title titles">Dark Mode Login Page</h5>
                                    <p class="card-text"> A login page specifies the login URL in a web application that users must pass through to get to the authenticated URLs. Dark mode displays gray-ish or light text on a dark background instead of dark text and graphics against a white background.</p>
                                    <a href="https://github.com/DaniloRua/Login-Dark-Mode" target="_blank"
                                        class="btn btn-primary titles"> Github Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 customDiv">
                            <div class="card" style="width: 30rem;">
                                <img src="" class="card-img-top rounded-3 customImg" alt="page not found screenshot" />
                                <div class="card-body">
                                    <h5 class="card-title titles">Habit Tracker</h5>
                                    <p class="card-text">Habit Tracker is a web application crafted to assist you in building habits and achieving goals by meticulously recording your daily routines and customary habits.</p>
                                    <a href="https://github.com/DaniloRua/nlw-setup" target="_blank"
                                        class="btn btn-primary titles"> Github Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}

export default Work;