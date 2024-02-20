import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 

const Contact = () => {
    return (
       
<div className='container-fluid row customDiv '>
 
        <div className='col-md-6 mt-5 d-flex gap-5'>
            <div className='text-center '>
                <p className='fs-4'>Thank you for visiting my portfolio!</p>
                <p className='fs-4'>Please feel free to get in touch, and I will get back to you as soon as possible.</p>
                <div className='mx-auto'>
                    <h5 className='m-4 titles'>Quick Contact</h5>
                    <ul className="nav justify-content-center gap-3 customUl gap-5">
                        <li className="nav-item">
                            <a href="https://github.com/DaniloRua" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} style={{ height: '30px' }} />
                            </a>
                        </li>
                        <li className="nav-item titles">
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} style={{ height: '30px' }} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#">
                                <FontAwesomeIcon icon={faPhone} style={{ height: '30px' }} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/danilo-rua-28599b28" target="_blank" >
                                <FontAwesomeIcon icon={faLinkedin} style={{ height: '30px' }} />
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
        <div className='col-md-6 d-flex align-items-center'>
            <div className='centerIt text-center'>
                <form className='fs-4'>
                    <label className="titles">Name:</label>
                    <input type="text" name="user_name" className='spacing' /><br></br>
                    <label className="titles">Email:</label>
                    <input type="email" name="user_email" className='spacing' /><br></br>
                    <label className='pb-1 titles'>Message:</label>
                    <textarea name="message" className='in' /><br></br>
                    <input type="submit" value="Send" className='spacing2 titles' />
                </form>
            </div>
        </div>
    </div>
</div>

      
       
    );
}

export default Contact;
