import {NavLink} from 'react-router-dom';
import Leftinfoimg from '../../../../assets/Web_assets/img/illustrations/About_2.png'


const Perfect = () => {
 
  return (
    <>
   
    <section className="wrapper bg-light info-sec">
      <div className="container pt-10 pb-12 pb-lg-14">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-6 order-2 order-md-1">
            <h3 className="display-4 mb-3">Always a Free Experience for the Athlete </h3>
            <p className="lead fs-lg lh-sm">To empower student-athletes and coaches by providing a comprehensive platform for talent discovery and development, fostering meaningful connections and opportunities in the athletic community. </p>
            <div className="row gy-3">
              <div className="col-xl-12">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><span><i className="uil uil-check"></i></span><span>Increased Exposure: A central profile increases visibility and access to a larger network of coaches and recruiters.</span></li>
                  <li className="mt-3"><span><i className="uil uil-check"></i></span><span> Efficient Recruitment Process: A unified profile streamlines communication and saves time for both athletes and coaches.</span></li>
                  <li><span><i className="uil uil-check"></i></span><span> Fair Evaluation: A complete profile allows for an unbiased and thorough evaluation of an athlete's abilities and potential.</span></li>
                  <li><span><i className="uil uil-check"></i></span><span> Improved Communication: A centralized platform facilitates easy communication between athletes, coaches, and recruiters.</span></li>
                  <li><span><i className="uil uil-check"></i></span><span> Access to Opportunities: A unified profile provides a gateway to a wider range of recruitment opportunities.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center ps-15 order-1 order-md-2">
            <figure><img className="right_img" src={Leftinfoimg} alt="" /></figure>
          </div>
          
        </div>
      </div>
    </section>
   
    </>
  );
}

export default Perfect;
