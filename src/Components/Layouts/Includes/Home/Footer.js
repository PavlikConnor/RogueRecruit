import {NavLink} from 'react-router-dom';
import Logo from "../../../../assets/Web_assets/img/logo.png"
const Footer = () => {
return (
<>

<footer className="bg-white ">
   <div className="container pt-8 pt-md-10 pb-7">
      <div className="row gx-lg-0 gy-6">
         <div className="col-lg-4">
            <div className="widget">
               <NavLink to='/'>
                  <img src={Logo}  alt=""  className="mb-4 footer_logo_img"/>
               </NavLink>
               <p className="fs-18 mb-0">Trusted by Athletes, Coaches, Colleges and Universities </p>
            </div>
         </div>
         <div className="col-lg-4 offset-lg-1">
            <div className="widget">
               <div className="d-flex flex-row">
                  <div>
                     <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-envelope"></i> </div>
                  </div>
                  <div>
                     <h5 className="mb-1 fs-18">Email</h5>
                     <p className="mb-0 fs-15"><a href="mailto:roguesupport@roguerecruit.com" className="text-primary text-decoration-none"><span className="footer_email text-break">roguesupport@roguerecruit.com</span></a></p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-3">
            <div className="widget">
               <div className="d-flex flex-row">
                  <div>
                     <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
                  </div>
                  <div className="align-self-start justify-content-start">
                     <h5 className="mb-1 fs-18">Address</h5>
                     <address className="fs-15"> Omaha, NE USA </address>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <hr className="mt-8 mt-md-12 mb-7" />
      <div className="d-md-flex align-items-center justify-content-between">
         <p className="mb-2 mb-lg-0 fs-14">roguerecruit© 2023. All rights reserved.</p>
         <nav className="nav social social-muted mb-0 text-md-end">
            <a href="https://twitter.com/" target="_blank" className="text-decoration-none"><i className="uil uil-twitter"></i></a>
            <a href="https://www.facebook.com/" target="_blank" className="text-decoration-none"><i className="uil uil-facebook-f"></i></a>
            <a href="https://www.instagram.com/" target="_blank" className="text-decoration-none"><i className="uil uil-instagram"></i></a>
         </nav>
      </div>
   </div>
</footer>
</>
);
}
export default Footer;
