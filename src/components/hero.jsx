import React, { useState, useEffect } from "react";
import bg1 from "../files/bg1.png";
import bg2 from "../files/bg3.png";
import bg3 from "../files/bg2.png";
import bgMob1 from "../files/bg-mob1.png";
import bgMob2 from "../files/bg-mob2.png";
import bgMob3 from "../files/bg-mob3.png";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
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
      }, 1000); // Duration should match the transition duration in CSS
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
        <div className="flex justify-between items-center lg:px-4 pt-[44px]">
          <div className="w-full items-center justify-start md:justify-end flex mt-32 pl-8 md:pl-0 md:mt-6">
            <a
              className="border border-transparent relative top-[20.5rem] -right-[4.5rem] md:top-6 md:right-6 bg-[#414291] px-[1rem] py-2 lg:px-[3rem] lg:py-4 text-white text-[18px]"
              href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="w-full text-end pr-40 relative lg:top-[30rem] left-[8rem] top-[25rem] hidden md:block">
          <a
            className="border border-transparent px-[43px] py-[15px] bg-[#414291] rounded w-full font-[Gilroy-Bold] text-white text-[16px]"
            href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
