import React, { useEffect }  from 'react';
import {useAnimation,motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import image from '../img/tradinos-portfolio1.jpg'

const portfolioVariants={
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

const Portfolio = () => {
    const width = window.innerWidth;
    var imageWidth=width*40/100;
    var imageHeight=width*35/100;
    var colPadding=width/19;
    var col1='col';var col2='col';
    if(width<800) {
        col1='row';col2='row';
        imageWidth=width*80/100;
         imageHeight=width*75/100;
    }

    const controls = useAnimation();
    const [ref, inView] = useInView();
     useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    }, [controls, inView]);

    return ( 
        <>
        <div className="container">
            <h1 className="bolded">Our Portfolio</h1>
          
            <div className="row">
                <motion.div  className={col1} style={{paddingTop:colPadding,width:'100%'}}
                ref={ref}
                variants={portfolioVariants}
                initial="hidden"
                animate={controls}
                >
                <h4 >
                    A closer look at Tradinos and the projects we've already launched into the world.
                    <p></p>
                    Please enjoy this selected array of websites, mobile applications for both Android and iOS, and software solutions for local machines and cloud systems.
                    </h4>
                    <br/>
                    <button type="button" className="btn btn-outline-primary rounded-pill btn-lg">View our Portfolio</button>
                </motion.div>
                <div className={col2}>
                <img src={image} className="" style={{width:imageWidth,height:imageHeight}} alt="#" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Portfolio;