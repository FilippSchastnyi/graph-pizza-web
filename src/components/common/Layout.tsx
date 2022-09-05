import React, {ReactNode} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({children}: {children: ReactNode}): JSX.Element => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
