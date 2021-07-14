import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <NavigationBar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
