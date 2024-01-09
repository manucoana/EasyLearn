import React from "react";
import "./DefaultLayout.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sfera from "./decor/Sfera";

const DefaultLayout = ({ children, hideHeaderFooter }) => (
  <div className="default-layout">
    {!hideHeaderFooter && <Header />}
    <div className="homepage-container">
      {children}
      </div>
    {!hideHeaderFooter && <Footer />}
  </div>
);

export default DefaultLayout;
