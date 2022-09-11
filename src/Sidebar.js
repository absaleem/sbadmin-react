import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate, Outlet, } from 'react-router-dom';
function Sidebar() {
  return (
    <>
     
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <Link to="/">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
      </Link>  

        <hr className="sidebar-divider my-0"/>
      
        <li className="nav-item active">
        <Link to="/">
            <a className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
                </Link>        
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">
            Interface
        </div>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <Link to="/Buttons">
                     <a class="collapse-item">Buttons</a>
                     </Link>
                     <Link to="/Cards">
                     <a class="collapse-item">Cards</a>
                     </Link>
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <Link to="/Colors"><a class="collapse-item">Colors</a></Link>
                    <Link to="/Borders"><a class="collapse-item">Borders</a></Link>
                    <Link to="/Animations"><a class="collapse-item">Animations</a></Link>
                    <Link to="/Otherutilities"><a class="collapse-item">Other</a></Link>
                </div>
            </div>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">
            Addons
        </div>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <Link to="/Login">
                     <a  class="collapse-item">Login</a>
                     </Link>
                     <Link to="/Register">
                     <a class="collapse-item">Register</a>
                     </Link>
                     <Link to="/Forgotpassword">
                     <a class="collapse-item">Forgot Password</a>
                     </Link>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <Link to="/F404">
                     <a class="collapse-item">404 Page</a>
                     </Link>
                     <Link to="/Blank">
                     <a class="collapse-item">Blank Page</a>
                     </Link>
                </div>
            </div>
        </li>

        <li className="nav-item">
                
                <Link to="/Charts" className="nav-link" ><i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></Link>
                
        </li>

        <li className="nav-item">
                <Link to="/Tables" className="nav-link" ><i className="fas fa-fw fa-table"></i>
                <span>Tables</span></Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>

        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="#!">Upgrade to Pro!</a>
        </div>
    </ul>
 
    </>
  );
}

export default Sidebar;
