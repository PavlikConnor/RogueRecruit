import Errorimg from '../../../assets/Web_assets/img/illustrations/404screen.png'
import Errorbackground from '../../../assets/Web_assets/img/illustrations/vectorbg2.jpg'

const Errorpage = () => {
  const mystyle = {
  backgroundImage:`url(${Errorbackground})`
  
}
  return (
    <>
    <section className="wrapper image-wrapper bg-image  text-white bg-lightblue" style={mystyle}>
      <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center" >
      
      </div>
    </section>
     <section className="wrapper bg-light ">
      <div className="container mb-17 pt-12 pt-md-14 pb-14 pb-md-16 mt-n19 bg-white rounded box-shadow">
        <div className="row">
          <div className="col-lg-9 col-xl-8 mx-auto ">
            <figure className="mb-10">
            <img className="img-fluid" src={Errorimg}  alt=""/></figure>
          </div>
        
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h1 className="mb-3">Page Not Found!</h1>
            <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
            The page you are looking for is not available or has been moved. Try a different url or go to homepage with the button below.</p>
            <a href="#" className="btn btn-primary rounded-pill">Go to Homepage</a>
          </div>
        
        </div>
      
      </div>
     
    </section>
    </>
  );
}

export default Errorpage;
