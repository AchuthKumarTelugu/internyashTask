import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';

const Footer = () => {
    return(
        <>
          <div className="p-5" style={{backgroundColor:'#004AAD',marginTop:'80px',width:'100%'}}>
            <div className="row mb-5">
                <div className="col-md-4">
                    <img style={{width:'70%',height:'100%'}} src="/footerIcon.png" />                    
                </div>
            </div>
            <div className="row">
            <ul className="d-flex mb-4" style={{listStyle:'none',gap:'30px',margin:'10px'}}>
        <li className="nav-item">
          <Link className="text-white nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="text-white nav-link" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link text-white" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">ContactUs</a>
        </li>
      </ul>
      <div className="row mb-4 d-flex align-items-center">
        <div className="row">
        <div className="col-md-6 mobile">
          
        <ExternalLink className="external m-3" href='https://www.linkedin.com/company/nutryfood'>
            <img className="component-38-icon" alt="" src="/component-38.svg" /></ExternalLink>
            
            
          <ExternalLink className="external m-3" href='https://twitter.com/Nutryfood_'>
            <img className="component-38-icon" alt="" src="/component-39.svg" /></ExternalLink>
            
            
          <ExternalLink className="external m-3" href="https://www.instagram.com/nutryfood_/"><img className="component-38-icon" alt="" src="/component-40.svg" />
          </ExternalLink>
                   
          <ExternalLink className="external m-3" href="https://www.facebook.com/NutryFoodIndustries/"> <img className="component-38-icon" alt="" src="/component-41.svg" />
          </ExternalLink>
          
          
          <ExternalLink className="external m-3" href=''>
            <img className="component-38-icon" alt="" src="/component-42.svg" />
          </ExternalLink>
         
        </div>
        <div className="col-md-6 d-flex justify-content-center">
            <span style={{fontWeight:'600',fontSize:'16px',color:'white'}}>© 2024, NutryFood. All rights reserved.</span>
        </div>
        </div>
      </div>
            </div>
          </div>
        </>
    )
}

export default Footer;