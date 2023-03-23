
// import './assets/Web_assets/css/style.css';
// import './assets/css/fonts/thicccboi.css';

import Header from './Components/Layouts/Includes/Home/Header';
import Footer from './Components/Layouts/Includes/Home/Footer';
import   'react-animated-js';

import { Outlet } from 'react-router-dom'




function Public() {

 // require("./assets/Web_assets/css/style.css");
 require('./assets/Web_assets/css/fonts/thicccboi.css');
 // require('./assets/Web_assets/css/plugins.css');

  return (
    <>
    <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Public;
