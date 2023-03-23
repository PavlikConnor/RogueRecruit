import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import Aboutimg1 from '../../../assets/Web_assets/img/avatars/te1.jpg'
import Aboutimg2 from '../../../assets/Web_assets/img/avatars/te3.jpg'
import Aboutimg3 from '../../../assets/Web_assets/img/avatars/te4.jpg'
import Aboutimg4 from '../../../assets/Web_assets/img/avatars/te5.jpg'
import Aboutheadicon from '../../../assets/Web_assets/img/icons/lineal/team.svg'
import Columnbg from '../../../assets/Web_assets/img/illustrations/bg-aboutus__.jpg'
import Aboutbackground from '../../../assets/Web_assets/img/illustrations/vectorbg2.jpg'
import {Animated} from "react-animated-css";

const About = () => {
  
  const mystyle = {
  backgroundImage:`url(${Aboutbackground})`
  
}

const mystyle2 = {
  backgroundImage:`url(${Columnbg})`
  
}


useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
    <section className="wrapper image-wrapper bg-image  text-white bg-lightblue" style={mystyle}>
      <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center" >
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-1 mb-3 text-black">About</h1>
            <nav className="d-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb text-black">
                <li className="breadcrumb-item"><NavLink to='/' className='hover_color'>Home</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="wrapper bg-white angled upper-end">
      <div className="container pb-11" >
        <div className="row"> 
          <div className="col-xl-10 mx-auto mt-n19 bg-white rounded box-shadow px-0">
          <div className="container py-10 about_bg" style={mystyle2}>
          <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
            <div className="col-lg-12 mt-lg-2">
              <h3 className="display-5 mb-3 fs-29">
              <span className="fs-23 text-primary  text-center">Empower your athletic career with the trusted solutions of Rogue Recruit. </span>
              <br /> 
              Trusted by athletes, coaches, colleges, and universities, we are dedicated to making the recruitment process easier for all aspiring student athletes. </h3>
              <p className="lead fs-lg mb-0 ">Transform your athletic journey with Rogue. As leaders in innovation, 
                we deliver dynamic new solutions to assist athletes and coaches at all 
                levels. Our commitment to collaborating with players and coaches 
                ensures we tackle real problems and simplify the recruitment process. 
                Discover the right team, contribute to a school's success, and reach 
                your full potential with Rogue.</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
      
      <section className="bg-white">
        <div className="position-relative container py-14 py-md-4">
          <div className="row mb-3">
            <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
              <img src={Aboutheadicon} className=" icon-svg icon-svg-md mb-4" alt="" />
              <h2 className="display-4 mb-3 px-lg-14">Rogue Recruit Founders</h2>
            </div>
          </div>
          <div className="position-relative">
          <div className="swiper-container dots-closer mb-6" data-margin="0" data-dots="true" data-items-xxl="4" data-items-xl="3" data-items-lg="3" data-items-md="2" data-items-xs="1">
            <div className="swiper">
              <div className="swiper-wrapper row mx-0">
                <div className="col-md-6">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src={Aboutimg1}  alt="" />
                        <h4 className=" d-inline-block ms-3 fs-28 align-middle">Robert <br/>
                        Gill</h4>
                        <p className="mb-2">Unlock your athletic potential with the guidance of Robert at Rogue. With a 
                          multi-sport background in high school and a successful college football 
                          career, Robert brings a wealth of experience to the table. With over two 
                          decades delivering complex software solutions for industry giants, he knows 
                          how to bring value and simplify the often overwhelming recruitment process. 
                          Navigate the path to your future with confidence and the support of Robert 
                          and the team at Rogue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src={Aboutimg2} alt="" />
                        <h4 className="d-inline-block ms-3 fs-28 align-middle">Connor <br />Pavlik</h4>
                        <p className="mb-2">Get the competitive edge with Connor at the helm of Rogue. With a D1 
                          recruitment background and a wealth of experience delivering valuable 
                          software for corporate America, Connor brings a unique perspective and 
                          expertise to the complex world of athletic recruitment. Trust the recruiting 
                          process to the experts at Rogue and elevate your athletic career to new 
                          heights.</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src={Aboutimg3}  alt="" />
                        <h4 className=" d-inline-block ms-3 fs-28 align-middle">Zak <br/>Keck</h4>
                        <p className="mb-2">Unleash your athletic potential with Zak at the forefront of Rogue. With a 
                            passion for delivering cutting-edge tech solutions to complex problems, Zak 
                            is dedicated to helping athletes find the right fit at the right school. With 
                            experience working with some of the most innovative companies in the US, 
                            Zak brings a drive and determination to provide you with the tools you need 
                            to succeed. Embrace the future of athletic recruitment with Zak and the team
                            at Rogue.</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src={Aboutimg4} alt="" />
                        <h4 className=" d-inline-block ms-3 fs-28 align-middle">Tariro <br/>Chinwadzimba</h4>
                        <p className="mb-2">Take control of your athletic future with Tariro at the helm of Rogue. With a 
                          multi-sport background in high school and a wealth of experience in 
                          recruiting software, Tariro is a determined leader who knows the importance 
                          of starting the recruitment process early. His drive to streamline processes 
                          and his passion for seeing athletes succeed make him the perfect guide for 
                          your athletic journey. Join Tariro and the Rogue team on the path to success.</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      </Animated>
    </>
  );
}

export default About;
