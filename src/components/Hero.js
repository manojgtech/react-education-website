import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import 'animate.css';
import bg1 from "../img/bg_1.jpg";
import bg2 from "../img/bg_2.jpg";
import bg3 from "../img/bg_3.jpg";
const Hero = () => {
    return (
        <>
        <div class="hero-wrap">
        <OwlCarousel items={1}  
          className="home-slider"  
          loop  
          nav
		  autoplay
		  rewind  
          margin={0} >  
           <div class="owl-carousel-item position-relative">
                <img class="img-fluid" src="img/carousel-1.jpg" alt="" />
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-10">
                                <h5 class="text-primary text-uppercase mb-3 animated slideInDown">Best Classes</h5>
                                <h1 class="display-3 text-white animated slideInDown">Accelerate your programming journey with our expert-led coaching programs.</h1>
                                {/* <p class="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a> */}
                                <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class="owl-carousel-item position-relative">
                <img class="img-fluid" src="img/carousel-2.jpg" alt="" />
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-10">
                                <h5 class="text-primary text-uppercase mb-3 animated slideInDown">Updated syllabus as per industry</h5>
                                <h1 class="display-3 text-white animated slideInDown">Master the art of programming with our industry-leading coaching.</h1>
                                {/* <p class="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a> */}
                                <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	      
      </OwlCarousel>  
	  </div>   
        </>
    );
}

export default Hero;
