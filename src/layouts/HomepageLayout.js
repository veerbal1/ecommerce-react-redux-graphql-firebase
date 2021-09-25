import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomepageLayout = ({ children }) => {
  return (
    <div className="fullHeight">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
