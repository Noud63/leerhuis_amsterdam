import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import Header from "./components/Header.jsx";
import SidebarRight from "./components/SidebarRight.jsx";
import SidebarLeft from "./components/SidebarLeft.jsx";
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <Header />
      <SidebarRight />
      <SidebarLeft />
    </Layout>
    <Footer />
    <App />
  </React.StrictMode>
);
