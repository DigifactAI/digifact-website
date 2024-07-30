import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMenuCollapse, setShowMenuCollapse] = useState(false);
  const [showSolutionsCollapse, setShowSolutionsCollapse] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleMenuCollapse = () => {
    setShowMenuCollapse(!showMenuCollapse);
  };

  const toggleSolutionsCollapse = () => {
    setShowSolutionsCollapse(!showSolutionsCollapse);
  };

  return (
    <header className="z-20 sticky">
      <div className="static mx-auto w-11/12">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-x-[22px] xl:gap-x-8">
            <a
              aria-current="page"
              className="group transition-colors duration-200"
              href="./"
            >
              <span className="sr-only">DigiFact Logo</span>
              <div className="logo">DigiFact</div>
            </a>
            <ul className="flex [@media(max-width:1182px)]:hidden ml-4">
              <li>
                <a
                  href="#product"
                  className="flex items-center px-3.5 py-5 text-10 transition-colors duration-200 hover:text-blue xl:px-2.5 text-lg font-normal"
                >
                  <span>Product</span>
                </a>
              </li>
              <li>
                <button
                  className="flex items-center px-3.5 py-5 text-15 transition-colors duration-200 hover:text-blue xl:px-2.5 text-lg font-normal"
                  onClick={toggleSolutionsCollapse}
                  onMouseOver={() => {
                    setShowSolutionsCollapse(true);
                  }}
                  onFocus={() => {
                    setShowSolutionsCollapse(true);
                  }}
                  onMouseLeave={() => {
                    setShowSolutionsCollapse(false);
                  }}
                >
                  <span>Solutions</span>
                  <i className="fa-solid fa-chevron-down fa-xs pl-1"></i>
                </button>
                {showSolutionsCollapse && (
                  <div
                    className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-full border-t border-gray-4 bg-white shadow-dropdown"
                    onMouseOver={() => {
                      setShowSolutionsCollapse(true);
                    }}
                    onFocus={() => {
                      setShowSolutionsCollapse(true);
                    }}
                    onMouseLeave={() => {
                      setShowSolutionsCollapse(false);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="w-8/12 m-auto py-3">
                      <ul className="flex w-full flex-wrap justify-left gap-x-16 gap-y-10 md:gap-x-10 md:gap-y-7">
                        <li>Data Extraction</li>
                        <li>Data Matching</li>
                        <li>Document Authenticity Checks</li>
                        <li>Liveness Detection</li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#blog"
                  className="flex items-center px-3.5 py-5 text-10 transition-colors duration-200 hover:text-blue xl:px-2.5 text-lg font-normal"
                >
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center px-3.5 py-5 text-10 transition-colors duration-200 hover:text-blue xl:px-2.5 text-lg font-normal"
                >
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center px-3.5 py-5 text-10 transition-colors duration-200 hover:text-blue xl:px-2.5 text-lg font-normal"
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex items-center xl:pl-4 md:px-4 xs:flex-col xs:gap-y-4  [@media(max-width:1182px)]:hidden">
              <a
                className="group transition-colors duration-200 mr-6 inline-flex items-center justify-center gap-x-2 font-medium hover:text-blue xl:rounded-sm xl:hover:border-blue xs:mr-4 xs:w-full"
                href="#github"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-github fa-lg"></i>
                <span className="hidden">GitHub</span>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                className="group transition-colors duration-200 inline-flex items-center justify-center font-medium leading-none text-center whitespace-nowrap disabled:bg-gray-3 disabled:text-white disabled:pointer-events-none sm:w-full text-base px-4.5 py-[11px] rounded-sm text-black border border-black mr-4 !px-[17px] !text-15 xs:mr-0 hover:border-blue-600 hover:text-blue-600"
                href="#sign-in"
              >
                Sign In
              </a>
            </div>
            <button
              className="group relative h-8 w-6 print:!hidden hidden [@media(max-width:1182px)]:block"
              type="button"
              aria-label="Open menu"
              id="toggle-nav"
              onClick={toggleMenu}
            >
              {showMobileMenu ? (
                <>
                  <span className="absolute block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1 top-[15px] rotate-45"></span>
                  <span className="absolute top-[15px] block h-0.5 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1 invisible w-0 opacity-0"></span>
                  <span className="absolute block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1 bottom-[15px] -rotate-45"></span>
                </>
              ) : (
                <>
                  <span className="absolute block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1 top-[7px]"></span>
                  <span className="absolute top-[15px] block h-0.5 w-4 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1"></span>
                  <span className="absolute block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1 bottom-[7px]"></span>
                </>
              )}
            </button>
          </div>
        </nav>
      </div>
      <motion.nav
        className="absolute flex flex-col inset-x-0 top-30 z-80 h-screen w-full border-t border-gray-4 lg:flex lg:flex-col [@media(max-width:1182px)]:flex [@media(max-width:1182px)]:flex-col overflow-hidden bg-white"
        initial="hidden"
        animate={showMobileMenu ? "visible" : "hidden"}
        variants={{
          hidden: { x: "100%", display: "none" },
          visible: { x: 0, display: "block" },
        }}
        transition={{ type: "slide" }}
      >
        <ul className="flex-grow items-start divide-y divide-gray-5 overflow-y-auto overflow-x-hidden text-center">
          <li className="w-full">
            <a
              className="group transition-colors duration-200 block py-6 text-left leading-none hover:text-blue text-lg font-normal w-11/12 m-auto"
              href="#product"
            >
              Product
            </a>
          </li>
          <li className="w-full">
            <button
              type="button"
              className="group flex cursor-pointer items-center justify-between py-6 leading-none transition-colors duration-200 hover:text-gray-1 text-lg font-normal w-11/12 m-auto"
              onClick={toggleMenuCollapse}
            >
              <span
                className={`leading-none ${
                  showMenuCollapse ? "font-semibold" : ""
                }`}
              >
                Solutions
              </span>
              <i
                className={`fa-solid ${
                  showMenuCollapse ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </button>
            <motion.ul
              className="w-full text-left flex flex-col items-start overflow-y-auto overflow-x-hidden"
              initial="hidden"
              animate={showMenuCollapse ? "visible" : "hidden"}
              variants={{
                hidden: {
                  display: "none",
                  visibility: "hidden",
                  transition: {
                    staggerChildren: 0.17,
                    delayChildren: 0.2,
                  },
                },
                visible: {
                  display: "block",
                  visibility: "visible",
                  transition: {
                    staggerChildren: 0.17,
                    delayChildren: 0.2,
                  },
                },
              }}
              transition={{ type: "slide" }}
            >
              {showMenuCollapse && (
                <>
                  <li className="w-full border-b border-gray-5">
                    <a
                      href="#data-extraction"
                      className="group transition-colors duration-200 block py-4 text-left leading-none hover:text-blue text-lg font-normal w-11/12 m-auto"
                    >
                      Data Extraction
                    </a>
                  </li>
                  <li className="w-full border-b border-gray-5">
                    <a
                      href="#data-matching"
                      className="group transition-colors duration-200 block py-4 text-left leading-none hover:text-blue text-lg font-normal w-11/12 m-auto"
                    >
                      Data Matching
                    </a>
                  </li>
                  <li className="w-full border-b border-gray-5">
                    <a
                      href="#document-authenticity-checks"
                      className="group transition-colors duration-200 block py-4 text-left leading-none hover:text-blue text-lg font-normal w-11/12 m-auto"
                    >
                      Document Authenticity Checks
                    </a>
                  </li>
                  <li className="w-full border-b border-gray-5">
                    <a
                      href="#liveness-detection"
                      className="group transition-colors duration-200 block py-4 text-left leading-none hover:text-blue text-lg font-normal w-11/12 m-auto"
                    >
                      Liveness Detection
                    </a>
                  </li>
                </>
              )}
            </motion.ul>
          </li>
          <li className="w-full">
            <a
              className="group transition-colors duration-200 block py-6 text-left leading-none hover:text-blue text-lg font-normal w-11/12 m-auto"
              href="#product"
            >
              About us
            </a>
          </li>
        </ul>
        <div className="flex items-center xl:pl-4 md:px-4 xs:flex-col xs:gap-y-4 z-50 mt-auto px-6 py-4 shadow-inner bottom-0 w-full bg-white">
          <a
            className="group transition-colors duration-200 mr-6 inline-flex items-center justify-center gap-x-2 font-medium hover:text-blue xl:rounded-sm xl:hover:border-blue xs:mr-4 xs:w-full flex-1 rounded-none border-none"
            href="#github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github fa-lg"></i>
            <span className="inline">GitHub</span>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            className="group transition-colors duration-200 inline-flex items-center justify-center font-medium leading-none text-center whitespace-nowrap  disabled:bg-gray-3 disabled:text-white disabled:pointer-events-none sm:w-full text-base px-4.5 py-[11px] rounded-sm text-black border border-black hover:border-blue hover:text-blue mr-4 !px-[17px] !text-15 xs:mr-0 flex-1"
            href="#sign-in"
          >
            Sign In
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
