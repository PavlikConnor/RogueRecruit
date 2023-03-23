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
import AthleteMale from '../../../assets/Web_assets/img/photos/athleteMale.jpg'
import AthleteFemale from '../../../assets/Web_assets/img/photos/athleteFemale.jpg'
import axios from 'axios';
import { confirm } from "react-confirm-box";
import Loader from '../../Loader';
import { useFormik } from 'formik';
import * as yup from 'yup'; 

var Spinner = require('react-spinkit');
let pages = []
// let profileImage=[]
let searchText
let totalPages;

const AthleteListing = (props,route) => {
  
const [Isloading, setIsLoading] = useState(true);
const [searchResult, setSearchresult] = useState("");
const [searchCount, setSearchCount] = useState("");
const [filteredData,setFilteredData] =useState(false)
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
   const [blockresponse, setBlockresponse] = useState('');

   // const [email,setEmail]=useState()

// const location = useLocation();
//    const { state } = location;

//    const [userEmail,setUserEmail]=useState(state.Email)


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
setFilteredData(true)
searchText= values.Search
// alert(searchText)
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
let token=localStorage.getItem("token");
console.log("token",token)

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

   // console.log("alldata is ",response)
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
console.log('searchresult==',response.data)
setAlldata(response.data.result.athletes);
setSearchCount(response.data.result.count)
pages = (response.data.result.count) /10
totalPages=(Math.round(pages))

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


 if(filteredData==true)
 {
  window.scrollTo(0, 0);
        try {
            axios({
            method: 'GET',
            // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/profile/GetAthletes?pageNum=${pageR}&numPerPage=10&fullName=${searchText}`,
            headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origins': '*',
            "CORS": "Access-Control-Allow-Origin",
            // 'Authorization': `bearer ${token}`
            }
            }).then((response) => {
            // console.log("pagesss", response)
            setAlldata(response.data.result.athletes);
           // window.scrollTo(0, 0            //   pages=response.data.result.pages
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
 else{
      window.scrollTo(0, 0);


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
            // window.scrollTo(0, 0);
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
}


const heightinfeet =(inches)=>{
      let feetFromInches = Math.floor(inches / 12)
      let inchesRemainder = inches % 12; 
      let result = feetFromInches + "'" + inchesRemainder + "\"";
      // setHeight(result)
      return result
      // console.log("inchessss==222",result)
   }

// if (Isloading) {
// return (
// <Loader />
// )
// }


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
            // console.log("deactivate", response)
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
            // console.log("Activate", response)
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
         // console.log("You click yes!");
         activate(id)
         return;
      }
      // console.log("You click No!");
   };
   const onClickDeActivate = async (id) => {
      const result = await confirm("Are you sure you want to deactivate this user?");
      if (result) {
         // console.log("You click yes!");
         getId(id)
         return;
      }
      // console.log("You click No!");
   };



return (
<>


<section className="wrapper image-wrapper bg-image  text-white bg-lightblue" style={mystyle}>
   <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center" >
   </div>
</section>

{ Isloading ? <Loader /> :
<section className="wrapper set_details bg-light-red" >
   <div className="container p-10  pb-md-10  mt-n20 bg-white rounded" >
      <div className="row mb-6">
         <div className="col-lg-4 mx-auto">
            <form action="#">
               <div className="form-floating input-group">
                  <input type="text" className="form-control border" placeholder="Search Athletes" id="analyze" value={searchResult} onChange={(e) => setSearchresult(e.target.value)}
                  {...formik.getFieldProps("Search")} />
                  <label htmlFor="analyze">Search Athletes</label>
                  <button className="btn btn-primary hover-color search_btn" type="button" onClick={formik.handleSubmit}>Search</button>
               </div>
               {formik.touched.Search && formik.errors.Search ? 
               <p className='red'>{formik.errors.Search}</p>
               : null}
            </form>
         </div>
      </div>
      <div className="table-responsive">
         <div className="job-list mb-10">
            <h3 className="mb-4">All Athletes </h3>
             
     {filteredData  ?
            <div className="row">
               <div className="col-md-10">
                  <h4 className="mb-0 fs-17">Results found for 
                  <span className="text-primary"> {searchText} </span></h4>
               </div>
               <div className="col-md-2">
                  <p className=" text-secondary fs-15"><span className="fw-bold">Showing </span> {searchCount<10 ? searchCount :10}    of {searchCount} </p>
               </div>
            </div>

            :
            null}
            
            {alldata.map((content, id) => {
            return (
            <NavLink  state={{ Content: content }}
            className="card mb-4 lift" key={id}>
            <div className="card-body px-5 py-3">
               <span className="row justify-content-between align-items-center">
                  <span className="col-md-3 col-lg-3 mb-2 mb-md-0 d-flex align-items-center text-body">

                   <img className="avatar d-inline-block w-10 me-2" alt="" src={
                                content.athleteNavigation.profilePicture == null 
                                  ?  
                                   (content.gender=="M" ? `${AthleteMale}` :`${AthleteFemale}`
                                   )
                                  :
                                  content.athleteNavigation.profilePicture.uri
                               } />
                     
                     <div className="row">
                        <div>
                           <b>{content.firstName}</b> <b>{content.lastName}</b>
                        </div>
                        <div><span>{content.gender=="F"?"Female":content.gender=="M"?"Male":"Other"}</span>,
                        <span> {heightinfeet(content.heightInches)}</span>
                           <span> {content.weightPounds} lbs</span>
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
                           <label className="mb-0"><b>City</b></label>
                           <div><i className="uil uil-location-point"></i>  {content.city}</div>
                        </div>
                        <div className="col-md-6">
                           <label className="mb-0"><b>State</b></label>
                           <div>  {content.state}</div>
                        </div>
                     </div>
                  </span>
                  <span className="col-9 col-md-6 col-lg-4 text-body align-items-center">
                     <div className="row">
                        <div className="col-md-4">
                           <label className="mb-0"><b>Zip Code</b></label>
                           <div>  {content.zipCode}</div>
                        </div>
                        <div className="col-md-5">
                           <label className="mb-0"><b>Status</b></label>
                           <div>{content.athleteNavigation.blocked == false ? <span className="text-success text-white rounded-pill fs-15 mb-0  d-inline-block fw-bold text-center">Activated</span> : <span className="text-danger text-white rounded-pill fs-15 mb-0  d-inline-block fw-bold text-center">Deactivated</span>}</div>
                        </div>
                        



                        
                        <div className="col-md-3">
                              <label><b>Action</b></label>
                              
                           <div className="d-flex">
               {content.athleteNavigation.blocked == false ?
                  <a className="dropdown-item btn-style  bg-green me-2 text-white mb-2 rounded-circle p-2">
                     <i className="uil uil-check-circle"></i>
                  </a>
                  :
                  !content.act ?
                  <a className="dropdown-item btn-style bg-green mb-2 text-white me-2 rounded-circle p-2"
                     onClick={() => onClickActivate(content.athleteId)}>
                     <i className="uil uil-check"></i>
                  </a>
                  : (content.added == false || content.act == true) ?
                     <a className="dropdown-item btn-style bg-green mb-2 text-white me-2 rounded-circle p-2" >
                       <i className="uil uil-check-circle"></i>
                     </a>
                     :
                     <a className="dropdown-item btn-style bg-green mb-2 text-white me-2 rounded-circle p-2"
                        onClick={() => onClickActivate(content.athleteId)}>
                        <i className="uil uil-check"></i>
                     </a>
               }
               {content.athleteNavigation.blocked == true ?
                  <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2">
                     <i className="uil uil-times-circle"></i>
                  </a>
                  :
                  !content.added ?
                     <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2"
                        onClick={() => onClickDeActivate(content.athleteId)}>
                        <i className="uil uil-times"></i>
                     </a>
                     : (content.added == true || content.act == false) ?
                        <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2">
                          <i className="uil uil-times-circle"></i>
                        </a>
                        :
                        <a className="dropdown-item btn-style  text-white mb-2 rounded-circle p-2"
                           onClick={() => onClickDeActivate(content.athleteId)}>
                           <i className="uil uil-times"></i>
                        </a>
               }
            </div>
                         
                        </div>
                        
                     </div>
                  </span>
                  {/* // <span className="d-none d-lg-block col-1 text-center text-body"><i className="uil uil-angle-right-b"></i>
                  // </span>
                  */}
               </span>
            </div>
            </NavLink>)
            })
            }
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

}
</>
);
}
export default AthleteListing;
