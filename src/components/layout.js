import * as React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Seo from "../components/seo";

const Layout = ({ children }) => {
  return (
    <>
      <Seo title="Home" />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
