import Header from './Components/Layouts/Includes/Admin/Header';
import Footer from './Components/Layouts/Includes/Admin/footer';
import Sidebar from './Components/Layouts/Includes/Admin/Sidebar';
import $ from 'jquery';
import './App.css';
import   'react-animated-js';
import { Routes, Route,BrowserRouter } from "react-router-dom";

import { Outlet } from 'react-router-dom'

function Admin() {

  // require("./assets/Admin_assets/css/admin-style.css");
  // require("./assets/Admin_assets/css/admin-custom-style.css");

  
  return (
    <>
    <Header/>
      <Outlet />
     
      <Footer/>
    </>
  );
}

export default Admin;
