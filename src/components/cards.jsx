import React from 'react';
import {useEffect, useState} from 'react';
import "../cssFiles/main.css";
import { BsGear} from "react-icons/bs";
import {FcAndroidOs} from "react-icons/fc";
import {SiAdobexd,SiAdobecreativecloud,SiFigma,SiSwift,SiFlutter,SiHandshakeProtocol} from "react-icons/si";
import {MdOutlineDesignServices,MdOutlineAnalytics,MdDeveloperMode} from "react-icons/md";
import {GiDominoTiles} from "react-icons/gi";
import {HiOutlineServerStack} from "react-icons/hi2";
import {HiOutlineSupport} from "react-icons/hi";
import {AiOutlineMonitor} from "react-icons/ai";
import Card from './common/card';

const Cards = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
    const footerIcons1   = [SiAdobexd,SiAdobecreativecloud,SiFigma];
    const footerIcons2 =[FcAndroidOs,SiSwift,SiFlutter];
    const footerIcons3=[MdOutlineAnalytics,SiHandshakeProtocol,MdDeveloperMode];
    const footerIcons4=[HiOutlineServerStack,AiOutlineMonitor];
    const wi = (windowSize.innerWidth * 80 )/100;
    return ( 
        <>
        <h2 style={{textAlign:'center'}} className="bolded">Our Services</h2>
        <div className='container-fluid cards-b' >
            
    <div className='container' style={{width:wi}}>
    
       <div className='row'>
                        <div className='col d-flex'>
                                <Card 
                                    title="UI/UX Design"
                                    Icon={MdOutlineDesignServices}
                                    text="A complete package that covers UI/UX solution, persona study, competitor analysis, Autopsy, visual identity and more!"
                                    footerIcons={footerIcons1}
                                    footer="Ask us for a quote!"
                                />
                        </div>
                        <div className='col d-flex'>
                                <Card 
                                    title="Mobile apps &web solution development"
                                    Icon={BsGear}
                                    text="Android and iOS mobile applications, business and service website, and software solutions. Agile development process."
                                    footer="Get in touch today!"
                                    footerIcons={footerIcons2}
                                />
                        </div>
                        <div className='col d-flex'>
                                <Card 
                                    title="MVP Design and Development"
                                    Icon={GiDominoTiles}
                                    text="Minimum Viable Product agile development. Large projects launched in functional phases that meet the market requirements."
                                    footerIcons={footerIcons3}
                                    footer="Get a quote for your project!"    
                                />
                        </div>
                        <div className='col d-flex'>
                                <Card 
                                    title="Post-Launch Support"
                                    Icon={HiOutlineSupport}
                                    text="Follow-up and support, 99.99% uptime all the time. A hotline and a team of highly trained customer service professionals at your service."
                                    footerIcons={footerIcons4}
                                    footer="Contact us for details!"    
                                />
                        </div>
                        
                    </div>
                    </div>
                    <br/>
                        <br/>
                        
       </div>
       </>
     );
}
function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
 
export default Cards;