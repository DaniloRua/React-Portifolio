import React from "react";
import "../style.css"

const Header = ()=> {
    return(


<header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary customHeader">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Danilo Rua</a>
        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-3">
                <a className="nav-link active" aria-current="page" href="/about-me" id="about-me">About me</a>
                <a className="nav-link" href="work">Work</a>
                <a className="nav-link" href="contact">Contact</a>
                <a className="nav-link disabled resume" aria-disabled="true">Resume</a>
            </div>
        </div>
    </div>
    </nav>
</header>



    )
}

export default Header;