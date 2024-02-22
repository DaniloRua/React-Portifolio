import React from "react";
import picture from '../assets/images/20211206_140005.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (

        <div className="customDiv">
    
        <div className="container col-xxl-8 px-4 py-5 align-item-center">
            <div className="row flex-lg-row g-5 py-5">
                <div className="col-12 col-sm-10 col-lg-6 bg-image">
                    <img src={picture} className="d-block mx-lg-auto img-fluid rounded-5 custom-card" alt="Danilo-Rua-picture"loading="lazy"></img>
                </div>
                <div class="col-lg-6 border-1-re" id="about-me">
                    <h1 className="display-4 fw-bold lh-1 mb-3 titles">About me</h1>
                    <p className="lead">Hello! My name is <span className="titles">Danilo Rua</span> from Brazil, currently
                        living in England. I'm a front-end developer who is passionate about creating solutions for web
                        development. I'm always seeking new challenges and opportunities to learn and evolve in my
                        field.</p>

                    <h2 className="titles">Skills</h2>
                    <h5>HTML, CSS, JavaScript, React and Tailwind CSS</h5>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default About;