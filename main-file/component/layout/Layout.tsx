"use client";
import React, { ReactNode } from "react";
import NavbarSection from "../navbar/NavbarSection";
import FooterSection from "../footer/FooterSection";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import NewNavbar from "../../component/navbar/NewNavbar"
type Props = {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className='main-layout'>
      {/* <NavbarSection style="" logo="/images/logo.png" /> */}
      <NewNavbar />
      {children}
      <ScrollToTopButton style="" />
      <FooterSection />
    </div>
  );
};

export default Layout;
