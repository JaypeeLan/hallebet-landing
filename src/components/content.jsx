import React from "react";
import Contentbg from "../images/content.jpeg";

const Content = () => {
  return (
    <div>
      <div className="relative mt-[-30px] lg:h-[553px] bg-[#D8D9EA] h-[185px]">
        <div className="flex items-center justify-center h-full p-8 md:p-12">
          <img
            src={Contentbg}
            width={"100%"}
            height={"100%"}
            className=""
            alt="jolli wednesday offer"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
