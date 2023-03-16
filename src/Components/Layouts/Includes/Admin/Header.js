import {NavLink,useNavigate} from 'react-router-dom';
import Logo from '../../../../assets/Web_assets/img/logo.png';
import Avatar from '../../../../assets/Web_assets/img/avatars/te1.jpg'
import $ from 'jquery';


const Adminheader = () => {
    let navigate = useNavigate();


   function Sidebarcollapse() {
   var element = document.getElementById("deznave");
   var element2 = document.getElementById("nav-header1");
   element.classList.toggle("sidewidth");   
   element2.classList.toggle("headerwidth"); 
}


 function showlogout() {
   var element = document.getElementById("dropdown-menus");
   element.classList.toggle("show");
  
}

const logoutUser=()=>{
   console.log("tokennn===")
   localStorage.removeItem('token')
   navigate("/login")
   window.location.reload();
             
}

 $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('is-fixed');
    } else {
       $('#header').removeClass('is-fixed');
    }
});



return (
<>
<section className="wrapper bg-soft-primary">
   <div id="nav-header1" className="nav-header">
               <NavLink to='/' className="brand-logo" >
                <img src={Logo}  alt=""  className="img-fluid logo_img"/>
              </NavLink>
      {/* <a href="#" className="brand-logo">
         
            <img src={Logo}  alt=""  className="img-fluid logo_img"/>
            </a> */}
         {/* // <img src="" className="logo-color" alt=""/>*/}
     
      <div className="nav-control">
         <div className="hamburger" onClick={Sidebarcollapse}>
            <span className="line"></span><span className="line"></span><span className="line"></span>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="22" y="11" width="4" height="4" rx="2" fill="#2A353A"/>
               <rect x="11" width="4" height="4" rx="2" fill="#2A353A"/>
               <rect x="22" width="4" height="4" rx="2" fill="#2A353A"/>
               <rect x="11" y="11" width="4" height="4" rx="2" fill="#2A353A"/>
               <rect x="11" y="22" width="4" height="4" rx="2" fill="#2A353A"/>
               <rect width="4" height="4" rx="2" fill="#2A353A"/>
               <rect y="11" width="4" height="4" rx="2" fill="#2A353A"/>
               <rect x="22" y="22" width="4" height="4" rx="2" fill="#2A353A"/>
               <rect y="22" width="4" height="4" rx="2" fill="#2A353A"/>
            </svg>
         </div>
      </div>
   </div>
   <div id="header" className="header">
      <div className="header-content">
         <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
               <div className="header-left">
                  <div className="dashboard_bar">
                     Athletes
                  </div>
               </div>
               <div className="navbar-nav header-right">
                  <div className="nav-item d-flex align-items-center">
                     <ul>
                        <li className="nav-item dropdown header-profile align-items-center">
                        <a  onClick={logoutUser} className="dropdown-item ai-icon pe-0">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#9a0008" stroke="#9a0008" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                 </svg>
                                 <span className="ms-2 fs-14" >Logout </span>
                              </a>
                           <a className="nav-link user_icon" onClick={showlogout} href="#" role="button" data-bs-toggle="dropdown">
                           <img className="rounded-circle mt-2" src={Avatar}  alt="" />
                           </a>
                           {/* <div id="dropdown-menus" className="dropdown-menu dropdown-menu-end" >
                              <a  onClick={logoutUser} className="dropdown-item ai-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#9a0008" stroke="#9a0008" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                 </svg>
                                 <span className="ms-2" >Logout </span>
                              </a>
                           </div> */}
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   </div>
</section>
</>
);
}
export default Adminheader;
