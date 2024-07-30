import * as React from "react";
import Layout from "../components/layout";
import heroBg from "../assets/images/hero-404.png";

const NotFoundPage = () => (
  <Layout>
    <div className="w-full h-full error-page-hero-container">
      <div className="w-11/12 m-auto py-8 grid grid-cols-2 max-[640px]:grid-cols-1">
        <div className="flex flex-col justify-center p-16">
          <h1 className="text-4xl py-2">It's empty here</h1>
          <h3 className="py-10 text-xl">
            Looks like this page can't be found. Page is either moved or
            renamed.
          </h3>
          <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-offset-2 focus:ring-gray-800 rounded">
            <p className="text-xl font-medium leading-5">Back to Home</p>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={heroBg} alt="Astronaut wondering in space" width="55%" />
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
