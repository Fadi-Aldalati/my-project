import React, { useEffect }  from 'react';
import {useAnimation,motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";

const aboutVariants={
    hidden:{
        opacity:0,
        y:0,
    },
    visible:{
        opacity:1,
        y:-15,
        transition:{delay:0.3,duration:0.5}
    }
}

const About = () => {

    const width = window.innerWidth;
    
    const height = window.innerHeight;
    var imageHeight=height/(1.4);
    var gapHeight=width*4/100;

    const controls = useAnimation();
    const [ref, inView] = useInView();
     useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    }, [controls, inView]);

    return ( 
        <>
        
        <div className="about-image" style={{width:'100%',height:imageHeight}}>
        <p style={{height:gapHeight}}></p>
        
        <div className="container about-t">
        <h1 className="bolded">Our how-to !</h1>
          <motion.div
          ref={ref}
          variants={aboutVariants}
          initial="hidden"
          animate={controls}>
              <p style={{height:gapHeight}}></p>
            <div className="col">
            <h3>Our process utilizes an Agile-Scrum dynamic methodology.</h3>
        <br/>
               <h3> It helps us create functioning applications and working websites using an MVP (minimum viable product) approach.</h3>
        </div>
        <p style={{height:gapHeight}}></p>
        <button type="button" className="btn btn-outline-light rounded-pill btn-lg">Explore our process</button>
        </motion.div>
        </div>
        </div>
        </>
     );
}
 
export default About;