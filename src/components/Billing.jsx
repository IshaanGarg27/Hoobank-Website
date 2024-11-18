import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>

    <div className="absolute w-[50%] h-[50%] z-[3] left-1/2 rounded-full top-0 white-gradient" />
    <div className="absolute w-[50%] h-[50%] z-[0] left-1/2 rounded-full bottom-0 pink-gradient" />

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden"/> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-wrap flex-row sm:mt-10 mt-6">
        <img src={apple} alt="apple" className="w-[128px] h-[40px] object-contain cursor-pointer mr-5"/>
        <img src={google} alt="google" className="w-[128px] h-[40px] object-contain cursor-pointer "/>
      </div>
    </div>
  </section>
);

export default Billing;
