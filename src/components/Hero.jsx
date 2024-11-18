import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import Getstarted from "./Getstarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>
      {/* 20% discount */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% Discount For 1 Month Account </span>
        </p>
      </div>

      {/* Text "The Next Generation..." */}
      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="flex-1 font-poppins font-semibold ss:text[72px] text-[52px] text-white">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <Getstarted />
        </div>
      </div>

      {/* Payment Method. */}
      <h1 className="font-poppins font-semibold ss:text[68px] text-[52px] text-white w-full">
        Payment Method.
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
    </div>

    {/* Robotic Arm */}
    <div className={`flex-1 flex md:y-0 my-10 relative ${styles.flexCenter}`}>
      <div className="w-[100%] h-[100%] relative z-[5]">
          <img src={robot} alt="Robot" />
      </div>
        {/* Gradients */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[40%] h-[40%] bottom-40 rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>

    {/* Get started For mobile devices  */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Getstarted />
    </div>

  </section>
);

export default Hero;
