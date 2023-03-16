import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useLocation ,useSearchParams,   useParams} from 'react-router-dom';
import Device from '../../../assets/Web_assets/img/photos/invalidLink.jpg'
import axios from 'axios';
// import { useNavigate } from "react-router-dom";




const Verification = () => {


     const params = useParams();



useEffect(() => {
    
      console.log(params.userId)
   
        
    },[])


const resendVerificationLink=()=>{

  try{
            axios({
                 method:'PUT',
                 url: `https://roguemobileappservice20211021204917.azurewebsites.net/api/auth/ResendVerifyEmailByUserLoginId?userLoginId=${params.userId}`,
                 data:{
                    "userLoginId": params.userId,
           
                   
                  },
                 headers:{
                  "Content-type":"application/json",
                  'Access-Control-Allow-Origins':'*',
                   "CORS" : "Access-Control-Allow-Origin"
                }
      
             }).then((response) => {
               
                console.log("resend verification response",JSON.stringify(response.data))
               alert(response.data.result.text)
            

              
      
             });
           }
      
       catch(error){
              console.log("error found is",error)
          
             }




}

    return (
        <>
            <section className="wrapper bg-soft-primary">
            <div className="container pt-17 pb-15 pt-md-19 pb-md-15 text-center">
                <div className="row">
                    <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
                    <div className="wrapper1 bg-white shadow p-10 px-15">
                        <div className="form-wrapper">
                        <div className="text-center">
                        <img src={Device} className="img-fluid" alt=''/>
                        </div>
                            <h2 className="mt-6 fs-30">Invalid Link</h2>
                            <h3 className="my-6 fs-25">Verification link you are trying to access does not exist. The link has been expired!</h3>
                            <div className="text-center">
                            <a href="#"  className="btn btn-lg btn-grape rounded min_width" 
                            onClick={()=>resendVerificationLink()}
                       
                            >Resend Verification Link</a>

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
export default Verification;