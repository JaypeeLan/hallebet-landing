/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import bg1 from "../files/bg1.png";
import bg2 from "../files/bg3.png";
import bg3 from "../files/bg2.png";
import bgMob1 from "../files/bg-mob1.png";
import bgMob2 from "../files/bg-mob2.png";
import bgMob3 from "../files/bg-mob3.png";
import logo from "../files/logo.svg";

const links = ["SPORT", "TODAY’S BET", "LIVE", "T & C"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [setFade] = useState(true);
  const urlParams = new URLSearchParams(window.location.search);
  const utmCampaign = urlParams.get("utm_campaign");
  const clickId = urlParams.get("click_id");

  const largeScreenImages = [bg1, bg2, bg3];
  const smallScreenImages = [bgMob1, bgMob2, bgMob3];

  const isSmallScreen = window.matchMedia("(max-width: 870px)").matches;
  const images = isSmallScreen ? smallScreenImages : largeScreenImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 3000); // Duration should match the transition duration in CSS
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero ${index === currentImage ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="nav relative z-10">
        <div className="flex justify-between items-center px-4 pt-[34px] md:pt-[44px]">
          <div>
            <img src={logo} alt="logo" width={144} height={47} />
          </div>
          {/* /links */}
          <div className="hidden md:flex gap-[20px] text-white !font-[700] text-[20px]">
            {links.map((link) => (
              <a
                key={link}
                href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
              >
                {link}{" "}
              </a>
            ))}
          </div>

          <div className="">
            <a
              className="border border-transparent bg-[#ED3237] px-[1rem] py-2 lg:px-[3rem] lg:py-4 text-white text-[18px]"
              href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
