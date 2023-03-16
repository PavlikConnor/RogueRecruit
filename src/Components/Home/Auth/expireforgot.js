import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useLocation ,useSearchParams,   useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';



const ForgotPassword = (props) => {

   
    const params = useParams();
    
    const [email, setEmail] = useState("");
    const [toastShow, setToastShow] = useState(true);


let navigate = useNavigate();

  const resendPasswordLink = (e) => {

        e.preventDefault();
         try{
            axios({
              method:'PUT',
                 url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/auth/ForgotPassword',
                data:{
                    "Email": email,
                  
                  },
                 headers:{
                  "Content-type":"application/json",
                  'Access-Control-Allow-Origins':'*',
                   "CORS" : "Access-Control-Allow-Origin"
                }
      
             }).then((response) => {
              
                console.log("resend password link",JSON.stringify(response.data))

                if(response.data.isError==false)
                {
                    navigate("/forgotresendsuccess")
                }
                // alert(response.data.message)
      
             });
           }
      
       catch(error){
              console.log(error)
             }

    }




    return (
        <>
            <section className="wrapper bg-soft-primary">
            <Toast className="mx-auto mb-4 mt-10 position-relative"  style={{"z-index":"9999999","border-color":"#9A0008","min-width":"450px"}} onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide bg="danger" >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Rogue Recruit</strong>
          
          </Toast.Header>
          <Toast.Body className='fs-15 text-white text-primary bg-white rounded-bottom '>Something went wrong,please fill in your email to request password update!</Toast.Body>
        </Toast>
            <div className="container pt-17 pb-15 pt-md-19 pb-md-15 text-center">
            
            <div className="row">
                

                <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
                <div className="wrapper1 bg-white shadow p-10 px-15">
                    <div className="form-wrapper">
                        <h1>Forgot Password</h1>

                        <form className="text-start mt-10 mb-3">
                            <div className="form-floating mb-10">
                                <input type="email" value={email} className="form-control" placeholder="Email" id="email"
                                    onChange={(e) => setEmail(e.target.value)} />

                                <label htmlFor="email">Email</label>
                            </div>

                            <button className="btn btn-primary rounded-pill btn-login w-100 mb-2" onClick={resendPasswordLink}
                              >Submit</button>
                            
                           
                        </form>
                    </div></div>
                </div>
            </div>
            </div>
            </section>
        </>
    );
}
export default ForgotPassword;