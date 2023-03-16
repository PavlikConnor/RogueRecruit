import Successimg from '../../../assets/Web_assets/img/photos/success-check-icon.png'



const Passwordupdate = () => {


  return (
    <>
     <section className="wrapper bg-soft-primary">
      <div className="container pt-16 pt-lg-12 pt-xl-12 pt-xxl-20 pb-lg-10 pb-xl-10 pb-10">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center  text-lg-start">
          <div className="col-lg-6 mx-auto shadow bg-white py-15"  data-group="page-title" >
            <div className="text-center">
              <img src={Successimg} className="img-fluid w-12" alt=''/>
            </div>
            <h1 className=" my-4  text-center fs-22">
              The password updated successfully
            </h1>
            
            </div>
        </div>
      </div>
      
    </section>
    </>
  );
}

export default Passwordupdate;
