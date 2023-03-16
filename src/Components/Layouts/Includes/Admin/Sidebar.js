const Sidebar = () => {
return (
<>
<section className="wrapper bg-soft-primary">
   <div id="deznave" className="deznav bg-sidebar">
      <div className="deznav-scroll">
         <ul className="metismenu" id="menu">
           {/* // <li><a >
            //    <i className="uil uil-create-dashboard"></i>
            //    <span className="nav-text">Dashboard</span>
            //    </a>
            // </li>
*/}
            <li>
               <a className="has-arrow " href="#" aria-expanded="false">
               <i className="la la-list"></i>
               <span className="nav-text">Athletes</span>
               </a>
               {/* <ul aria-expanded="false">
                  <li><a href="#">List Athletes</a></li>
               </ul> */}
            </li>
         </ul>
      </div>
   </div>
</section>
</>
);
}
export default Sidebar;
