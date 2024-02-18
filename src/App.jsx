import React from 'react'
import './App.css'
import AppRoutes from './Routes'
import Header from './components/Header'


function App() {
  

  return (
   <div className="vh-100 vw-100">
    <Header />
    <AppRoutes />

   </div>
  )
}


export default App;
