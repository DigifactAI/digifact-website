import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import illustration from "../../assets/images/hero-image-illustration.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Deepfakes", "Identity Fraud", "AI Generated Content"],
      backDelay: 700,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      typeSpeed: 50,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-wrapper bg-[#75baff] block relative overflow-hidden m-0">
      <div className="hero-backdrop w-full block absolute top-0 left-0 pointer-events-none select-none opacity-1">
        <div className="bottom-shadow block w-full absolute bottom-0 left-0"></div>
      </div>
      <div className="hero-content-wrapper w-4/5 m-auto block relative">
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[640px]:grid-cols-1 gap-1 py-10">
          <div className="title-container block relative py-10 w-full">
            <h1 className="text-white text-5xl">
              Detect <br />
              <span id="title-header" ref={el}></span>
            </h1>
            <h2 className="text-white">
              Our cutting-edge AI deepfake detection platform helps enterprises
              and governments detect AI-generated content and identity at scale.
            </h2>
            <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-offset-2 focus:ring-gray-800 rounded">
              <p className="text-xl font-medium leading-5">Request a Demo</p>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="block sm:hidden md:block max-[640px]:hidden">
            <img
              src={illustration}
              alt=""
              className="items-center justify-center py-16"
            />
          </div>
        </div>
      </div>
      <div className="hero-bottom-slant bg-white overflow-hidden block absolute left-0"></div>
    </div>
  );
};

export default Hero;
