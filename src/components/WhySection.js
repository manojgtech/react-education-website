import React from 'react';
import  bg from '../img/image_1.jpg';
const WhySection = () => {
    return (
        <section class="ftco-section bg-light">
    	<div class="container">
    		<div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center">
            <h2>Why coaching work?</h2>
            <span class="subheading">Other Services</span>
          </div>
        </div>
    		<div class="row d-flex no-gutters">
    			<div class="col-md-6 d-flex">
    				<div class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end mb-4 mb-sm-0" style={{background: `url(${bg}) no-repeat`}}>
    					<a href="https://vimeo.com/45830194" class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
    						<span class="fa fa-play"></span>
    					</a>
    				</div>
    			</div>
    			<div class="col-md-6 pl-md-5 py-md-5 animate__animated animate__bounce animate__faster">
    				<div class="services-2 w-100 d-flex">
    					<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-account"></span></div>
    					<div class="text pl-4">
    						<h4>Better Guidance</h4>
    						<p>We can help students prepare for various exams, tests, and competitions by providing them with relevant syllabus, tips, notes, and solutions.</p>
    					</div>
    				</div>
    				<div class="services-2 w-100 d-flex animate__animated animate__bounce animate__faster">
    					<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-skills"></span></div>
    					<div class="text pl-4">
    						<h4>Expertise</h4>
    						<p>We can help students retain what they learn by offering opportunities to talk about, apply, and practice their learning in different contexts</p>
    					</div>
    				</div>
    				<div class="services-2 w-100 d-flex animate__animated animate__bounce animate__faster">
    					<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-performance"></span></div>
    					<div class="text pl-4">
    						<h4>Speed</h4>
    						<p>Learning with better speed</p>
    					</div>
    				</div>
    				<div class="services-2 w-100 d-flex animate__animated animate__bounce animate__faster">
    					<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-event"></span></div>
    					<div class="text pl-4">
    						<h4>Industry knowledge</h4>
    						<p>Industry knowlegde is best thing which can help you most.</p>
    					</div>
    				</div>
	        </div>
        </div>
    	</div>
    </section>

    );
}

export default WhySection;
