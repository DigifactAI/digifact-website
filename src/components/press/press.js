import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bsides from "../../assets/images/featured-logos/bsides-goa-logo.webp";
import aic from "../../assets/images/featured-logos/aic-gim-logo.png";
import nsec from "../../assets/images/featured-logos/nsec-logo.png";
import parul from "../../assets/images/featured-logos/parul-university.png";

const Press = () => {
  return (
    <div className="featured-in-container py-12">
      <div className="w-4/5 m-auto">
        <div className="relative col-span-full flex justify-center before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:-translate-y-1/2 before:bg-[#E9E9E9]">
          <h3 className="relative z-10 inline-block bg-white px-4 text-center text-32 uppercase leading-snug tracking-[0.04em] sm:px-3 sm:text-16 sm:tracking-wide">
            Featured In the Press
          </h3>
        </div>
      </div>
      <div className="col-span-full mb-32 mt-9 flex overflow-hidden md:mb-20 md:mt-7">
        <ul className="flex w-full flex-wrap justify-center gap-x-16 gap-y-10 md:gap-x-10 md:gap-y-7">
          <li>
            <a href="https://www.bsidesgoa.in/">
              <img
                className="h-24 w-auto max-w-none sm:h-20"
                src={bsides}
                alt="Bsides Goa"
              />
            </a>
          </li>
          <li>
            <a href="https://aicgim.in/">
              <img
                className="h-24 w-auto max-w-none sm:h-20"
                src={aic}
                alt="AIC GIM"
              />
            </a>
          </li>
          <li>
            <a href="https://nsec.io/">
              <img
                className="h-24 w-auto max-w-none sm:h-20"
                src={nsec}
                alt="NorthSec"
              />
            </a>
          </li>
          <li>
            <a href="https://paruluniversity.ac.in/">
              <img
                className="h-24 w-auto max-w-none sm:h-20"
                src={parul}
                alt="Parul University"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Press;
