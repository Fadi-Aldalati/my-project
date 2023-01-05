import React from 'react';

const Home = () => {

    const width = window.innerWidth;
    
    const height = window.innerHeight;
    var imageHeight=height/(1.4);
    var gapHeight=width*22/100;
    var paddingLeft=width*5.5/100;
    

    return ( 
        <>
        <div className="home-image" style={{width:'100%',height:imageHeight,marginTop:'70px'}}>
        <p style={{height:gapHeight}}/>
            <div style={{color:'white',paddingLeft:paddingLeft}} >
            <h4 >
            Home to creative geeks and innovative solutions
            </h4>
            <button type="button" className="btn btn-outline-light rounded-pill btn-lg">Hire Us</button>
            </div>
        </div>
        </>
     );
}
 
export default Home;