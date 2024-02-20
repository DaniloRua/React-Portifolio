import React from 'react'
import './App.css'
import AppRoutes from './Routes'
import Header from './components/Header'
import './style.css'


function App() {
  

  return (
   <div className="vh-100 vw-100">
    <Header />
    <AppRoutes />

   </div>
  )
}


// todo list 



// Be sure to store your project details data in a JSON file and import it into your project

//Must be a reusable component that ingests JSON data as props and renders a single instance for each project


export default App;
