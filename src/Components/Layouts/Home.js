import {useEffect} from 'react';
import Banner from './Includes/Home/Banner';
import Info from './Includes/Home/Info'
import Appstore from './Includes/Home/Appstore';

import {Animated} from "react-animated-css";


const Home = () => {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <>
      <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true} >
        <Banner/>
        <Info/>
        <Appstore/>
      </Animated>
    </>
  );
}

export default Home;
