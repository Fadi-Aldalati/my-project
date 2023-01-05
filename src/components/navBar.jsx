import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import "../cssFiles/main.css";
import logo from "../img/logo.png";

const Items = [{title:'Home',link:'/Main'},{title:'Our Projects',link:'/main/OurProjects',nonActive:true},{title:'Our Process',link:''},{title:'Careers',link:''},{title:'Blog',link:''},{title:'Contact Us',link:''}];

class NavBar extends Component {
   
    render() { 
        const width = window.innerWidth;
        const padding=width*10/100;
        console.log(Items);

        return (
            <>
            
               <nav className="navbar style navbar-expand-sm navbar-light fixed-top">
                    <div className="container-fluid" style={{paddingLeft:padding,paddingRight:'100px'}}>
                    <img src={logo}  alt="Logo" height="21px" width="145px"/>
                        <div className="collapse navbar-collapse">
                    <div className="navbar-nav mx-auto divNav">
                        
                       {Items.map(item=>{
                        return (<NavLink key={item.link} to={item.link} style={({ isActive   }) => ({
                            color: isActive && !item.nonActive ? '#1E90FF' : 'black',
                            background: isActive ? 'white' : 'white',
                       })} >{item.title}</NavLink>
                       )})

                       } 
                        
                       
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
 <NavLink  to="/main" style={({ isActive }) => ({
                                color: isActive ? '#1E90FF' : 'black',
                                background: isActive ? 'white' : 'white',
                        })} >Home</NavLink>

*/