import React from "react";
import img1 from "../images/offer1.png";
import img2 from "../images/offer2.png";
import img3 from "../images/offer3.png";
import img4 from "../images/offer4.png";

// Create a URLSearchParams object from the query string
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the utm_campaign parameter
const utmCampaign = urlParams.get("utm_campaign");
const clickId = urlParams.get("click_id");

const Offers = () => {
  return (
    <div className="min-h-screen mb-6 text-center bg-[#1A1B41] text-white pb-8 px-[10%] py-[40px]">
      <div className="max-w-[1200px] mx-auto mb-[82px] font-[Gilroy-Bold]">
        {/* item 1 */}
        <a
          href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between flex-nowrap mb-[75px]">
            <p className="text-[30px] lg:text-[43px] italics mb-[28px] leading-[32px] sm:leading-normal md:leading-[54.27px] order-1 sm:order-1 md:order-2 max-w-[390px] text-left">
              Enjoy 400% Welcome Bonus when you{" "}
              <span className="underline">Register</span>
            </p>
            <div className="px-[20px] w-[340px] sm:w-[388px] md:w-[564px] order-2 sm:order-2 md:order-1 mb-4 sm:mb-0 mr-0 sm:mr-[0px] md:mr-[70px]">
              <img
                className=""
                src={img1}
                alt="horse racing"
                // width={185}
                // height={223}
                srcset=""
              />
            </div>
          </div>
        </a>

        {/* item 2 */}
        <a
          href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between flex-nowrap mb-[75px]">
            <p className="text-[30px] lg:text-[43px] italics mb-[28px] leading-[32px] sm:leading-normal md:leading-[54.27px] order-1 sm:order-1 md:order-2 max-w-[390px] text-left">
              Double Your First Deposit up to 20,000NGN
              <span className="text-red-500"> (Every Wednesday)</span>
            </p>
            <div className="px-[20px] w-[340px] sm:w-[388px] md:w-[564px] order-2 sm:order-2 md:order-2 mb-4 sm:mb-0 mr-0 sm:mr-[0px] md:mr-[70px]">
              <img
                className=""
                src={img2}
                alt="horse racing"
                // width={185}
                // height={223}
                srcset=""
              />
            </div>
          </div>
        </a>

        <div className="mb-[120px] max-w-[595px] mx-auto">
          <h1 className="text-[30px] lg:text-[43px]  mb-[28px] leading-[32px] sm:leading-normal md:leading-[54.27px] ">
            Sign Up and Start Enjoying our Bonuses and Benefits
          </h1>
          <a
            className="border border-transparent  bg-[#ED3237] px-[1rem] py-2 lg:px-[3rem] lg:py-4 text-white text-[18px]"
            href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
          >
            Sign Up
          </a>
        </div>
        {/* item 3 */}

        <a
          href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between flex-nowrap mb-[75px]">
            <div className="px-[20px] w-[340px] sm:w-[388px] md:w-[564px] order-2 sm:order-2 md:order-2 mb-4 sm:mb-0 mr-0 sm:mr-[0px] md:mr-[70px]">
              <img
                className=""
                src={img4}
                alt="horse racing"
                // width={185}
                // height={223}
                srcset=""
              />
            </div>

            <p className="text-[30px] lg:text-[43px] italics mb-[28px] leading-[32px] sm:leading-normal md:leading-[54.27px] order-1 sm:order-1 md:order-2 max-w-[390px] text-left">
              Get up to 50% cashback on your multibet if one game cuts it.{" "}
              <span className="text-red-500">“This July”</span>
            </p>
          </div>
        </a>
        {/* item 4 */}
        <a
          href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between flex-nowrap mb-[75px]">
            <p className="text-[30px] lg:text-[43px] italics mb-[28px] leading-[32px] sm:leading-normal md:leading-[54.27px] order-1 sm:order-1 md:order-2 max-w-[390px] text-left">
              Enjoy Weekly Cashback on Losses
            </p>
            <div className="px-[20px] w-[340px] sm:w-[388px] md:w-[564px] order-2 sm:order-2  mb-4 sm:mb-0 mr-0 sm:mr-[0px] md:mr-[70px]">
              <img
                className=""
                src={img3}
                alt="horse racing"
                // width={185}
                // height={223}
                srcset=""
              />
            </div>
          </div>
        </a>
      </div>
      <a
        href={`https://hallabet.com/signup/?click_id=${clickId}&utm_campaign=${utmCampaign}`}
        className="bg-[#9B0000] border border-transparent rounded-lg p-4 px-12 text-white font-bold "
      >
        Start now
      </a>
    </div>
  );
};

export default Offers;
