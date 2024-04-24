import React from 'react';
import './Home.css';
import Footer from './Footer';
import Headder from "./Navbar";
import Carousel from "./carousol";
import WhatsAppButton from './WhatsAppButton';

function Home() {
  return (
    <>
      <Headder />
      <Carousel style={{ marginTop: '-36%' }} />
      <div className="cwi">
        <div className="cwihead">
          <h1>Crowned With Innovations</h1>
          <h3>"Elevating Culinary Excellence"</h3>
        </div>
        <div className="cwipara">
          <p>Welcome to Nutryfood!We believe in blending tradition with innovation to make cooking easier and faster.Our smart research makes cooking simple and delicious.We want everyone to enjoy good food without the hassle.</p>
          <p>We mix new and old cooking methods to create amazing flavors in Indian cuisine.Our goal is to share authentic Indian food with the world while keeping it healthy and tasty.</p>
          <p>At Nutryfood, we make sure everyone can afford great food.Our solutions are budget-friendly for every kitchen.Come join us on a journey of tasty meals and innovative ideas, making every dining experience memorable.</p>
        </div>
      </div>
      <div className="imgtext">
        <div className="imgtext-col">
          <img src="./homenso.svg" className='imgtext-img' alt="" />
          <h1>Nutritionally Superior Option</h1>
        </div>
        <div className="imgtext-col">
          <img src="./homeathm.svg" className='imgtext-img' alt="" />
          <h1>Ancient, Time-Honored Method</h1>
        </div>
        <div className="imgtext-col">
          <img src="./homenppf.svg" className='imgtext-img' alt="" />
          <h1>No preservatives, pure freshness</h1>
        </div>
        <div className="imgtext-col">
          <img src="./homeawe.svg" className='imgtext-img' alt="" />
          <h1>Accessible worldwide, everywhere</h1>
        </div>
        <div className="imgtext-col">
          <img src="./homeawsq.svg" className='imgtext-img' alt="" />
          <h1>Affordable without sacrificing quality</h1>
        </div>
      </div>
      <div className="full-width-image">
        <img src="./homecoock.png" alt="" />
      </div>
      <div class="container container-1">
        <h1>Who We Are</h1>
        <div class="content">
          <img src="/frame-273@2x.png" alt="Company Photo" class="photo" />
          <p class="concept">Welcome to Nutryfood, where culinary innovation meets tradition. With our supreme Research and Development, we've revolutionized cooking, turning hours of effort into minutes of convenience. Effortless Cooking is our mantra, where quality and convenience unite in every dish. We redefine taste through Research Excellence, blending innovative techniques with traditional Indian flavors. Our mission is to share authentic Indian cuisine globally, without compromising on Nutrition, Quality, or Taste. At Nutryfood, excellence is accessible to all, with cost-effective solutions for every kitchen. Join us on a journey where culinary creativity meets innovation, promising unforgettable dining experiences for all.</p>
        </div>
      </div>
      <div className="best-seller">
        Best Seller
      </div>
      <div className=" container-2">
        <div className="stand-up-pouch-bag-mockup-2-parent">
          <img className="stand-up-pouch-bag-mockup-2" alt="" src="/standup-pouch-bag-mockup-2-3@2x.png" />
          <div className="ready-to-mix">Ready to Mix Dosa Powder</div>
        </div>
        <div className="stand-up-pouch-bag-mockup-2-parent">
          <img className="stand-up-pouch-bag-mockup-1" alt="" src="/standup-pouch-bag-mockup-1-1@2x.png" />
          <div className="ready-to-mix">Ready to Mix Idly Powder</div>
        </div>
        <div className="stand-up-pouch-bag-mockup-2-parent">
          <img className="stand-up-pouch-bag-mockup-3" alt="" src="/standup-pouch-bag-mockup-3-2@2x.png" />
          <div className="ready-to-mix">Ready to Mix Millet Idly Powder</div>
        </div>
        <div className="stand-up-pouch-bag-mockup-2-parent">
          <img className="stand-up-pouch-bag-mockup-4" alt="" src="/standup-pouch-bag-mockup-4-2@2x.png" />
          <div className="ready-to-mix">Ready to Mix Millet Dosa Powder</div>
        </div>
      </div>
      <div className="best-sellers">Certifications</div>
      <div className="component-45">
        <img className="image-71-icon" alt="" src="/image-71@2x.png" />
        <img className="image-80-icon" alt="" src="/image-71@2x.png" />
        <img className="image-72-icon" alt="" src="/image-72@2x.png" />
        <img className="image-81-icon" alt="" src="/image-72@2x.png" />
        <img className="image-73-icon" alt="" src="/image-73@2x.png" />
        <img className="image-82-icon" alt="" src="/image-73@2x.png" />
        <img className="image-74-icon" alt="" src="/image-74@2x.png" />
        <img className="image-83-icon" alt="" src="/image-74@2x.png" />
        <img className="image-75-icon" alt="" src="/image-75@2x.png" />
        <img className="image-84-icon" alt="" src="/image-75@2x.png" />
        <img className="image-76-icon" alt="" src="/image-76@2x.png" />
        <img className="image-85-icon" alt="" src="/image-76@2x.png" />
        <img className="image-77-icon" alt="" src="/image-77@2x.png" />
        <img className="image-86-icon" alt="" src="/image-77@2x.png" />
        <img className="image-78-icon" alt="" src="/image-78@2x.png" />
        <img className="image-87-icon" alt="" src="/image-78@2x.png" />
        <img className="image-79-icon" alt="" src="/image-79@2x.png" />
        <img className="image-88-icon" alt="" src="/image-79@2x.png" />
      </div>
      <div className="footer-c">
        <Footer />
      </div>
      <WhatsAppButton/>
    </>
  );
}

export default Home;
