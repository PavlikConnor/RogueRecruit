import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';
import Background from '../../../assets/Web_assets/img/photos/bg21.png'
import Profile from '../../../assets/Web_assets/img/avatars/athleteimg1.webp'
import Profile1 from '../../../assets/Web_assets/img/avatars/Profile1.jpeg'
import Profile2 from '../../../assets/Web_assets/img/avatars/Profile2.jpg'
import Device from '../../../assets/Web_assets/img/photos/appScreens.png'
import Logo from '../../../assets/Web_assets/img/logo.png';
import searchbackground from '../../../assets/Web_assets/img/illustrations/vectorbg2.jpg'
import axios from 'axios';
import Loader from '../../Loader';
import { useFormik } from 'formik';
import * as yup from 'yup'; 

var Spinner = require('react-spinkit');

let pages = []
// let profileImage=[]
let searchText

let totalPages;
const AthleteListing = () => {
   const [Isloading, setIsLoading] = useState(true);
   const [searchResult, setSearchresult] = useState("");
   const [show, setShow] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [inputValue, setInputValue] = useState({
      sports: '',
      Schooltype: '',
      city: '',
   })
   const [sports, setSports] = useState([]);
   const [alldata, setAlldata] = useState([]);
   // const [pages,setPages]=useState([])
   const [users, setUsers] = useState([]);
   const formik = useFormik({
      initialValues: {
         Search: '',
      }, validationSchema: yup.object({
         Search: yup.string().min(2, "Too Short!")
         .max(20, 'Name should not exceed 20 Characters')
         .required('* required field'),
      }),
      onSubmit: values => {
       
         setIsLoading(true)
         searchText= values.Search
         getResult()
      }
   }); 



   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const Show = (e) => {
      // setShow(e)
      e.preventDefault()
      // setValues(e.target.value)
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value })
      // console.log("inputtt----====", inputValue)
   }
   // let token=localStorage.getItem("token");
   // console.log("token",token)

   useEffect(() => {
      try {
         axios({
            method: 'GET',
            // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
            url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/profile/GetAthletes?pageNum=1&numPerPage=10',
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",
               // 'Authorization': `bearer ${token}`
            }
         }).then((response) => {
            setAlldata(response.data.result.athletes);
            // pages = response.data.result.pages

            // totalPages = pages.lastPage

            pages = (response.data.result.count) /10

             totalPages=(Math.round(pages))
            setIsLoading(false)
         });
      }
      catch (error) {
         console.log(error)
      }
   }, []);
   const handleSubmit = (e) => {
      e.preventDefault();
      const nid = new Date().getTime().toString();
      const newuser = { ...inputValue, id: nid };
      // console.log('new',newuser)
      setUsers([...users, newuser]);
   }

   const getResult = (e) => {
      try {
         axios({
            method: 'GET',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/profile/GetAthletes?pageNum=1&numPerPage=10&fullName=${searchText}`,
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",
            }
         }).then((response) => {
            // setAlldata(response.data.result.data);
            // console.log('searchresult==',response.data.result.athletes)
            setAlldata(response.data.result.athletes);
            setIsLoading(false)
         });
      }
      catch (error) {
         console.log(error)
      }
   }
{/* //    const checkSearchResult=(e)=>{
// setSearchresult(e.target.value)
// // let filteredsearch = alldata.filter(data => data.firstName == e);
// //       // setSearchresult('searchfilteres',filteredsearch)
// //          console.log('searchfilteres',filteredsearch)

// }
*/}

   const mystyle = {
      backgroundImage: `url(${searchbackground})`
   }
   const getPages = (selectedPage) => {
      setCurrentPage(selectedPage)
      let pageR = selectedPage
      try {
         axios({
            method: 'GET',
            // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/profile/GetAthletes?pageNum=${pageR}&numPerPage=10`,
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",
               // 'Authorization': `bearer ${token}`
            }
         }).then((response) => {
            console.log("pagesss", response)
            setAlldata(response.data.result.athletes);
            //   pages=response.data.result.pages
            // console.log('alldata pages==',pages)
            // totalPages=pages.lastPage
            // // alert(totalPages)
            // setIsLoading(false)
         });
      }
      catch (error) {
         console.log(error)
      }
   }
   if (Isloading) {
      return (
         <Loader />
      )
   }
   return (
      <>
         <Modal show={show} onHide={handleClose} animation={false} className="modal-lg">
            <Modal.Header className="py-0" >
               {/* // 
      <Modal.Title>Modal heading</Modal.Title>
      */}
               <Button className=
                  "btn-close z-index" variant="secondary" onClick={handleClose}>
               </Button>
            </Modal.Header>
            <Modal.Body className="overflow-hidden">
               <div className="row gx-lg-8 gx-xl-10   ">
                  <div className="col-lg-6">
                     <figure className="text-center modal-left-sec position-relative"><img src={Device} alt="" className="img-fluid w-100" /></figure>
                  </div>
                  <div className="col-lg-6 ">
                     <div className="text-end">
                        <img src={Logo} alt="" className="img-fluid logo_img mt-8" />
                     </div>
                     <h3 className="display-6 border-bottom-red position-relative text-black mt-16 mb-7">Rogue Recruit Mobile Application</h3>
                     <p className="mb-8">Download the app to view full profile and available stats of an athlete</p>
                     <div className="d-flex justify-content-center justify-content-lg-start mt-8" data-group="download">
                        <span><a className="btn background-red btn-primary btn-icon btn-icon-start rounded me-2 fs-15 "><i className="uil uil-apple"></i> App Store</a></span>
                        <span><a className="btn btn-secondary text-white btn-icon btn-icon-start rounded fs-15"><i className="uil uil-google-play"></i> Play Store</a></span>
                     </div>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
         <section className="wrapper image-wrapper bg-image  text-white bg-lightblue" style={mystyle}>
            <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center" >
            </div>
         </section>
         <section className="wrapper" >
            <div className="container p-10  pb-md-10  mt-n20 bg-white rounded" >
               <div className="row mb-6">
                  <div className="col-lg-4 mx-auto">
                     <form action="#">
                        <div className="form-floating input-group">
                           <input type="text" className="form-control border" placeholder="Search Athletes" id="analyze" value={searchResult} onChange={(e) => setSearchresult(e.target.value)}
                           {...formik.getFieldProps("Search")} />
                           <label htmlFor="analyze">Search Athletes</label>
                           <button className="btn btn-primary" type="button" onClick={formik.handleSubmit}>Search</button>
                        </div>
                        {formik.touched.Search && formik.errors.Search ? <p className='red'>{formik.errors.Search}</p> : null}
                     </form>
                  </div>
               </div>
               <div className="table-responsive">
                  <div className="job-list mb-10">
                     <h3 className="mb-4">All Athletes </h3>
                     {/*  // 
            <h3 className="">Search Results </h3>
            // 
            <h4 className="mb-0 fs-17">Results found for <span className="text-primary"> "Manvinder" </span></h4>
            // 
            <p className=" text-secondary fs-15">Showing 3 of 3 </p>
            */}
                     {alldata.map((content, id) => {
                        return (
                           <NavLink to={{ pathname: "/profile" }} state={{ Content: content }}
                              className="card mb-4 lift" key={id}>
                              <div className="card-body p-5">
                                 <span className="row justify-content-between align-items-center">
                                    <span className="col-md-3 col-lg-3 mb-2 mb-md-0 d-flex align-items-center text-body">
                                       <img className="avatar d-inline-block w-10 me-2" alt="" src={content.athleteNavigation.profilePicture == null ? "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" : content.athleteNavigation.profilePicture.uri} />
                                       <div className="row">
                                          <div>
                                             <b>{content.firstName}</b> <b>{content.lastName}</b>
                                          </div>
                                          <div><span>{content.gender}</span>,<span> {content.heightInches}Inc.</span>
                                             <span> {content.weightPounds}</span>
                                          </div>
                                       </div>
                                    </span>
                                    {/* // 
                  <span className="col-5 col-md-3 col-lg-3 text-body align-items-center 2">
                     // 
                     <div className="row">
                        //   
                        <div className="col-md-6">
                           //     <label ><b>School Type</b></label>
                           //     
                           <div >{content.schoolType}</div>
                           //   
                        </div>
                        //   
                        <div className="col-md-6">
                           //     <label ><b>Current School</b></label>
                           //     
                           <div >{content.currentSchool}</div>
                           //   
                        </div>
                        // 
                     </div>
                     // 
                  </span>
                  */}
                                    <span className="col-9 col-md-6 col-lg-4 text-body align-items-center">
                                       <div className="row">
                                          <div className="col-md-6">
                                             <label><b>City</b></label>
                                             <div><i className="uil uil-location-point"></i>  {content.city}</div>
                                          </div>
                                          <div className="col-md-6">
                                             <label><b>State</b></label>
                                             <div>  {content.state}</div>
                                          </div>
                                       </div>
                                    </span>
                                    <span className="col-9 col-md-6 col-lg-4 text-body align-items-center">
                                       <div className="row">
                                          <div className="col-md-4">
                                             <label><b>Zip Code</b></label>
                                             <div>  {content.zipCode}</div>
                                          </div>
                                          <div className="col-md-5">
                                             <label><b>Phone Number</b></label>
                                             <div>  {content.phoneNumber}</div>
                                          </div>
                                          {/*// 
                        <div className="col-md-3">
                           //   <label><b>Year</b></label>
                           //   
                           <div>  {content.graduationYear}</div>
                           // 
                        </div>
                        */}
                                       </div>
                                    </span>
                                    <span className="d-none d-lg-block col-1 text-center text-body"><i className="uil uil-angle-right-b"></i></span>
                                 </span>
                              </div>
                           </NavLink>)
                     })
                     }
                     {/* // 
            <a href="#" className="card mb-4 lift" onClick={handleShow}>
               //   
               <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                     //   
                     <span className="col-md-3 mb-2 mb-md-0 d-flex align-items-center text-body">
                        //   <img className="avatar d-inline-block w-10 me-2" alt="" src={Profile}/>
                        //     
                        <div className="row">
                           //     <b>Manvinder Singh</b>
                           //     
                           <div>Male, 6ft. 2in.</div>
                           //     
                        </div>
                        //     
                     </span>
                     <span className="col-5 col-md-3 text-body d-flex align-items-center">
                        //     
                        <div className="row">
                           //     <label >School</label>
                           //     
                           <div >University of Houston–Clear Lake</div>
                           //     
                        </div>
                        //     
                     </span>
                     <span className="col-9 col-md-6 col-lg-5 text-body d-flex align-items-center">
                        //     
                        <div className="row">
                           //     <label >Loation</label>
                           //     
                           <div><i className="uil uil-location-point"></i> 2700 Bay Area Blvd, Houston, TX 77058, United States</div>
                           //     
                        </div>
                        //     
                     </span>
                     //     <span className="d-none d-lg-block col-1 text-center text-body"><i className="uil uil-angle-right-b"></i></span>
                  </span>
               </div>
               // 
            </a>
            // 
            <a href="#" className="card mb-4 lift" onClick={handleShow}>
               //   
               <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                     //   
                     <span className="col-md-3 mb-2 mb-md-0 d-flex align-items-center text-body">
                        //   <img className="avatar d-inline-block w-10 me-2" alt="" src={Profile1}/>
                        //     
                        <div className="row">
                           //     <b>Alex wade</b>
                           //     
                           <div>Male, 6ft. 1in.</div>
                           //     
                        </div>
                        //     
                     </span>
                     <span className="col-5 col-md-3 text-body d-flex align-items-center">
                        //     
                        <div className="row">
                           //     <label >School</label>
                           //     
                           <div >University of Houston</div>
                           //     
                        </div>
                        //     
                     </span>
                     <span className="col-9 col-md-6 col-lg-5 text-body d-flex align-items-center">
                        //     
                        <div className="row">
                           //     <label >Loation</label>
                           //     
                           <div><i className="uil uil-location-point"></i>  4800 Calhoun Rd, Houston, TX 77004, United States</div>
                           //     
                        </div>
                        //     
                     </span>
                     //     <span className="d-none d-lg-block col-1 text-center text-body"><i className="uil uil-angle-right-b"></i></span>
                  </span>
               </div>
               // 
            </a>
            // 
            <a href="#" className="card mb-4 lift" onClick={handleShow}>
               //   
               <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                     //   
                     <span className="col-md-3 mb-2 mb-md-0 d-flex align-items-center text-body">
                        //   <img className="avatar d-inline-block w-10 me-2" alt="" src={Profile2}/>
                        //     
                        <div className="row">
                           //     <b>John A. Brown</b>
                           //     
                           <div>Male, 5ft. 10in.</div>
                           //     
                        </div>
                        //     
                     </span>
                     <span className="col-5 col-md-3 text-body d-flex align-items-center">
                        //     
                        <div className="row">
                           //     <label >School</label>
                           //     
                           <div >University of Houston–Downtown</div>
                           //     
                        </div>
                        //     
                     </span>
                     <span className="col-9 col-md-6 col-lg-5 text-body d-flex align-items-center">
                        //     
                        <div className="row">
                           //     <label >Loation</label>
                           //     
                           <div><i className="uil uil-location-point"></i>  1 Main St, Houston, TX 77002, United States</div>
                           //     
                        </div>
                        //     
                     </span>
                     //     <span className="d-none d-lg-block col-1 text-center text-body"><i className="uil uil-angle-right-b"></i></span>
                  </span>
               </div>
               // 
            </a>
            */}
                  </div>
               </div>
               <div className="col-md-4 mx-auto">
                  <Pagination
                     {...bootstrap5PaginationPreset}
                     current={currentPage}
                     total={totalPages}
                     onPageChange={(newPage: number) =>
                        getPages(newPage)} />
               </div>
            </div>
         </section>
      </>
   );
}
export default AthleteListing;
