import React from 'react';

const AboutSection = () => {
    return (
<div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{objectFit: 'cover'}} />
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">Welcome to the Programming</h6>
                    <h1 class="mb-4">Welcome to NextGen Coding Classes</h1>
                    <p class="mb-4">Unlock the world of coding with our comprehensive programming coaching.</p>
                    <p class="mb-4">At our programming class, we believe in empowering individuals with the knowledge and skills to unlock the world of coding. Whether you're a beginner taking your first steps into the programming world or an experienced developer looking to enhance your skills, our classes offer a comprehensive learning experience.</p>
                    <p class="mb-4">Expert Instructors: Our instructors are seasoned professionals with extensive industry experience. They are passionate about teaching and dedicated to providing you with the guidance and support you need to succeed.</p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        {/* <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div> */}
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Updated Syllabus</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Live Projects.</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online/Offline Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Course Certificate</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Study Material & Resume Help</p>
                        </div>
                    </div>
                    <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
	    );
}

export default AboutSection;
