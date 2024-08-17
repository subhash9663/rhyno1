
import React from 'react';
import { Link } from 'react-router-dom';
import se03lite from '../assets/images/homeImage.png'; 
import '../styles/Home.css'; 
import Slider from 'react-slick'; 

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className="home">
      <h1 className='headerMatter'>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style.</h1>
      <img src={se03lite} alt="Rhyno EV" className="home-image" />
      <button className="pre-book-button">
        <Link to="/pre-book-now" className="link">Pre-Book Now</Link>
      </button>
      <div className="usp-carousel">
        <Slider {...settings}>
          <div className="usp-item">
            <h3>LFP Battery</h3>
            <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!</p>
          </div>
          <div className="usp-item">
            <h3>Wider Tyres</h3>
            <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
          </div>
          <div className="usp-item">
            <h3>Range Prediction</h3>
            <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.</p>
          </div>
          <div className="usp-item">
            <h3>Extraordinary Experience</h3>
            <p>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!</p>
          </div>
          <div className="usp-item">
            <h3>Rugged and Simple Design</h3>
            <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride?</p>
          </div>
        </Slider>
      </div>
    </div>
  );
  
};

export default Home;
