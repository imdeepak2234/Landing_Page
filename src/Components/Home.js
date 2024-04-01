import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpg";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-text-section">
          <h3 className="primary-heading">
            A Marketing Agency To Grow Your Business
          </h3>
          <p className="primary-text">
            We are 100+ professional software engineers with more than 10 year
            of experience in delivering superior products Believe it because you
            have seen it. Here are real numbers
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
