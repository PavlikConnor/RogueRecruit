import React, { useState, useEffect } from 'react';

// import './assets/Web_assets/css/style.css';
// import './assets/css/fonts/thicccboi.css';
import './App.css';

import HomeLayout from './Components/Layouts/Home';
import Contact from './Components/Home/Pages/Contact';
import About from './Components/Home/Pages/About';
import Header from './Components/Layouts/Includes/Home/Header';
import Footer from './Components/Layouts/Includes/Home/Footer';
import Privacy from './Components/Home/Pages/Privacy';
import Profile from './Components/Home/Athlete/Profile';
import AthleteListing from './Components/Home/Athlete/AthleteListing';
import   'react-animated-js';
import { Routes, Route,BrowserRouter } from "react-router-dom";

import { Outlet } from 'react-router-dom'




function Public() {
 {/*  // const [refresh, setRefresh] = useState(false);


  // useEffect(()=>{
  //   setRefresh(true)
  //   window.location.reload()
  // },[])
*/}
 // require("./assets/Web_assets/css/style.css");
 require('./assets/Web_assets/css/fonts/thicccboi.css');
 require('./assets/Web_assets/css/plugins.css');

// const [load, setLoad] = useState(false);

//   window.onload = function pageLoad() {
//       if (load) {
//         window.location.reload(true);
//         setLoad(false);
//       }
//     };
  return (
    <>
    <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Public;
