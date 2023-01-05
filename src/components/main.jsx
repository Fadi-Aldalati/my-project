import React from 'react';
import Cards from './cards';
import Gap from './common/gap';
import Projects from './projects';
import Portfolio from './portfolio';
import About from './about';
import Home from './home';

const Main = ({customProp}) => {

    const element = document.getElementById(customProp);
    if(element){
        element.scrollIntoView({ behavior: 'smooth' });
    }
    ;

    return ( 
        
        <>
        <div id="Home">
        <Home />
        </div>
        <Gap />
       <Cards />
       <div id="OurProjects">
       <Gap />
       <Projects />
       </div>
        <Gap />
        <Portfolio />
        <Gap />
        <About />
        </>
     );
}
 
export default Main;