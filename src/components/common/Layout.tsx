import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
