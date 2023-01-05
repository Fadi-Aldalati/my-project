import React, { Component } from 'react';
import { Route ,Navigate, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Main from './components/main';
import "./App.css";

class App extends Component {
  state = { } 
  render() { 
    return (
      <React.Fragment>
      <NavBar />
      
              <Routes>
              <Route path="/main" element={<Main customProp={'Home'}/>} />
              <Route path="/main/OurProjects" element={<Main customProp={'OurProjects'} />} />
              <Route path="/" element={<Navigate replace to="/main" />} />
              </Routes>
              
          
            </React.Fragment>
    );
  }
}
 
export default App;