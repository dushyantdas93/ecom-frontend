import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
 import { ToastContainer} from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div className="h-screen ">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="h-[90%]">
        <ToastContainer />
        {children}</main>
      {/* <h1>fdsf</h1> */}
      <Footer />
    </div>
  );
};


Layout.defaultProps = {
  title: "ecommerce-2024 shop now",
  description: "mern stack project",
  keywords: 'html tailwind react mongo node '
  ,author:"dushyant"
}
export default Layout;
