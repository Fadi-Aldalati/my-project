import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import "../cssFiles/main.css";
import logo from "../img/logo.png";



class NavBar extends Component {
   
    render() { 
        const width = window.innerWidth;
        const padding=width*10/100;


        return (
            <>
            
               <nav className="navbar style navbar-expand-sm navbar-light fixed-top">
                    <div className="container-fluid" style={{paddingLeft:padding,paddingRight:'100px'}}>
                    <img src={logo}  alt="Logo" height="21px" width="145px"/>
                        <div className="collapse navbar-collapse">
                    <div className="navbar-nav mx-auto divNav">
                        <NavLink  to="/main" style={({ isActive }) => ({
                                color: isActive ? '#1E90FF' : 'black',
                                background: isActive ? 'white' : 'white',
                        })} >Home</NavLink>
                        <NavLink activeclassname="active"  to="/login">Login</NavLink>
                        <NavLink activeclassname="active"  to="/register" >Register</NavLink>
                       
                </div>
                </div>
                    </div>
                    </nav>
                    
            </>
            
        );
    };
};

 
export default NavBar;
/* 
 <div className="" >
            <nav className="navbar fixing navbar-expand-lg"style={{height:'70px'}}>
                <img src={logo}  alt="Logo" height="21px" width="145px"/>
                
                 <div className="collapse navbar-collapse">
                    <div className="navbar-nav mx-auto">
                        <NavLink className="nav-item nav-link" to="/main">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
                </div>
                </div>
                <NavLink className="nav-item nav-link" to="/register">Something</NavLink>
            </nav>
            </div>

*/