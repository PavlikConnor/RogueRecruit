import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Web_assets/img/logo.png';
import axios from 'axios';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';
import DataTable from 'react-data-table-component';
import { confirm } from "react-confirm-box";
import Loader from '../../Loader';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
var Spinner = require('react-spinkit');
let token
let pages = []
let searchText
let totalPages;
const Admin = () => {
   let navigate = useNavigate();
   const [Isloading, setIsLoading] = useState(true);
   const [alldata, setAlldata] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [blockresponse, setBlockresponse] = useState('');
   const [searchResult, setSearchresult] = useState(""); 
   const formik = useFormik({
      initialValues: {
         Search: '',
      }, validationSchema: yup.object({
         Search: yup.string().min(2, "Too Short!").max(20, 'Name should not exceed 20 Characters')
         .required('* required field'),
      }),
      onSubmit: values => {
       
         setIsLoading(true)
         searchText= values.Search
       

         getResult()
      }
   }); 

   useEffect(() => {
      token = localStorage.getItem("token");
      if (token == null) {
         navigate("/login")
         window.location.reload();
      }
      else {
         try {
            axios({
               method: 'GET',
               url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/profile/GetAthletes?pageNum=1&numPerPage=10',
               headers: {
                  "Content-type": "application/json",
                  'Access-Control-Allow-Origins': '*',
                  "CORS": "Access-Control-Allow-Origin",
                  // 'Authorization': `bearer ${token}`
               }
            }).then((response) => {
               setAlldata(response.data.result.athletes);
               console.log('alldataaa----=== ---==', response.data.result.athletes)
               pages = (response.data.result.count) / 10
               totalPages = (Math.round(pages))
               setIsLoading(false)
               // console.log("filtereded==" ,response.data.result.data[0].athleteNavigation.blocked)
            });
         }
         catch (error) {
            console.log(error)
         }
      }
   }, []);



   const getPages = (selectedPage) => {
      setCurrentPage(selectedPage)
      let pageR = selectedPage
      try {
         axios({
            method: 'GET',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/profile/GetAthletes?pageNum=${pageR}&numPerPage=10`,
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",
               // 'Authorization': `bearer ${token}`
            }
         }).then((response) => {
            // console.log("pagesss", response)
            setAlldata(response.data.result.athletes);
         });
      }
      catch (error) {
         console.log(error)
      }
   }
   function dropdownshow() {
      var element = document.getElementById("show_dropdown");
      element.classList.toggle("show");
   }


   const getResult = (e) => {
      setAlldata([])

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
            setAlldata(response.data.result.athletes);
            console.log('searchresult==',alldata)

            setIsLoading(false)
         });
      }
      catch (error) {
         console.log(error)
      }
   }

   const getId = (userId) => {
      try {
         axios({
            method: 'POST',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/BlockUser?blockUser=${userId}&block=true`,
            // data:{ "blockUser"  : userId ,"block":true},
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",
               'Authorization': `bearer ${token}`
            }
         }).then((response) => {
            console.log("deactivate", response)
            setBlockresponse(response.data.message)
            changeTitle(userId)
         });
      }
      catch (error) {
         console.log(error)
      }
   }
   const activate = (userId) => {
      try {
         axios({
            method: 'POST',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/BlockUser?blockUser=${userId}&block=false`,
            // data:{ "blockUser"  : userId ,"block":true},
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",
               'Authorization': `bearer ${token}`
            }
         }).then((response) => {
            console.log("Activate", response)
            // alert(response.data.message)
            // setBlockresponse(response.data.message)
            changeTitleActivate(userId)
         });
      }
      catch (error) {
         console.log(error)
      }
   }
   const changeTitle = (id) => {
      setAlldata(
         alldata.map((item) => {
            if (item.athleteId === id) item.added = !item.added;
            item.act = false;
            return item;
         })
      );
   };
   const changeTitleActivate = (id) => {
      setAlldata(
         alldata.map((item) => {
            if (item.athleteId === id) item.act = !item.act;
            item.added = false
            return item;
         })
      );
   };
   const onClickActivate = async (id) => {
      const result = await confirm("Are you sure you want to activate this user?");
      if (result) {
         console.log("You click yes!");
         activate(id)
         return;
      }
      console.log("You click No!");
   };
   const onClickDeActivate = async (id) => {
      const result = await confirm("Are you sure you want to deactivate this user?");
      if (result) {
         console.log("You click yes!");
         getId(id)
         return;
      }
      console.log("You click No!");
   };
   const columns = [
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Name</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.firstName}</div>,
         sortable: true,
         reorder: true
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Gender</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.gender}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Height</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.heightInches}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Weight</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.weightPounds}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>City</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.city}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>State</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.state}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Zip Code</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.zipCode}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Phone Number</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.phoneNumber}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Status</div>,
         selector: row => <div style={{ "fontSize": "16px","padding":"15px 0" }}>{row.athleteNavigation.blocked == false ? <span className="bg-success text-white rounded-pill fs-12 p-2 mb-0 Wd_set d-inline-block text-center">Activated</span> : <span className="bg-danger text-white rounded-pill fs-12 p-2 mb-0 Wd_set d-inline-block text-center">Deactivated</span>}</div>,
         sortable: true,
      },
      {
         name: <div style={{ "fontSize": "16px","fontWeight":"bold" }}>Action</div>,
         sortable: true,
         button: true,
         selector: cell => (
            <div className="d-flex">
               {!cell.act ?
                  <a className="dropdown-item btn-style bg-green mb-2 text-white me-2 rounded-circle p-2"
                     onClick={() => onClickActivate(cell.athleteId)}>
                     <i className=" la la-check"></i>
                  </a>
                  : (cell.added == false || cell.act == true) ?
                     <a className="dropdown-item btn-style bg-green mb-2 text-white me-2 rounded-circle p-2" >
                        <i className="la la-check-circle-o"></i>
                     </a>
                     :
                     <a className="dropdown-item btn-style bg-green mb-2 text-white me-2 rounded-circle p-2"
                        onClick={() => onClickActivate(cell.athleteId)}>
                        <i className=" la la-check"></i>
                     </a>
               }
               {cell.athleteNavigation.blocked == true ?
                  <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2">
                     <i className="la la-times-circle-o"></i>
                  </a>
                  :
                  !cell.added ?
                     <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2"
                        onClick={() => onClickDeActivate(cell.athleteId)}>
                        <i className="la-times las "></i>
                     </a>
                     : (cell.added == true || cell.act == false) ?
                        <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2">
                           <i className="la la-times-circle-o"></i>
                        </a>
                        :
                        <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2"
                           onClick={() => onClickDeActivate(cell.athleteId)}>
                           <i className="la-times las "></i>
                        </a>
               }
            </div>
         ),
      }
   ];
   if (Isloading) {
      return (
         <Loader />
         // <Loader />
      )
   } return (
      <>
         <section className="wrapper bg-soft-primary">
            <div id="main-wrapper">
               <div className="content-body">
                  <div className="container-fluid">
                     <div className="row">
                        <div className="col-12">
                           <div className="card">
                              <div className="card-header d-flex py-5">
                                 <h4 className="card-title fs-18 fs-md-24">List Athletes</h4>
                                 <form action="" >
                                    <div className="form-floating input-group">
                                       <input type="text" className="form-control border search_input" placeholder="Search Athletes" id="analyze" value={searchResult} onChange={(e) => setSearchresult(e.target.value)}
                                          {...formik.getFieldProps("Search")} />
                                       <label htmlFor="analyze">Search Athletes</label>
                                       <button className="btn btn-primary mh-100 search_btn" type="submit" onClick={formik.handleSubmit}>Search</button>
                                    </div>
                                    {formik.touched.Search && formik.errors.Search ? <p className='red mb-0'>{formik.errors.Search}</p> : null}
                                 </form>
                              </div>
                              <div className="card-body">
                                 <div className="table-responsive">
                                    <DataTable
                                       columns={columns}
                                       data={alldata}
                                       highlightOnHover
                                       responsive={true}
                                    />
                                    <div className="col-md-4 ms-auto mt-4 table_pagination admin_pagination">
                                       <Pagination
                                          {...bootstrap5PaginationPreset}
                                          current={currentPage}
                                          total={totalPages}
                                       onPageChange={(newPage: number) =>
                                       getPages(newPage)}
                                       />
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
      </>
   );
}
export default Admin;