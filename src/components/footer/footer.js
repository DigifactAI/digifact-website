import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#05172B] text-white">
      <div className="w-4/5 m-auto py-8">
        <div className="w-full grid grid-cols-4 gap-4 max-[640px]:grid-cols-2">
          <div className="max-[640px]:mb-4">
            <h1 className="logo">DigiFact</h1>
            <ul className="flex gap-4">
              <li>
                <i className="fa-solid fa-envelope"></i>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
            </ul>
          </div>
          <div className="max-[640px]:mb-4">
            <h2 className="text-[#fff]/[0.6]">Solutions</h2>
            <ul className="space-y-2">
              <li>
                <a href="#data-extraction" className="font-normal text-base">
                  Data Extraction
                </a>
              </li>
              <li>
                <a href="#data-matching" className="font-normal text-base">
                  Data Matching
                </a>
              </li>
              <li>
                <a
                  href="#document-authenticity-checks"
                  className="font-normal text-base"
                >
                  Document Authenticity Checks
                </a>
              </li>
              <li>
                <a href="#liveness-detection" className="font-normal text-base">
                  Liveness Detection
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-[#fff]/[0.6]">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="font-normal text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#events" className="font-normal text-base">
                  Events
                </a>
              </li>
              <li>
                <a href="#labs" className="font-normal text-base">
                  Labs
                </a>
              </li>
              <li>
                <a href="#faq" className="font-normal text-base">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#whats-new" className="font-normal text-base">
                  What's new
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-[#fff]/[0.6]">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#product" className="font-normal text-base">
                  Product
                </a>
              </li>
              <li>
                <a href="#about" className="font-normal text-base">
                  About DigiFact
                </a>
              </li>
              <li>
                <a href="#careers" className="font-normal text-base">
                  <span className="careers-shining-animation">Careers</span>
                  <span className="text-xs absolute ml-2 bg-[#fff3cd] text-[#664d03] hiring-ribbon">
                    We're hiring
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" className="font-normal text-base">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t-2 border-gray-800 my-6 mt-10" />
        <div className="flex w-full gap-4 justify-between max-[640px]:flex-col max-[640px]:text-center">
          <span className="font-normal text-sm text-[#B6B0B0]">
            ©&nbsp;2024 DigiFact. All Rights Reserved. Made with&nbsp;
            <i className="fa-solid fa-heart text-[#ff0000]"></i>
            &nbsp;from India.
          </span>
          <a
            href="#privacy-policy"
            className="font-normal text-sm text-[#B6B0B0] mr-6 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#open-source-license"
            className="font-normal text-sm text-[#B6B0B0] mr-6 hover:underline"
          >
            Open Source License
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
