import React from "react";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

function Blank(){
    return (
     <>
        <div id="wrapper">
        <Sidebar/>  
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
           <Topbar/>
           <div className="container-fluid">
           <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                </div>
        </div>
           <Footer/>
        </div> 
        </div>   
            </>
    );
}

export default Blank;