import Successimg from '../../../assets/Web_assets/img/photos/success-check-icon.png'
import React, { useState, useEffect } from 'react';
import { useLocation ,useSearchParams,   useParams} from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader';
import { useNavigate } from "react-router-dom";
  


let alldata=[]
const Verifypage = (props) => {

    let navigate = useNavigate();

    const params = useParams();
     // const [alldata, setAlldata] = useState({});
    const [loading,setLoading]=useState(false)
    const [textchange,setTextchange]=useState(false)
    const [searchAthlete, setSearchathlete] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [searchParams, setSearchParams] = useSearchParams(props);

const verify=()=>{

     try{
            axios({
                 method:'PUT',
                 url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/auth/Verify/${params.userId}/${params.guid}`,
                 data:{
                    "userId": params.userId,
                   "guid": params.guid,
                   
                  },
                 headers:{
                  "Content-type":"application/json",
                  'Access-Control-Allow-Origins':'*',
                   "CORS" : "Access-Control-Allow-Origin"
                }
      
             }).then((response) => {
                setLoading(false)
                console.log("verification response",JSON.stringify(response.data))
               
                    navigate('/success')

              
      
             }).catch((reason: AxiosError) => {
                        if (reason.response.status === 400) {
                          // Handle 400
                           //  alert("this account is already verified.")
                             navigate("/alreadyverify")
                           // console.log("verify")
                         // alert(reason.response.data.responseException.exceptionMessage)
                            
                        }else{
                             navigate('/resendverification/params.userId/params.guid')
                        }
                                    
              });
           }
      
       catch(error){
              console.log("error found is",error)
          
             }

    }

useEffect(() => {
      verify()
     // navigate('/success')
       // navigate(`/resendverification/${params.userId}/${params.guid}`)
   
        
    },[])
        




  return (
    <>
     <section className="wrapper bg-soft-primary">
      <div className="container pt-16 pt-lg-20  pb-lg-10  pb-10">

           
      <Loader />
            {/* <div className="d-flex align-items-center justify-content-center position-relative h-100  ">
              <div>
                 <h1 className="loader text-center">
                    <span>
                       <i className="uil uil-spinner-alt"></i>
                    </span>
                 </h1>
                 <h2>Verifying Account</h2>
              </div>
           </div> */}
           
                  
                 
      </div>
      
    </section>
    </>
  );
}

export default Verifypage;
