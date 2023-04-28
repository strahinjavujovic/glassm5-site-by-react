//import logo from '';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
  
   
      <div className={
            isNavExpanded ? "header expanded" : "header"}>
          <div className='companyName'>
              <a href="/home">GlassM5</a>
          </div>
          
          <div  className={
            isNavExpanded ? "links expanded1" : "links"}>
                <ul>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/about-us">About us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
              </ul>
          </div>
          <div className='navbar-toggler'>
              <FontAwesomeIcon icon={faBars} onClick={()=>setIsNavExpanded(!isNavExpanded)}/>
          </div>
          <div className={
            isNavExpanded ? "button expanded1" : "button"}>
              <a href="/home">Get Started</a>
          </div>
          
          </div>
          
       
    
  );
}

export default Header;
