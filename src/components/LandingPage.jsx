import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../assets/images/codes.jpg'; 

function LandingPage() {

    const sign = "<Danilo Rua />";

 return (
 
 <div
      className="d-flex justify-content-center align-items-center "
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center ">
        <h1 className="display-3 intro">
          Hi, my name is <strong className='titles intro'>{sign}</strong>
        </h1>
        <p className="lead intro"> I am a front end developer</p>
      </div>
    </div>
  );
}

export default LandingPage;
