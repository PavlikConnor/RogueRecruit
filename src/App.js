// Admin Layout 
import AdminLayout from './Adminlayout';
import Admin from './Components/Admin/Pages/Admin';
import Login from './Components/Admin/Pages/Login';
// import Style2 from './assets/Admin_assets/css/admin-style.css';

// Home Layout 
import PublicLayout from './Publiclayout';
import HomeLayout from './Components/Layouts/Home';
import Contact from './Components/Home/Pages/Contact';
import About from './Components/Home/Pages/About';
import Header from './Components/Layouts/Includes/Home/Header';
import Footer from './Components/Layouts/Includes/Home/Footer';
import Privacy from './Components/Home/Pages/Privacy';
import Errorpage from './Components/Home/Pages/Error';
import Profile from './Components/Home/Athlete/Profile';
import AthleteListing from './Components/Home/Athlete/AthleteListing';
import ForgotPassword from './Components/Home/Auth/ForgotPassword';
import Expireforgot from './Components/Home/Auth/expireforgot';
import Alreadyverify from './Components/Home/Auth/Alreadyverify';
import Passwordupdatesuccessful from './Components/Home/Auth/Passwordupdatesuccess';
import Resendverification from './Components/Home/Auth/Resendverification';
import Success from './Components/Home/Auth/Success';
import Resendsuccessfull from './Components/Home/Auth/Resendsuccessfull';
import Verify from './Components/Home/Auth/verify';

import   'react-animated-js';
import { Routes, Route,BrowserRouter,useLocation,useNavigate } from "react-router-dom";
import $ from 'jquery';
import Style1 from './assets/Web_assets/css/style.css';
// import Style2 from './assets/Admin_assets/css/admin-style.css';


function App() {
 // const location = useLocation();
 // let navigate = useNavigate();
   
 //   if(location =='/admin')
 //   {
 //    navigate('/admin')
 //   }
 //   else if(location =='/login')
 //    {
 //    navigate('/login')
 //   }
 //   else{
 //    navigate('/*')
 //   }


  return (
    <>
{/*// {location  !=='/admin' || location  !== '/login'|| location =='/*'?
//           <BrowserRouter >
//             <div>
//               <Routes>
//                 <Route path="/*" element={<Errorpage />}>
//                   </Route>
//                 </Routes>
//             </div>
//</BrowserRouter>
  */}

    
    <BrowserRouter >
        <div >
          <Routes>
            <Route path='/admin' element={<AdminLayout />}>
              <Route exact path='/admin' element={<Admin/>} /> 

            </Route>
          </Routes>
        </div>
        <div>
        <Routes>
          <Route path='/login' element={<Login />}>
     
          </Route>
        </Routes>
        </div>

         {/* //<div>
        //   <Routes>
        //     <Route path='/*'  element={<Errorpage />}>
        //       </Route>
        //     </Routes>
        // </div>
        */}

        <div style={Style1}>
          <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route exact path='/' element={<HomeLayout />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/privacy' element={<Privacy />} />
            <Route exact path='/search_result' element={<AthleteListing />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/forgotpassword/:userId/:guid' element={<ForgotPassword />} />
            <Route exact path='/expireforgot' element={<Expireforgot />} />
            <Route exact path='/alreadyverify' element={<Alreadyverify />} />
            <Route exact path='/passwordUpdateSuccessful' element={<Passwordupdatesuccessful />} />
            <Route exact path='/forgotresendsuccess' element={<Resendsuccessfull />} />
            <Route exact path='/resendverification/:userId/:guid' element={<Resendverification />} />
            <Route exact path='/success' element={<Success/>} />
             <Route exact path='/verify/:userId/:guid' element={<Verify/>} />
            {/* // <Route path='/*' element={<Errorpage />}/>*/}
          </Route>
          </Routes>
        </div>
       
    </BrowserRouter>
 
  


    </>
  );
}

export default App;
