import React from "react";
import "./DefaultLayout.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const DefaultLayout = ({ children, hideHeaderFooter, titlu}) => (
  <div className="default-layout">
    {!hideHeaderFooter && <Header titlu={titlu} />}
    <div className="homepage-container">
      {children}
    </div>
    {!hideHeaderFooter && <Footer />}
  </div>
);

export default DefaultLayout;
