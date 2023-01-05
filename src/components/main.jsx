import React from 'react';
import Cards from './cards';
import Gap from './common/gap';
import Projects from './projects';
import Portfolio from './portfolio';
import About from './about';
import Home from './home';

const Main = () => {
    return ( 
        <>
        <Home />
        <Gap />
       <Cards />
       <Gap />
       <Projects />
        <Gap />
        <Portfolio />
        <Gap />
        <About />
        </>
     );
}
 
export default Main;