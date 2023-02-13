import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Plates from './Pages/Plates/Plates';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Plates' element={<Plates/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
