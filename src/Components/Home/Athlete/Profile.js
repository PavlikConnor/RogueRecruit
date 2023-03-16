import React, { useState, useEffect } from 'react';
// import Partnerimg1 from '../../../assets/Web_assets/img/brands/z1.png'
// import Profileimg from '../../../assets/Web_assets/img/photos/about5.jpg'
// import Infobg from '../../../assets/Web_assets/img/photos/bg3.jpg'
import axios from 'axios';
import ProfileImg from '../../../assets/Web_assets/img/avatars/athleteimg1.webp';
import Profiledetailright from './ProfileDetail';
import { useLocation } from "react-router-dom";
import Profilebackground from '../../../assets/Web_assets/img/illustrations/vectorbg2.jpg'
import Loader from '../../Loader';



var Spinner = require('react-spinkit');

const Profile = () => {
   const [Isloading, setIsLoading] = useState(true);
   const [alldata, setAlldata] = useState([]);
   const profilestyle = {
      backgroundImage: `url(${Profilebackground})`
   }
   const location = useLocation();
   const { state } = location;
  
   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 2000);
   }, []);
   if (Isloading) {
      return (
         
         <Loader />

      )
   }
   return (
      <>
         <section className="wrapper image-wrapper bg-image text-white " style={profilestyle}>
            <div className="container pt-10 pb-10 pt-md-20  text-center">
               {/*
      <div className="row">
         <div className="col-md-10 col-xl-8 mx-auto">
            // 
            <div className="post-header">
               //   
               <h1 className="display-1 mb-5">Multimedia Artist & Animator</h1>
               //   
               <ul className="post-meta fs-17 mb-5">
                  //     
                  <li><i className="uil uil-clock"></i> Full time</li>
                  //     
                  <li><i className="uil uil-location-arrow"></i> Manchester, UK</li>
                  //     
                  <li><i className="uil uil-building"></i> Design Department</li>
                  //   
               </ul>
               // 
            </div>
         </div>
      </div>
      */}
            </div>
         </section>
         <section className="wrapper bg-light ">
            <div className="container pb-14 pb-md-16 mt-n10">
               <div className="row ">
                  <div className=" col-lg-4 ">
                     <figure className="rounded"><img src={state.Content.athleteNavigation.profilePicture == null ? "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" : state.Content.athleteNavigation.profilePicture.uri} alt="" /></figure>
                     {/*// 
            <div className="row">
               //   
               <div className="col-xl-10 mx-auto">
                  //     
                  <div className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n30p border-radius-lg-top" style={mystyle} >
                     //       
                     <div className="card-body px-9">
                        //       
                        <h2 className="display-3 mb-3 text-white">{state.Content.firstName}</h2>
                        //         
                        <div className="row align-items-center counter-wrapper gy-4">
                           //           
                           <div className="col-6 col-lg-6">
                              //             
                              <p>Gender</p>
                              //             
                              <h3 className=" text-white">{state.Content.gender}</h3>
                              //           
                           </div>
                           //           
                           <div className="col-6 col-lg-6">
                              //           
                              <p>Year</p>
                              //             
                              <h3 className=" text-white">{state.Content.graduationYear}</h3>
                              //           
                           </div>
                           //         
                        </div>
                        //       
                     </div>
                     //     
                  </div>
                  //   
               </div>
               // 
            </div>
            */}
                     <div className="row ">
                        <div className="col-md-12 mb-4 mt-5">
                           <h4 className="display-3 mb-1">{state.Content.firstName}{state.Content.lastName}</h4>
                        </div>
                        <div className="col-md-4 mb-2">
                           <p className="fs-15 mb-0">Name</p>
                           <h4 className="fs-16 mb-1">{state.Content.firstName}</h4>
                        </div>
                        <div className="col-md-4 mb-2">
                           <p className="fs-15 mb-0">Gender</p>
                           <h4 className="fs-16 mb-1">{state.Content.gender}</h4>
                        </div>
                        <div className="col-md-4 mb-2">
                           <p className="fs-15 mb-0">Year</p>
                           <h4 className="fs-16 mb-1">{state.Content.graduationYear}</h4>
                        </div>
                        <div className="col-md-4 mb-2">
                           <p className="fs-15 mb-0">Height/Weight</p>
                           <h4 className="fs-16 mb-1">{state.Content.heightInches}Inc.<span> {state.Content.weightPounds}</span></h4>
                        </div>
                        <div className="col-md-4 mb-2">
                           <p className="fs-15 mb-0">School Type</p>
                           <h4 className="fs-16 mb-1">{state.Content.schoolType}</h4>
                        </div>
                        <div className="col-md-4 mb-2">
                           <p className="fs-15 mb-0">Zip</p>
                           <h4 className="fs-16 mb-1">{state.Content.zipCode}</h4>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-8 mx-auto">
                     <div className="blog single">
                        <div className="card shadow-lg">
                           <div className="card-body">
                              <Profiledetailright />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
export default Profile;
