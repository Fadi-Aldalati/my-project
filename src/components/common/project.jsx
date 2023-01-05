import React, { useEffect } from 'react';
import {useAnimation,motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import "../../cssFiles/main.css";

const projectVariants={
    hover:{
        y:-5,
    },
    hidden:{
        opacity:0,
        x:15,
    },
} 
var t=-10;
const Project = (props) => {
    const {title,body,image,diffSize}=props;
    const width = window.innerWidth;
    
    var imageWidth=width*19/100;
    var imageHeight=width*19/100;
    if(diffSize){
        imageWidth=width*22/100;
        imageHeight=width*14/100;
    }
    var phoneWidth;
    (width < 800)? phoneWidth = (width * 80 )/100: phoneWidth='';

    const controls = useAnimation();
    const [ref, inView] = useInView();
        useEffect(() => {
    if (inView) {
      controls.start(i=>({
        opacity:1,
        y:0,
        x:0,
        transition:{delay:i*0.2,duration:0.4,ease:'easeInOut'},
      }))
    }
     }, [controls, inView]);

    return ( 
        <motion.div className="card box" style={{width:phoneWidth,margin:'5px'}}
        ref={ref}
        custom={t++}
        variants={projectVariants}
        initial="hidden"
        animate={controls}
        whileHover="hover"
        >
            <div className="card-body">
                <h2 className="card-title bolded">{title}</h2>
                <p className="card-text">{body}</p>
                <div className="container">
                        <div className="row">
                            <div className="col">
                                stuff
                            </div>
                            <div className="col align-self-end">
                            <motion.img src={image} className="rounded " style={{width:imageWidth,height:imageHeight}}alt="#" 
                            variants={projectVariants}
                            animate="visible"
                            whileHover="hover"
                            />
                            </div>
                        </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Project;