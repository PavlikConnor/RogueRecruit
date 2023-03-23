import Cloudsimg from '../../../../assets/Web_assets/img/illustrations/clouds.png'
import Bannerimg from '../../../../assets/Web_assets/img/illustrations/RR_cheveron.png'


const Banner = () => {
  return (
    <>
     <section className="wrapper bg-soft-primary">
      <div className="container pt-16 pt-lg-20 pb-lg-10  pb-10">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center  text-lg-start">
          <div className="col-lg-7 order-2 order-md-1"  data-group="page-title" >
            <h1 className="display-1 mb-4 me-xl-5 fw-bold">
            Rogue Recruit <br className="d-none d-md-block" />
            </h1>
             <p className="lead fs-20 lh-sm mb-7 pe-xxl-2">
              <strong className="fw-bold">Attention student athletes! </strong><br/>
              <span className="text-primary mb-2 d-inline-block">Are you looking to take your athletic 
              career to the next level?</span><br />
               <span className="fs-16 "> 
              A free recruiting profile on our platform can 
              help you achieve your goals. With just a few clicks, you can showcase 
              your skills and achievements to a wide network of coaches and 
              recruiters. By creating a profile, you'll increase your exposure, 
              streamline the recruitment process, and have access to a wider range 
              of opportunities. Our platform is designed to provide a fair and 
              comprehensive evaluation of your abilities, giving you the chance to 
              stand out and reach your full potential. 
              <br className="d-none d-md-block " /> 
              Take control of your future and create your free profile today. Start 
              your journey to becoming a college athlete!</span> 
               </p>  
            <div className="d-inline-flex me-2 mb-2"><a href="https://www.apple.com/" target="_blank" className="btn btn-lg btn-grape rounded min_width fs-15 text-white"><i className="uil uil-apple me-1"></i> App Store</a></div>
            <div className="d-inline-flex mb-2"><a href="https://play.google.com/store/games" target="_blank" className="btn btn-lg btn-outline-grape rounded fs-18"><i className="uil uil-google-play me-1"></i> Google Play</a></div>
          </div>
          <div className="col-10 col-md-7 mx-auto col-lg-5 col-xl-5 text-center order-1 order-md-2">
            <img className="img-fluid w-50" src={Bannerimg}  alt="" />
          </div>
        </div>
      </div>
      <figure className="mb-0"><img src={Cloudsimg} alt=""/></figure>
    </section>
    </>
  );
}

export default Banner;
