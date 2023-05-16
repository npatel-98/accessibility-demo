import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css";
import {useLocation} from "react-router-dom";

const Layout = ({children}) => {
  const SkipToContent = (
    <div id="skip-to-content" className="relative" tabIndex={-1}>
      <a href="#main-content" className="relative whitespace-nowrap text-black text-sm h-[33px] visually-hidden">
        Skip to Content
      </a>
    </div>
  );
  const location = useLocation();
  let pageTitle = "";
  if (location.pathname == "/") {
    pageTitle = "homepage";
  } else {
    pageTitle = location.pathname;
  }
  return (
    <div>
      {SkipToContent}
      <Header />
      <h1 className="sr-only">{pageTitle}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
