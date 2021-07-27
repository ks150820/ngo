import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import ContactLayout from "../layout/contact/ContactLayout";

const Layout = (props) => {
  return (
    <div>
      <NavigationBar />
      <div>{props.children}</div>
      <div id="contact">
        <ContactLayout />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
