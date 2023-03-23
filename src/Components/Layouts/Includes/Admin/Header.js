import {NavLink,useNavigate} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Logo from '../../../../assets/Web_assets/img/logo.png';
import Avatar from '../../../../assets/Web_assets/img/avatars/te1.jpg'



const Adminheader = () => {


  const [email,setEmail] =useState("")
    let navigate = useNavigate();


//    function Sidebarcollapse() {
//    var element = document.getElementById("deznave");
//    var element2 = document.getElementById("nav-header1");
//    element.classList.toggle("sidewidth");   
//    element2.classList.toggle("headerwidth"); 
// }


 function showlogout() {
   var element = document.getElementById("dropdown-menus");
   element.classList.toggle("show");
  
}

const logoutUser=()=>{
   console.log("tokennn===")
   localStorage.removeItem('token')
   navigate("/login")
   // window.location.reload();
             
}

//  $(window).scroll(function(){
//     if ($(this).scrollTop() > 50) {
//        $('#header').addClass('is-fixed');
//     } else {
//        $('#header').removeClass('is-fixed');
//     }
// });


// function myFunction() {
//    var element = document.getElementById("offcanvas-start");
//    element.classList.toggle("show");
  
// }
function Close() {
   var element = document.getElementById("offcanvas-start");
   element.classList.remove("show");

}

useEffect(()=>{



 let emails= localStorage.getItem("userEmail")

 // alert(email)

 setEmail(emails)

 window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("navbar-stick");
  } else {
    header.classList.remove("navbar-stick");
  }
} 

},[])


return (
<>


<header className="wrapper bg-soft-primary position-absolute w-100 " >
      <nav id="navbar" className="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none">
        <div className="container">
          <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center ">
            <div className="navbar-brand w-100">
              <NavLink to='/'>
                <img src={Logo}  alt=""  className="img-fluid logo_img"/>
              </NavLink>
            </div>
            <div id="offcanvas-start" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start bg-white">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">
                <NavLink to='/'>
                  <img src={Logo}  alt="logo_img"  className="img-fluid logo_img"/>
                </NavLink></h3>
                <button type="button" onClick={Close} className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink to='/admin' className="nav-link text-black" onClick={Close}>Athletes</NavLink>
                   
                  </li>
                  <li className="nav-item ">
                    <a href='#' className="nav-link text-black" onClick={logoutUser}>
                    <i className="uil uil-signout mr-2 fw-bold"></i>
                    Logout</a>
                   
                  </li>
                </ul>
              </div>
            </div>
          
            <div className="navbar-other w-100 d-flex ms-auto">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item">
                    <div className="text-primary fw-bold fs-12">{email}</div>
                    <div className="text-body text-end fw-bold">Admin</div>
                  {/*// <a  onClick={logoutUser} className="dropdown-item ai-icon pe-0">
                   // <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#9a0008" stroke="#9a0008" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   //    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                   //    <polyline points="16 17 21 12 16 7"></polyline>
                   //    <line x1="21" y1="12" x2="9" y2="12"></line>
                   // </svg>
                   // <span className="ms-2 fs-14" >Logout </span>
                 
                </a>*/}
                </li>
                <li className="nav-item">
                  <a className="nav-link user_icon" onClick={showlogout} href="#" role="button" data-bs-toggle="dropdown">
                           <img className="rounded-circle mt-2" src={Avatar}  alt="" />
                           </a>
                           
                </li>
              </ul>
     
            </div>

          </div>
          
        </div>
        
      </nav>
      
    </header>
</>
);
}
export default Adminheader;
