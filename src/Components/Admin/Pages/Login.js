import { React, useState, useEffect } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import Loginbackground from '../../../assets/Web_assets/img/illustrations/vectorbg2.jpg'
import Logo from '../../../assets/Web_assets/img/logo.png';
import Loader from '../../Loader';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


var Spinner = require('react-spinkit');


const Login = () => {
  require("../../../assets/Web_assets/css/style.css");
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const mystyle = {
    backgroundImage: `url(${Loginbackground})`

  }

  const [isLoading, setIsLoading] = useState(false);



  const loginHandle = (e) => {
    e.preventDefault();
    // console.log("asdasfasf");
    setIsLoading(true);
    try {
      axios({
        method: 'POST',
        url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/auth/Login',
        data: { "email": email, "password": password },
        headers: {
          "Content-type": "application/json",
          'Access-Control-Allow-Origins': '*',
          "CORS": "Access-Control-Allow-Origin",
          // 'Authorization': `bearer ${token}`
        }

      }).then((response) => {
        console.log(JSON.stringify(response))
        localStorage.setItem("token", response.data.result.apiToken)
        setIsLoading(false);
         localStorage.setItem("userEmail",email)
        navigate("/admin")
        // alert(email)
        // window.location.reload()
      });
    }catch (error) {
      setIsLoading(false);
      console.log(error)
    }
 
  }


  useEffect(() => {
    
  }, []);
       

  return (
    
    <>
      <section className="wrapper image-wrapper bg-image  text-white login_bg" style={mystyle}>
        <div className="container pt-10 pt-md-15 pb-10  pb-md-18 text-center">
          <div className="row">
            <div className="col-lg-7 col-xl-6 col-xxl-5 mx-auto">
              <div className="card">
                <div className="card-body p-11 text-center">
                  <img src={Logo} alt="" className="mb-10 img-fluid w-50" />
                  <p className="mb-4 text-body">Sign In to secure admin portal</p>
                  <form className="text-start" >
                    <div className="form-floating mb-4">
                      <input type="email" value={email} className="form-control" placeholder="Email" id="loginEmail" 
                        onChange={(e) => setEmail(e.target.value)} />

                      <label htmlFor="loginEmail">Email</label>
                    </div>
                    <div className="form-floating password-field mb-4">
                      <input type="password" value={password} className="form-control" placeholder="Password" id="loginPassword"
                        onChange={(e) => setPassword(e.target.value)} />
                      {/* //<span className="password-toggle"><i className="uil uil-eye"></i></span>
                    */}<label htmlFor="loginPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary rounded btn-login w-100 mt-6 mb-2"
                      onClick={loginHandle}   >Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {isLoading == true ?   <Loader /> : "" }  

    
    </>
  );
}

export default Login;
