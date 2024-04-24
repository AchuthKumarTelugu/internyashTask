import React from "react";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@Nutryfood.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+91 93925 87332';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.link/79b6tq', '_blank');
  };
  return (
    <>
      <div className="navbar">
        {/* <div className="row navbar-main-row">
          <div className="col-12 navbar-col-1">
            <div className="row nav-row-1">
              <div className="col-md-4 nav-img">
                <img className="logoimages" src="/nutriFoodLogo.png" alt="logo" /> 
              </div>
              <div className="col-md-4 nav-img">
              </div>
              <div className="col-md-4 nav-img d-flex justify-content-end">
                <img className="logoimages" src="/navimage.png" />
              </div>
            </div>

          </div>
        </div> */}
        <div className="navbar-main">
          <div className="navbar-item">
            <img className="" src="/nutriFoodLogo.png" alt="logo" /> </div>
          <div className="navbar-item">
            <div className="search-container">
              <input type="text" className="search-input" placeholder="Search..." />
              <div className="search-icon">
                <img src="/search (2) 1.png" alt="" style={{ width: "1rem" }} />
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <img className="" src="/navimage.png" />

            <div className="collapse" id="navbarToggleExternalContent2">
              <div className="bg-light shadow-3 p-4">
                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-block border-bottom m-0">Link 1</button>
                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-block border-bottom m-0">Link 2</button>
                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-block m-0">Link 3</button>
              </div>
            </div>
          </div>
        </div>


      </div>

      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid justify-content-end">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center navbar-slider" id="navbarSupportedContent">
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="text-white nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="text-white nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-white" href="/products">Products</a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link text-white">ContactUs</a> */}
                <Link className="text-white nav-link" to="/contactus">Contact us</Link>
              </li>
            </ul>
            <div className="social-media-icons">
            <FaPhoneFlip className="social-icon"  onClick={handlePhoneClick}/>
            <MdOutlineMailOutline  className="social-icon" onClick={handleEmailClick}/>
            <ImWhatsapp  className="social-icon" onClick={handleWhatsAppClick}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;