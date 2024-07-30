import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Press from "../components/press/press";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import "../assets/styles/style.scss";

const IndexPage = () => (
  <Layout>
    <main className="page-container">
      <Hero />
      <Press />
      <About />
      <Contact />
    </main>
  </Layout>
);

export default IndexPage;
