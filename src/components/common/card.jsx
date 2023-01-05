import React, { useEffect }  from 'react';
import {useAnimation,motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import "../../cssFiles/main.css";
var t=-8;


const cardVariants={
    hover:{
        y:-7,
    },
    hidden:{
        opacity:0,
        x:15,
    },
    
    
}

const Card = (props) => {

    const {Icon,title,text,footerIcons,footer} = props;
    const width = window.innerWidth;
    var wi;
    (width < 800)? wi = (width * 80 )/100:wi='100%';
   

    const controls = useAnimation();
    const [ref, inView] = useInView();
        useEffect(() => {
            
    if (inView) {
        
      controls.start(i=>({
        opacity:1,
        y:0,
        x:0,
        transition:{delay:i*0.2,duration:0.4,ease:'easeInOut'},
      }
      ))
     
    }
     }, [controls, inView]);
     
     
    return ( 
        <React.Fragment>
            <motion.div className="card round shadow-ls" style={{width:wi,margin:'5px'}}
            ref={ref}
            custom={t++}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            >
                <div className="card-body">
                    <Icon color='#1E90FF' size="33px" style={{'margin':'5px'}}/>
                    <h5 className="card-title bolded">{title}</h5>
                    <br/>
                    <p className="card-text">{text}</p>
                    <p >{footer}</p>
                   <br/>
                    {footerIcons.map(Icon =>
                    <Icon key={Icon}className="footericon" color='#1E90FF'/>
                    )

                    }
                                        
                </div>
            </motion.div>
        </React.Fragment>
     );
}
 
export default Card;
/*
    <FooterIcon className='footericon'size="30px" color='#1E90FF'/>
*/