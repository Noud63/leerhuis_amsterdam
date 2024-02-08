import React from 'react'
import Hero from './Hero';
import Menu from './Menu';
import Header from "./Header.jsx";
import SidebarRight from "./SidebarRight.jsx";
import SidebarLeft from "./SidebarLeft.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

const Layout = () => {

  
  return (
    <div className="layout w-[100%] relative">
      <Header />
      <div className="w-full flex flex-row">
        <SidebarLeft />
        <Hero />
        <SidebarRight />
      </div>

      <Menu />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout
