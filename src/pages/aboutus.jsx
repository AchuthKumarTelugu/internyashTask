import React from 'react';
import './aboutus_styles.css';
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';

import Footer from './Footer';
import Headder from "./Navbar";
import WhatsAppButton from './WhatsAppButton';
function Aboutus() {
  const imagePaths1 = ['./abou2.png', './about3.png', './about4.png', './about5.png'];
  const descriptions1 = ['Business development', 'R&D', 'Inhouse Product Evaluation Team', 'QC & QA'];

  const imagePaths2 = ['./rnd.png', './about7.png', './about8.png', './rnd.png'];
  const descriptions2 = ['Manufacturing', 'Marketing', 'Exports', 'Creative Media'];

  return (

    <>
      <Headder />
      <div>
        <div className='aboutus-section'>
          <div className='about-us'>About Us</div>
        </div>
        <div className='aboutus-des'>
          <div className='foundation'>
            <div className='imagea-1'>
              <img src='./imageaboutus1.png'></img>
            </div>
            <div className='foundation-1'>
              <div className='foundation-title'>Standing Foundation</div>
              <div className='foundation-des' >
                Our goal is global expansion, ensuring all Indians worldwide enjoy the taste and health benefits of Indian cuisine. We achieve this through partnerships with Indian restaurants worldwide, maximizing NutryFood Industries' reach.
              </div>
            </div>
          </div>
          <div className='foundation'>
            <div className='imagea-2'>
              <img src='./imageaboutus2.png'></img>
            </div>
            <div className='foundation-1'>
              <div className='foundation-title'>Branching Principles</div>
              <div className='foundation-des'>
                We uphold unwavering commitment to quality, standards, traditional cooking methods, preserving nutrients, health benefits, and the personal touch that our customers cherish.
              </div>
            </div>

          </div>
          <div className='foundation' style={{ marginRight: '4rem' }} >
            <div className='imagea-3'>
              <img src='./imageaboutus3.png'></img>
            </div>
            <div className='foundation-1'>
              <div className='foundation-title'>Fruitful Results</div>
              <div className='foundation-des' >
                We continue our mothers' legacy by offering NutryFood to present and future generations, ensuring the tradition lives on.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='journey-title' style={
        {
          color: '#000',
          fontFamily: 'Montserrat',
          fontSize: '1.5rem',
          fontStyle: 'normal',
          fontWeight: '600',
          display: 'flex',
          justifyContent: 'center',
          lineHeight: 'normal',
          marginBottom: '20px',
        }
      }>
        Our Journey
      </div>
      <div className='journey-des' style={
        {
          color: 'rgb(0 0 0 / 79%)',
          fontFamily: 'Lato',
          // fontSize: '1.25rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          // width:'1152px',
          textAlign: 'justify',
          margin: "0 4rem 0 4rem",
        }
      }>
        At the heart of Nutryfood's success is our strong focus on making food better through lots of testing and improving. We've made cooking much quicker and easier, turning long tasks into short ones, so you can spend less time in the kitchen. At Nutryfood, we're all about making cooking effortless, where every dish is made with care and tastes amazing.
        <br></br> <br></br>
        We're really proud of what we do. Every bite you take shows how much we care about making food taste great. Nutryfood is all about bringing together new ideas with old ones to make food that's both tasty and good for you.
        <br></br> <br></br>
        We want everyone to enjoy the flavors of Indian food, no matter where they are. And we promise that when you choose Nutryfood, you're getting food that's good for you and tastes great. Plus, our solutions won't break the bank, so everyone can enjoy delicious meals. Come join us on this journey of tasty food and new ideas!
      </div>

      <div className='mission-vision'>
        <div className='mission'>
          <div className='mission-title'>
            <div className='mission-image'>
              <img src='./mission_icon.svg' alt='missin-icon'></img>
            </div>
            <div className='mission-header'>MISSION</div>
          </div>
          <div className='mission-des'>“To help people live healthier lives and make the world a better place with new ideas”
          </div>
        </div>
        <div className='vision'>
          <div className='mission-title'>
            <div className='mission-image'>
              <img src='./mission_icon.svg' alt='missin-icon'></img>
            </div>
            <div className='mission-header'>VISION</div>
          </div>
          <div className='mission-des'>“To help people live healthier lives and make the world a better place with new ideas”
          </div>
        </div>
      </div>


      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <div className='core-title'>Core Values</div></div>
      <div className='core-1'>
        <div className='core-1-a' >
          <div className='image-1-a'>
            <img src='./Component 58.png'></img>
          </div>
          <div className='core-1-title'>Innovation</div>
        </div>
        <div className='core-1-a' >
          <div className='image-1-a'>
            <img src='./Component 59.png'></img>
          </div>
          <div className='core-1-title'>Integrity</div>
        </div>
        <div className='core-1-a' >
          <div className='image-1-a'>
            <img src='./Component 60.png'></img>
          </div>
          <div className='core-1-title'>Excellence</div>
        </div>
      </div>
      <div className='core-2'>
        <div className='core-2-a' >
          <div className='image-1-a'>
            <img src='./Component 62.png'></img>
          </div>
          <div className='core-1-title'>Inclusivity</div>
        </div>
        <div className='core-2-a' >
          <div className='image-1-a'>
            <img src='./Component 61.png'></img>
          </div>
          <div className='core-1-title'>Sustainability</div>
        </div>
      </div>


      <div className='founders-section'>
        <div className='heading'>Founders</div>
        <div className='founder-1'>
          <div className='image-1-founder'>
            <img src='/IMG_3990 1.png'></img>
          </div>
          <div className='founder-1-des'>
            <div className='founder-1-title'>
              <div className='founder-1-name'>Nanda Kishore Reddy</div>
              <div className='founder-1-role'>Co-Founder</div>
            </div>
            <div className='founder-1-about'>
              Nanda Kishore Reddy, a visionary entrepreneur deeply rooted in Indian agriculture, founded his first company, Regis EXIM, at the age of 21. Born into a farming family, he understood the hardships of the agricultural community. At 24, he co-founded Nutryfood with a mission to revolutionize the culinary landscape. His relentless drive led to the transformation of complex cooking processes into effortless tasks. His vision remains clear:harmonize cutting-edge innovation with traditional Indian flavors, ensuring convenience, quality, and culinary excellence for all. Nanda Kishore Reddy's story epitomizes resilience and innovation, reflecting in Nutryfood's mission to redefine taste through research excellence and unwavering commitment to supreme quality.
            </div>
          </div>
        </div>
        <div className='founder-1 found-f'>
          <div className='founder-1-des'>
            <div className='founder-1-title'>
              <div className='founder-1-name'>Dr. Yalaka Nandini</div>
              <div className='founder-1-role'>Co-Founder</div>
            </div>
            <div className='founder-1-about'>
              "With a decade of experience in Agricultural Engineering Research, Dr. Yalaka Nandini has pioneered various farming technologies for both small and large-scale farmers. Her deep-rooted understanding of food's importance led her to believe that it's pivotal for human health and prosperity. Motivated by this belief and a desire to offer high-quality, nutritious food with traditional values to those purchasing and consuming food products, she founded Nutry Food. Dr. Nandini ensures quality standards and oversees overseas the company."
            </div>
          </div>
          <div className='image-1-founder'>
            <img src='/_DSC0158 1.png'></img>
          </div>
        </div>
      </div>

      <div className='team-frame'>
        {/* First row */}
        <div className="team">OUR TEAM</div>
        <div className='team-frame-1'>
          {imagePaths1.map((path, index) => (
            <div key={index} className='team-frame-1-a'>
              <div className='imaget-1'>
                <img src={path} alt={`Team member ${index + 1}`} />
              </div>
              <div className='des'>
                <div className='des-des'>{descriptions1[index]}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Second row */}
        <div className='team-frame-1'>
          {imagePaths2.map((path, index) => (
            <div key={index} className='team-frame-1-a'>
              <div className='imaget-1'>
                <img src={path} alt={`Team member ${index + 5}`} />
              </div>
              <div className='des'>
                <div className='des-des'>{descriptions2[index]}</div> 
              </div>
            </div>
          ))}
        </div>
      </div>
      <
        Footer />
        <WhatsAppButton/>
    </>
  );
}

export default Aboutus;
