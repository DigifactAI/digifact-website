import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useForm, ValidationError } from "@formspree/react";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  source: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().max(500, "Only 500 allowed"),
  source: Yup.string(),
});

const Contact = () => {
  const [state, handleSubmit] = useForm("mdknrzgb");

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    await handleSubmit(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="w-full contact-us-container" id="contact">
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
              <span>info@digifact.com.</span>
            </a>
          </h3>
        </div>
        <div className="border py-8 px-10 rounded-sm shadow bg-white flex flex-col gap-4">
          {state.succeeded && (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <div className="my-2 font-medium">Thank You! 😊</div>
              <span>
                Your message has been sent successfully. Our team will get back
                to you shortly!
              </span>
            </div>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  {isSubmitting ? (
                    <div className="space-y-4">
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>
                        </div>
                        <div className="w-1/2">
                          <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>
                        </div>
                      </div>
                      <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>
                      <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>
                      <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>
                      <div className="h-24 bg-gray-300 rounded-md animate-pulse"></div>
                      <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>

                      <div className="h-4 bg-gray-200 rounded-md animate-pulse w-3/4"></div>

                      <div className="h-10 bg-blue-300 rounded-md animate-pulse w-full lg:w-48"></div>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-row justify-between gap-4 mt-2 mb-4">
                        <div className="w-full">
                          <label
                            htmlFor="name"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Name <span className="text-red-700">*</span>
                          </label>
                          <div className="relative my-2 rounded-md shadow-sm">
                            <Field
                              type="text"
                              name="name"
                              id="name"
                              className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                              placeholder="Your Name"
                            />
                          </div>
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-700"
                          />
                          <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                            className="text-red-700"
                          />
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="company"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Company <span className="text-red-700">*</span>
                          </label>
                          <div className="relative my-2 rounded-md shadow-sm">
                            <Field
                              type="text"
                              name="company"
                              id="company"
                              className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                              placeholder="Company Name"
                            />
                          </div>
                          <ErrorMessage
                            name="company"
                            component="div"
                            className="text-red-700"
                          />
                          <ValidationError
                            prefix="Company"
                            field="company"
                            errors={state.errors}
                            className="text-red-700"
                          />
                        </div>
                      </div>

                      <div className="my-4">
                        <label
                          htmlFor="email"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Work Mail <span className="text-red-700">*</span>
                        </label>
                        <div className="relative my-2 rounded-md shadow-sm">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                            placeholder="Business Email"
                          />
                        </div>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-700"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-700"
                        />
                      </div>

                      <div className="my-4">
                        <label
                          htmlFor="phone"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Phone Number
                        </label>
                        <div className="relative my-2 rounded-md shadow-sm">
                          <Field
                            type="text"
                            name="phone"
                            id="phone"
                            className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                          />
                        </div>
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-700"
                        />
                        <ValidationError
                          prefix="Phone"
                          field="phone"
                          errors={state.errors}
                          className="text-red-700"
                        />
                      </div>

                      <div className="my-4">
                        <label
                          htmlFor="message"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          How can we help you?
                        </label>
                        <div className="relative my-2 rounded-md shadow-sm">
                          <Field
                            name="message"
                            id="message"
                            as="textarea"
                            rows="5"
                            className="block w-full h-16 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                          />
                        </div>
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-700"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-red-700"
                        />
                      </div>

                      <div className="my-4">
                        <label
                          htmlFor="source"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          How did you hear about us (Products)?
                        </label>
                        <div className="relative my-2 rounded-md shadow-sm">
                          <Field
                            type="text"
                            name="source"
                            id="source"
                            className="block w-full h-10 border-0 rounded sm:leading-6 text-lg py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 hover:ring-black focus:ring-offset-2 focus:ring-indigo-600 sm:text-base"
                            placeholder="Conference, Google Search, Linkedin"
                          />
                        </div>
                        <ErrorMessage
                          name="source"
                          component="div"
                          className="text-red-700"
                        />
                        <ValidationError
                          prefix="Source"
                          field="source"
                          errors={state.errors}
                          className="text-red-700"
                        />
                      </div>

                      <div className="my-4">
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
                        <button
                          className="w-full lg:w-48 h-10 px-4 rounded bg-[#294cb8] text-white text-center hover:bg-gray-700 focus:ring-2 outline-none focus:ring-offset-2 focus:ring-gray-800"
                          type="submit"
                        >
                          <p className="text-lg font-normal leading-5">
                            Submit
                          </p>
                        </button>
                      </div>
                    </>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
