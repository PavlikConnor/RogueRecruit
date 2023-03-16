import React, { useEffect,useState } from 'react';
import {NavLink} from 'react-router-dom';
import Background from "../../../assets/Web_assets/img/illustrations/vectorbg3.jpg"
import {Animated} from "react-animated-css";
import {useFormik} from 'formik';
import * as yup from 'yup';

const Contact = () => {
  const [inputValue, setInputValue] = useState()

const mystyle = {
  backgroundImage:`url(${Background})`
  
}
useEffect(() => {
  window.scrollTo(0, 0);
}, []);



  const formik=useFormik({
    initialValues:{
      Name:'',
      Query:'',
      Email:'',
      Phone:'',
      Message:'',
  
    },

    validationSchema: yup.object({
      Name: yup.string().min(2, "Too Short!").max(20, 'Name should not exceed 20 Characters').required('Please Enter Name'),
      Query: yup.string().required('Please Select Query type'),   
      Email: yup.string().email().required('Please Enter Email'),  
      Phone: yup.string().required('Please Enter Phone Number').max(10, 'Phone number must be atleast 10 numbers'),
      Message: yup.string().required('Please Enter Message').min(10, 'Message should not less 10 Characters'),
         }),
    onSubmit:values=>{
      alert(JSON.stringify(values));

    }

  });



const Show=(e)=>{
   e.preventDefault()
   setInputValue(e.target.value)
 
}


  return (
    <>
    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
    <section className="wrapper image-wrapper bg-image  text-white bg-lightblue" style={mystyle} >
      <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-1 mb-3 text-black">Contact Us</h1>
            <nav className="d-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb text-black">
                <li className="breadcrumb-item"><NavLink to='/' className='hover_color'>Home</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="wrapper bg-light angled upper-end">
      <div className="container pb-11">
        <div className="row mb-14 mb-md-16">
          <div className="col-xl-10 mx-auto mt-n19">
            <div className="card">
              <div className="row gx-0">
                <div className="col-lg-6 align-self-stretch">
                  <div className="map map-full rounded-top rounded-lg-start">
                    <iframe className="gmap_iframe"  scrolling="no"  src="https://maps.google.com/maps?q=Omaha, NE USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe> 
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-10 p-md-11 p-lg-14">
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
                      </div>
                      <div className="align-self-start justify-content-start">
                        <h5 className="mb-1">Address</h5>
                        <address> Omaha, NE USA  </address>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-envelope"></i> </div>
                      </div>
                      <div>
                        <h5 className="mb-1">E-mail</h5>
                        <p className="mb-0"><a href="mailto:RogueSupport@roguerecruit.com" className="text-primary text-break"><span  className="footer_email" >RogueSupport@roguerecruit.com</span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
            <p className="lead text-center mb-10">Reach out to us from our contact form and we will get back to you shortly.</p>
            <form className="contact-form needs-validation" method="post" action="" onSubmit={formik.handleSubmit}>
              <div className="messages"></div>
              <div className="row gx-4">
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Jane" 
                    {...formik.getFieldProps("Name")} />
                    <label htmlFor="form_name"> Name *</label>
                    <div className="valid-feedback"> Looks good! </div>
                    {formik.touched.Name && formik.errors.Name ? <p className='red'>{formik.errors.Name}</p> : null}
         
                  </div>
                </div>
                <div className="col-md-6">
                <div className="form-select-wrapper mb-4">
                    <select className="form-select" id="form-select" name="Query" {...formik.getFieldProps("Query")}>
                      
                      <option value="">Select query for</option>
                      <option value="All">All</option>
                      <option value="Athlete">Athlete</option>
                      <option value="Coach">Coach</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> Please select a department. </div>
                    {formik.touched.Query && formik.errors.Query ? <p className='red'>{formik.errors.Query}</p> : null}
         
                  </div>
                  
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input id="form_email" type="email" name="email" className="form-control" placeholder="jane.doe@example.com" {...formik.getFieldProps("Email")}/>
                    <label htmlFor="form_email">Email *</label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> Please provide a valid email address. </div>
                    {formik.touched.Email && formik.errors.Email ? <p className='red'>{formik.errors.Email}</p> : null}
         
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input id="phone_number" type="number" name="phone" className="form-control" placeholder="Doe" {...formik.getFieldProps("Phone")}/>
                    <label htmlFor="phone_number">Phone Number *</label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> Please enter your phone number. </div>
                    {formik.touched.Phone && formik.errors.Phone ? <p className='red'>{formik.errors.Phone}</p> : null}
         
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-4">
                    <textarea id="form_message" name="message" className="form-control text_height" placeholder="Your message"  {...formik.getFieldProps("Message")}></textarea>
                    <label htmlFor="form_message">Message *</label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback"> Please enter your messsage. </div>
                    {formik.touched.Message && formik.errors.Message ? <p className='red'>{formik.errors.Message}</p> : null}
                  </div>
                </div>
                <div className="col-12 text-center">
                  <input type="submit" className="fs-18 btn btn-lg btn-outline-grape rounded mb-3" value="Send message"/>
                  
                  <p className="text-muted"><strong>*</strong> These fields are required.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </Animated>
    </>
  );
}

export default Contact;
