import React,{useEffect,useState} from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate, Outlet, } from 'react-router-dom';
import Dashboard from './Dashboard';
import Buttons from './Buttons';
import Cards from './Cards';
import Colors from './Colors';
import Borders from './Borders';
import Animations from './Animations';
import Otherutilities from './Otherutilities';
import Charts from './Charts';
import Tables from './Tables';
import Login from './Login';
import Register from './Register';
import Forgotpassword from './Forgotpassword';
import F404 from './404';
import Blank from './Blank';

function App() {
  
  return (
    <>
    <BrowserRouter> 
          <Routes>
              <Route path="/" element={<Dashboard/>} />         
              <Route path="/Buttons" element={<Buttons />} />
              <Route path="/Cards" element={<Cards />} />
              <Route path="/Colors" element={<Colors />} />
              <Route path="/Borders" element={<Borders />} />
              <Route path="/Animations" element={<Animations />} />
              <Route path="/Otherutilities" element={<Otherutilities />} />
              <Route path="/Charts" element={<Charts />} />
              <Route path="/Tables" element={<Tables/>} />
              <Route path="/Login" element={<Login />} />        
              <Route path="/Register" element={<Register />} />   
              <Route path="/Forgotpassword" element={<Forgotpassword />} />    
              <Route path='/F404' element={<F404/>} />     
              <Route path='/Blank' element={<Blank/>} />   
          </Routes>
    </BrowserRouter>   
    </>
  );
}

export default App;