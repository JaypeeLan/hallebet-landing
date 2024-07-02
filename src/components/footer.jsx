import Adult from "../images/18.png";
import facebook from "../images/facebook.svg";
import fidelity from "../images/fidelity.png";
import flutterwave from "../images/flutterwave.png";
import heritage from "../images/heritage.png";
import instagram from "../images/instagram.svg";
import interswitch from "../images/interswitch.png";
import mastercard from "../images/mastercard.png";
import paystack from "../images/paystack.png";
import telegram from "../images/telegram.png";
import verve from "../images/verve.png";
import visa from "../images/visa.png";

import twitter from "../images/twitter.svg";

const Footer = () => {
  return (
    <section className=" ">
      <div className="footerHead bg-[#1F204B] lg:flex flex-wrap">
        <div className="lg:w-3/5   py-12">
          <div className="lg:w-4/5 w-[90%]  mx-auto flex flex-col gap-y-5">
            <div className="">
              <h2 className="text-[16px]  font-[600] text-white">
                HELP & INFORMATION
              </h2>
            </div>
            <div className="text-[15px]">
              <div className="lg:flex flex-wrap lg:gap-5 text-white">
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=119348"
                    className="text-white"
                  >
                    About Us
                  </a>{" "}
                </p>
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=119360"
                    className="text-white"
                  >
                    Contact Us
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=119349"
                    className="text-white"
                  >
                    Help Affiliates
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=119352"
                    className="text-white"
                  >
                    Jobs
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=51330"
                    className="text-white"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=51329"
                    className="text-white"
                  >
                    Cookie Policy
                  </a>
                </p>
              </div>
              <div className="lg:flex flex-wrap lg:gap-5 lg:mt-0 mt-5 text-white">
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=51329"
                    className="text-white"
                  >
                    Terms and Conditions{" "}
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=119353"
                    className="text-white"
                  >
                    Game Reviews
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.hallabet.com/en/?helpPageContent=119353"
                    className="text-white"
                  >
                    Responsible Gambling
                  </a>{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 my-5">
              <div className="flex gap-2">
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={visa} alt="" className="mx-auto" />
                </div>
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={flutterwave} alt="" className="mx-auto" />
                </div>
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={mastercard} alt="" className="mx-auto" />
                </div>
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={paystack} alt="" className="mx-auto" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={fidelity} alt="" className="mx-auto" />
                </div>
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={heritage} alt="" className="mx-auto" />
                </div>
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={verve} alt="" className="mx-auto" />
                </div>
                <div className="bg-white w-[73px] h-[43.49px] flex items-center rounded-[3.11px]">
                  <img src={interswitch} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5  ">
          <div className="lg:w-4/5 w-[90%] mx-auto lg:my-12  ">
            <div>
              <h2 className="text-[15px] font-[600] text-white">
                Responsible & Secure Gaming.
              </h2>
            </div>
            <div>
              <p className="text-[15px] font-[400] text-white py-4">
                Hallabet is committed to Responsible Gaming.
                <span className="flex gap-3 my-2 text-white ">
                  <img src={Adult} alt="" /> Play responsibly
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-[#181942] flex flex-wrap justify-between px-[5%] py-[30px]">
        <div className="max-w-[600px] w-full">
          <p className="text-white ">
            The operator of this website is Hallabet Gaming Company limited, a
            Nigeria company with registration number 1396896 and having its
            registered address at first floor, Lagos city mall, Onikan Lagos,
            Lagos state. This website is operated by Halla Gaming Company
            Limited with license No 1396896 issued on 15th Aug 2023 by National
            Lottery Regulation Commission(NLRC). Responsible Gaming
          </p>

          <p className="mt-4 text-white">
            Copyright © Hallabet 2023. All Rights Reserved.
          </p>
        </div>
        <div className="lg:flex flex-wrap py-10">
          <div className="lg:max-w-2/5  relative lg:mt-0 mt-5">
            <div className=" flex flex-col gap-y-5 text-white">
              <p className="text-white">Follow us!</p>

              <div className="flex gap-5 items-center">
                <a href="http://Facebook.com/hallabetnigeria">
                  <img width={41} height={41} src={facebook} alt="facebook" />
                </a>

                <a href="http://twitter.com/hallabetnigeria">
                  <img width={41} height={41} src={twitter} alt="twitter" />
                </a>

                <a href="https://www.instagram.com/hallabetnigeria">
                  <img width={41} height={41} src={instagram} alt="instagram" />
                </a>
                <a href="https://t.me/Hallagaming">
                  <img width={41} height={41} src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
