import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css";

const Layout = ({ pageName, children}) => {

  const SkipToContent = (
    <div id="skip-to-content" className="relative" tabIndex={-1}>
      <a href="#main-content" className="relative whitespace-nowrap text-black text-sm h-[33px] visually-hidden">
        Skip to Content
      </a>
    </div>
  );

  return (
    <div>
      {SkipToContent}
      <Header />
      <h1 className="sr-only">{pageName}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
