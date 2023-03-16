import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useLocation ,useSearchParams,   useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';


const ForgotPassword = (props) => {

    // const notify = () => toast("Wow so easy!");

    const params = useParams();
    let navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [toastShow, setToastShow] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams(props);

    const changePassword = (e) => {

        e.preventDefault();
         try{
            axios({
              method:'PUT',
                 url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/auth/ForgotPasswordUpdate',
                data:{
                    "UserId": params.userId,
                   "LinkGuid": params.guid,
                    "Password":password ,
                    "ConfirmPassword": confirmPassword
                  },
                 headers:{
                  "Content-type":"application/json",
                  'Access-Control-Allow-Origins':'*',
                   "CORS" : "Access-Control-Allow-Origin"
                }
      
             }).then((response) => {
              
                console.log("update password",JSON.stringify(response.data))
                // alert(response.data.message)
                navigate("/passwordUpdateSuccessful")

      
             })
               .catch((reason: AxiosError) => {
                        if (reason.response.status === 400) {
                          // Handle 400
                        //    alert(reason.message)
                        
                            navigate("/expireforgot")
                        }
                      
                        
              })
           }
      
       catch(error){
              console.log(error)
             }

    }


 useEffect(() => {

     // navigate('/expireforgot')
       // navigate(`/resendverification/${params.userId}/${params.guid}`)
   
        
    },[])

    return (
        <>
            <section className="wrapper bg-soft-primary">
            <div className="container pt-17 pb-15 pt-md-19 pb-md-15 text-center">


           
<div className="row">
                <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
                <div className="wrapper1 bg-white shadow p-10 px-15">
                    <div className="form-wrapper">
                        <h1>Forgot Password</h1>

                        <form className="text-start mt-10 mb-3">
                            <div className="form-floating mb-10">
                                <input type="text" value={password} className="form-control" placeholder="password" id="password"
                                    onChange={(e) => setPassword(e.target.value)} />

                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-floating password-field mb-10">
                                <input type="text" value={confirmPassword} className="form-control" placeholder="confirmPassword" id="confirmPassword"
                                    onChange={(e) => setConfirmPassword(e.target.value)} />

                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>

                            <button className="btn btn-primary rounded-pill btn-login w-100 mb-2"
                              onClick={changePassword}>Update</button>
                           
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