import React from "react";

const Contact = () => {
  return (
    <div className="w-full contact-us-container">
      <div className="w-4/5 m-auto py-12 grid grid-cols-2 max-[640px]:grid-cols-1 gap-4">
        <div className="flex flex-col md:items-end">
          <h1 className="text-4xl mt-10 text-right mr-6 max-[640px]:text-center">
            Have questions?
          </h1>
          <h3 className="w-3/4 text-xl mt-10 text-right mr-6 max-[640px]:w-full max-[640px]:text-center max-[640px]:mb-6">
            Fill out the form or send us an email at
            <a
              href="mailto:example@digifact.com"
              className="font-normal slanted-underline text-[#294cb8]"
            >
              <span>example@digifact.com.</span>
            </a>
          </h3>
        </div>
        <div className="border py-8 px-10 rounded-sm shadow bg-white flex flex-col gap-4">
          <div className="flex flex-row gap-4 justify-between">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Name*
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                  placeholder="Joe Blake"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Company*
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                  placeholder="DigiFact"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Work Mail*
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                placeholder="joe.blake@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="info"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              How can we help you?
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <textarea
                name="info"
                id="info"
                className="block w-full h-16 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
              ></textarea>
            </div>
          </div>

          <div>
            <label
              htmlFor="heard_about_us"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              How did you hear about us (Products)?
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="heard_about_us"
                id="heard_about_us"
                className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                placeholder="Conference, Google Search, Linkedin"
              />
            </div>
          </div>

          <div>
            <span className="block text-base font-medium leading-6 text-gray-900">
              By clicking submit, you agree to the
              <a
                href="#privacy-policy"
                className="focus-within:shadow-lg font-normal text-base text-[#294cb8]"
              >
                &nbsp;Privacy Policy
              </a>
            </span>
          </div>

          <div>
            <button className="w-full lg:w-48 h-10 px-4 rounded bg-[#294cb8] text-white text-center hover:bg-gray-700 focus:ring-2 outline-none focus:ring-offset-2 focus:ring-gray-800">
              <p className="text-lg font-normal leading-5">Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
