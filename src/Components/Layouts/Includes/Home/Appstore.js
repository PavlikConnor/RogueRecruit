import Device from '../../../../assets/Web_assets/img/illustrations/app_1.png'
import Cloudimg1 from '../../../../assets/Web_assets/img/icons/lineal/cloud-computing.svg'
import Cloudimg2 from '../../../../assets/Web_assets/img/icons/lineal/smartphone-2.svg'
import Cloudimg3 from '../../../../assets/Web_assets/img/icons/lineal/rocket.svg'
import Targetimg1 from '../../../../assets/Web_assets/img/icons/lineal/target.svg'
import Targetimg2 from '../../../../assets/Web_assets/img/icons/lineal/medal.svg'
import Targetimg3 from '../../../../assets/Web_assets/img/icons/lineal/clock-3.svg'
import Targetimg4 from '../../../../assets/Web_assets/img/icons/lineal/check-list.svg'
import Targetimg5 from '../../../../assets/Web_assets/img/icons/lineal/images.svg'
import Targetimg6 from '../../../../assets/Web_assets/img/icons/lineal/team.svg'
import Cloudsimg from '../../../../assets/Web_assets/img/illustrations/clouds.png'


const Appstore = () => {
  return (
    <>
     <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pt-lg-12 pt-xl-14 pt-xxl-14 pb-lg-14 pb-xl-14 pb-xxl-0">
        <div className="row gx-lg-8 gx-xl-10  align-items-center ">
          <div className="col-lg-6">
            <figure className="text-center"><img src={Device}  alt="" className="col-md-10"/></figure>
          </div>
          <div className="col-lg-6">
            <h3 className="display-4 mb-5">Unlock your athletic potential with Rogue, the free mobile app for student athletes.  </h3>
            <p className="mb-8">Simply download the app, create your profile, and showcase 
              your skills to a network of coaches. With Rogue, you can add all 
              the sports you wish to play in college and include stats, videos, 
              and links to enhance your profile. Give coaches a complete 
              understanding of your abilities and demonstrate why you are the
              perfect fit for their program. Join the growing community of 
              student athletes and take control of your future. Download 
              Rogue now and let the world know, 'I Am Ready!'"</p>
            <div className="row gy-6 gx-xxl-8 process-wrapper" data-group="process">
              <div className="col-md-4"> 
                <img src={Cloudimg1} className=" icon-svg icon-svg-sm text-green mb-3" alt="" />
                <h4 className="mb-1">1. Download</h4>
                <p className="mb-0">Athletes can download the app for free</p>
              </div>
              <div className="col-md-4"> 
                <img src={Cloudimg2} className=" icon-svg icon-svg-sm text-red mb-3" alt="" />
                <h4 className="mb-1">2. Create Profile</h4>
                <p className="mb-0">Create a profile with stats, videos and more</p>
              </div>
              <div className="col-md-4"> <img src={Cloudimg3} className=" icon-svg icon-svg-sm text-aqua mb-3" alt="" />
                <h4 className="mb-1">3. Submit Profile</h4>
                <p className="mb-0">Search for schools and submit for free</p>
              </div>
            </div>
            <div className=" justify-content-center justify-content-lg-start mt-8 btn-wrapper" data-group="download">
              <div className="d-inline-flex me-2 mb-2"><a href="https://www.apple.com/" target="_blank" className="btn btn-lg btn-grape rounded min_width fs-15 text-white"><i className="uil uil-apple me-1"></i > App Store</a></div>
              <div className="d-inline-flex mb-2"><a href="https://play.google.com/store/games" target="_blank" className="btn btn-lg btn-outline-grape rounded fs-18"><i className="uil uil-google-play me-1"></i> Google Play</a></div>
            </div>
          </div>
        </div>
        <div className="row text-start text-md-center mt-14">
          <div className="col-md-10 col-lg-12 mx-auto">
            <h2 className="fs-15 text-uppercase text-muted mb-3 text-primary">App Features</h2>
            <h3 className="display-4 mb-9 px-xxl-6">Discover a new era of athletic recruitment with Rogue Recruit!
             <br className="d-none d-md-block " /> 
             <span className="fs-19 line_height fw-normal d-inline-block mt-2 set_fs">Our innovative app revolutionizes the traditional recruitment process with 
              its flexible system, giving student athletes a unique edge in showcasing their skills and standing out to coaches. Don't miss out on this game-changing opportunity to take control of your athletic future.
              </span></h3>
            
          </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-8 mb-10 mb-md-10 pb-lg-10"  data-group="services">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-row">
              <div>
                <img src={Targetimg1} className=" icon-svg icon-svg-sm text-aqua me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Create athlete profile</h4>
                <p className="mb-0">Elevate your athletic career with Rogue Recruit's cutting-edge and flexible system, designed for athletes like you. </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-row">
              <div>
                <img src={Targetimg2} className=" icon-svg icon-svg-sm text-yellow me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Add Multiple Sports</h4>
                <p className="mb-0">Expand your athletic horizons and showcase your versatility by adding one or multiple sports you're considering for college play with Rogue Recruit!</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-row">
              <div>
                <img src={Targetimg3} className=" icon-svg icon-svg-sm text-red me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Add Multiple Seasons/Teams</h4>
                <p className="mb-0">Give coaches all the information they need to evaluate your potential and see why you're the perfect fit for their program.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-row">
              <div>
                <img src={Targetimg4} className=" icon-svg icon-svg-sm text-pink me-4" alt="" />
            
              </div>
              <div>
                <h4 className="mb-1">Add Stats for a Game/Season</h4>
                <p className="mb-0">Effortlessly update your profile week to week during the season or showcase your dominance by adding a full season of stats all at once.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-row">
              <div>
                <img src={Targetimg5} className=" icon-svg icon-svg-sm text-green me-4" alt="" />

              </div>
              <div>
                <h4 className="mb-1">Add Media for a Game/Season</h4>
                <p className="mb-0">Showcase your skills with videos of your competitions and add links to articles that highlight your achievements.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-row">
              <div>
                <img src={Targetimg6} className=" icon-svg icon-svg-sm text-purple me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Submit Profile</h4>
                <p className="mb-0">Search for schools you want to compete at, create a profile that showcases your skills, and submit it for free to coaches and recruiters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <figure className="mb-0"><img src={Cloudsimg} alt=""/></figure>
    </section>
    </>
  );
}

export default Appstore;
