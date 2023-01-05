import React from 'react';
import Project from './common/project';
import carlo from './../img/carl.jpg';
import mybox3 from './../img/mybox.jpg';
import howdy from './../img/howdy1.jpg';
import papyrus from './../img/papyrus 1.jpg';


const Projects = () => {
    
    const width = window.innerWidth;
   
    var colPad= width*2/100;
    var containerWidth = width*75/100;


    return ( 
        <>
        <h2 style={{textAlign:'center'}} className="bolded">Our Projects</h2>
        <div className="container" style={{width:containerWidth}}>
            
            
            <div className="row">
        <div className="col d-flex" style={{paddingBottom:colPad}}>
        <Project 
        title="CARLO"
        body="Carlo is a payment app that rewards users for contributing to the local economy. Through a cashback system and QR codes, Carlo creates an easy-to-use and quick payment alternative to cash.

        As one of the first mobile applications we developed in Tradinos, Carlo's success had a great impact on our approach to software."
        footer="Download Carlo"
        image={carlo}
        diffSize={false}
        />
        </div>
        <div className="col d-flex" style={{paddingTop:colPad}}>
        <Project 
        title="MY BOX"
        body="A logistics app that provides its users with the option to receive shipments from all over the world through MYBOX delivery services.

        Tradinos has developed the application in a way that turned it into a thriving shipping application that supports shipment tracking and status, e-payment, customs clearance, and many more useful features that make online purchases and delivery much easier"
        footer="Download Carlo"
        image={mybox3}
        diffSize={false}
        />
        
        </div>
        </div>
        <div className="row">
        <div className="col d-flex" style={{paddingBottom:colPad}}>
        <Project 
        title="HOWDY"
        body="A survey creation platform that allows its users to create and send questionnaires to their clients through a few simple steps.

        A Tradinos inhouse project aimed towards improving customer services and client's satisfaction."
        footer="Download Carlo"
        image={howdy}
        diffSize={false}
        />
        </div>
        <div className="col d-flex" style={{paddingTop:colPad}}>
        <Project 
        title="PAPYRUS"
        body="An educational website that features a specialized dashboard for students, alumni, and universities to connect through and create new opportunities.

        Another project that Tradinos has created from scratch to benefit the local community."
        footer="Download Carlo"
        image={papyrus}
        diffSize={true}
        />
        </div>
        </div>
        </div>
        </>
     );
}
 
export default Projects;