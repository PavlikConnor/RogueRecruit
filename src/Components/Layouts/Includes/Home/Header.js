import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Logo from '../../../../assets/Web_assets/img/logo.png';

const Header = () => {

  function myFunction() {
   var element = document.getElementById("offcanvas-start");
   element.classList.toggle("show");
  
}
function Close() {
   var element = document.getElementById("offcanvas-start");
   element.classList.remove("show");

}

useEffect(()=>{
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
          <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
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
                <button type="button" onClick={Close} className="btn-close btn-close-white nav-close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink to='/about' className="nav-link text-black" onClick={Close}>About</NavLink>
                   
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link text-black" to='/contact' onClick={Close}>Contact Us</NavLink>
                  </li>
                    <li className="nav-item ">
                    <NavLink className="nav-link " to='/privacy' onClick={Close}>Privacy Policy</NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link " to='/search_result' onClick={Close}>Search Athletes</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          
            <div className="navbar-other w-100 d-flex ms-auto">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item">
                  <nav className="nav social social-muted justify-content-end text-end">
                    {/* // <NavLink to="/login" className="login-text">Login</NavLink> 
                    // <NavLink to="/search_result" ><i className="uil uil-search"></i></NavLink> */}
                    <a href="https://twitter.com/" target="_blank" className="text-decoration-none"><i className="uil uil-twitter"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" className="text-decoration-none"><i className="uil uil-facebook-f"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" className="text-decoration-none"><i className="uil uil-instagram"></i></a>
                  </nav>
                  
                </li>
                <li className="nav-item d-lg-none">
                  <button className="hamburger offcanvas-nav-btn" onClick={myFunction}><span></span></button>
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

export default Header;
