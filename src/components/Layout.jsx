import React from 'react'
import Hero from './Hero';
import Menu from './Menu';
import Header from "./Header.jsx";
import SidebarRight from "./SidebarRight.jsx";
import SidebarLeft from "./SidebarLeft.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-[100%] h-auto">
      <Header />
      <SidebarRight />
      <SidebarLeft />
      <Hero />
      
      <Menu />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout
