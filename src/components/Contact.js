import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';

const Contact = () => {
    const [formdata, setformdata] = useState({name:"",email:"",query:"",subjects:''});
    const subjects=['PHP',"Wordpress",'Python',"React","Javascript",'SEO & Digital Marketing','Testing','Full Stack Development'];
    const handlechange=(e)=>{
         let x=e.target.value;
         let c=e.target.name;
         
         setformdata({...formdata,[c]:x});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
     console.log(formdata);
    }
    return (
        <>
            <Breadcrumb page="Contact Us" />
            <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                <h1 class="mb-5">Contact For Any Query</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h5>Get In Touch</h5>
                    <p class="mb-4">You Query.</p>
                    <div class="d-flex align-items-center mb-3">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: "50px", height:"50px"}}>
                            <i class="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="text-primary">Office</h5>
                            <p class="mb-0">Sector 63 Noida</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: "50px", height:"50px"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="text-primary">Mobile</h5>
                            <p class="mb-0">+91 8447311900</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: "50px", height:"50px"}}>
                            <i class="fa fa-envelope-open text-white"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="text-primary">Email</h5>
                            <p class="mb-0">info@bharatdigitalmarketing.in</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <iframe class="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.639605917999!2d77.33670327715821!3d28.59497945149464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51410a859a7%3A0x8fca435f53c266b9!2sESIC%20Model%20Hospital!5e0!3m2!1sen!2sin!4v1686503861292!5m2!1sen!2sin"
                        frameborder="0" style={{minHeight: "300px", border:"0"}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                        
                </div>
                <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" name="name" value={formdata['name']} class="form-control" onChange={(e)=>handlechange(e)} id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" value={formdata['email']} onChange={(e)=>handlechange(e)} name="email" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <select name="subjects" value={formdata['subjects']} class="form-control" onChange={(e)=>handlechange(e)} >
                                        <option>Select Subject</option>
                                    {subjects.map((el)=>(<option value={el}>{el}</option>))}
                                    </select>
                                    
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" value={formdata['query']} onChange={(e)=>handlechange(e)} name="query" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" onClick={(e)=>handleSubmit(e)} type="submit" >Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Contact;
