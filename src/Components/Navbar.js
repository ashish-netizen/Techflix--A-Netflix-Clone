import React, {useEffect, useState} from 'react';
import logo from './logo.png'
import "./Nav.css";

const Navbar=()=>{

    const [show, handleShow]= useState(false);
//Writing Codition for Black bcg after scrolling 
   useEffect(()=>{
window.addEventListener('scroll', ()=>{
    if(window.scrollY>100){
        handleShow(true)

    }
    else handleShow(false);

});
return ()=>{
    window.removeEventListener('scroll')

};


    
   }, [])






    return(
<div className={`nav ${show && 'nav_black'}`}>

    <img  
    className="nav_logo"
    src={logo}
    />


<img  
    className="nav_avatar"
    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
    />


</div>
        
    )
}

export default Navbar;