import React, { useState, useEffect } from 'react';
// import Partnerimg1 from '../../../assets/Web_assets/img/brands/z1.png'
// import Profileimg from '../../../assets/Web_assets/img/photos/about5.jpg'
// import Infobg from '../../../assets/Web_assets/img/photos/bg3.jpg'
import axios from 'axios';
import ProfileImg from '../../../assets/Web_assets/img/avatars/athleteimg1.webp';
import Profiledetailright from './ProfileDetail';
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Profilebackground from '../../../assets/Web_assets/img/illustrations/vectorbg2.jpg'
import AthleteMale from '../../../assets/Web_assets/img/photos/athleteMale.jpg'
import AthleteFemale from '../../../assets/Web_assets/img/photos/athleteFemale.jpg'
import Loader from '../../Loader';



var Spinner = require('react-spinkit');

const Profile = () => {
   const [Isloading, setIsLoading] = useState(true);
   // const [alldata, setAlldata] = useState([]);
   const [mediadata, setMediadata] = useState([]);
   const [height, setHeight] = useState();
   const profilestyle = {
      backgroundImage: `url(${Profilebackground})`
   }
   const location = useLocation();
   const { state } = location;
  
   // useEffect(() => {
   //    setTimeout(() => {
   //       setIsLoading(false);
   //    }, 2000);
   // }, []);


   useEffect(() => {
      try {
         axios({
            method: 'GET',
            // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/athleteLink/GetLinks?athleteId=${state.Content.athleteId}&seasonId=0`,
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",

            }
         }).then((response) => {
            // console.log("responbse for detail" ,response.data)
            setMediadata(response.data.result);

            // let feet = Math.floor(response.data.result.heightInches / 12); 
               
             // console.log("Media detail" ,response.data.result)
            
            setIsLoading(false)
         });
      }
      catch (error) {
         console.log(error)
      }
   }, []);

   const heightinfeet =(inches)=>{
      let feetFromInches = Math.floor(inches / 12)
      let inchesRemainder = inches % 12; 
      let result = feetFromInches + "'" + inchesRemainder + "\"";
      // setHeight(result)
      return result
      // console.log("inchessss==222",result)
   }


   // if (Isloading) {
   //    return (
         
   //       <Loader />

   //    )
   // }
   return (
      <>
         <section className="wrapper image-wrapper bg-image text-white " style={profilestyle}>
            <div className="container pt-10 pb-15 pt-sm-15 pt-md-20 pb-md-21 text-center">
    
            </div>
         </section>
         { Isloading ? <Loader /> :
         <section className="wrapper detail_sec">
            <div className="container mt-0 mt-sm-n10 pb-14 pb-md-16 mt-md-n20">
               <div className="row ">
                  <div className=" col-lg-4 ">
                     <figure className="rounded">
                     <img className="avatar d-inline-block me-2" alt="" src={
                                state.Content.athleteNavigation.profilePicture == null 
                                  ?  
                                   (state.Content.gender=="M" || state.Content.gender =="O"  ? `${AthleteMale}` :`${AthleteFemale}`
                                   )
                                  :
                                  state.Content.athleteNavigation.profilePicture.uri
                               } />

                     
                     </figure>
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
                        <div className="col-md-12 mb-4 mt-2">
                           <h4 className="display-5 mb-1">{state.Content.firstName} {state.Content.lastName}</h4>
                        </div>
                       
                        
                        <div className="col-6 col-sm-4 col-md-4 mb-2">
                           <p className="fs-13 mb-0">Grad Year</p>
                           <h4 className="fs-16 mb-1">{state.Content.graduationYear}</h4>
                        </div>
                        <div className="col-6 col-sm-5 col-md-5 mb-2">
                           <p className="fs-13 mb-0">School Type</p>
                           <h4 className="fs-16 mb-1">{state.Content.schoolType =="H" ? "High School":state.Content.schoolType =="J" ? "Junior School":"Other"}</h4>
                        </div>
                        <div className="col-6 col-sm-3 col-md-3 mb-2">
                           <p className="fs-13 mb-0">Zip</p>
                           <h4 className="fs-16 mb-1">{state.Content.zipCode}</h4>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 mb-2">
                           <p className="fs-13 mb-0">Gender</p>
                           <h4 className="fs-16 mb-1">{state.Content.gender =="F"?"Female":state.Content.gender =="M"?"Male":"Other"}</h4>
                        </div>
                        <div className="col-6 col-sm-5 col-md-5 mb-2">
                           <p className="fs-13 mb-0">Height</p>
                           <h4 className="fs-16 mb-1">{heightinfeet(state.Content.heightInches)}</h4>
                        </div>
                        <div className="col-6 col-sm-3 col-md-3 mb-2">
                           <p className="fs-13 mb-0">Weight</p>
                           <h4 className="fs-16 mb-1">{state.Content.weightPounds} lbs</h4>
                        </div>
                        
                     </div>
                     <Accordion className="media_accordion" defaultActiveKey='0'>
                       <Accordion.Item eventKey="0" >
                         <Accordion.Header className="text-primary bg-transparent media_header p-0 mt-4">
                           <span className="fs-22">Media Links</span>
                            <i className="uil uil-angle-right fs-22"></i>
                         </Accordion.Header>
                        
                         <Accordion.Body className="p-0 border-none show">
                         {mediadata.length ==0  ?
                           <h2 className="text-center fs-18 mt-4 fw-normal">No media links available</h2> :
                           <div className="card-wrapper">
                         {mediadata.map((data,id)=>{
                           return(
                              <div className="card mb-2 mt-4" key={id}>
                                 <div className="card-body py-2 px-2">
                                    <div className="row">
                                       <div className='col-md-10'>
                                          <div className="fs-16 mb-0 "><b>{data.text}</b></div>
                                          <p className='mb-0 fs-12'>{data.date.split('T')[0]}</p>
                                       </div>
                                       <div className='col-md-2'>
                                          <a  href={data.url} target="_blank">
                                          <i className="uil uil-eye text-primary"></i></a>
                                     
                                      </div>
                                    </div>
                                 </div>
                              </div>
                              )
                         })

                         }
                         </div>
                           }


                         </Accordion.Body>
                       </Accordion.Item>
                     </Accordion>
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
      }
      </>
   );
}
export default Profile;
