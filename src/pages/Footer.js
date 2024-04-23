import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return ( <
        >
        <
        div className = "home" >
        <
        div className = "macbook-air-5" >
        <
        div className = "nutryfood-parent" >
        <
        div className = "nutryfood" > NUTRYFOOD < /div> <
        div className = "crowned-with-innovations1" >
        CROWNED WITH INNOVATIONS <
        /div> <
        /div> <
        div className = "home-parent" >
        <
        div className = "best-sellers" > < Link to = '/' > Home < /Link></div >
        <
        div className = "best-sellers" > < Link to = '/aboutus' > About Us < /Link></div >
        <
        div className = "best-sellers" > < Link to = '/products' > Products < /Link></div >
        <
        div className = "best-sellers" > < Link to = '/contactus' > Contact Us < /Link></div >
        <
        /div> <
        div className = "component-38-parent" >
        <
        a href = "https://www.linkedin.com/company/nutryfood" > < img className = "component-38-icon"
        alt = ""
        src = "/component-38.svg" / > < /a> <
        a href = "https://www.youtube.com" > < img className = "component-38-icon"
        alt = ""
        src = "/component-42.svg" / > < /a> <
        a href = "https://twitter.com/Nutryfood_" > < img className = "component-38-icon"
        alt = ""
        src = "/component-39.svg" / > < /a> <
        a href = "https://www.instagram.com/nutryfood_/" > < img className = "component-38-icon"
        alt = ""
        src = "/component-40.svg" / > < /a> <
        a href = "https://www.facebook.com/NutryFoodIndustries/" > < img className = "component-38-icon"
        alt = ""
        src = "/component-41.svg" / > < /a> <
        /div> <
        div className = "nutryfood-all-rights" > ©2024, NutryFood.All rights reserved. <
        /div> <
        /div> <
        /div> <
        />
    )
}
export default Footer;