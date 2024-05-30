import React from 'react';
import Breadcrumb from './Breadcrumb';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import Team from './Team';
const About = () => {
    return (
        <>
        <Breadcrumb page="About" />
        <div class="container-xxl py-5">
        <div class='container'>
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">About Us</h6>
                <h1 class="mb-5">Master the art of programming with our industry-leading coaching.</h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    
                      <p>Expert Instructors: Our instructors are seasoned professionals with extensive industry experience. They are passionate about teaching and dedicated to providing you with the guidance and support you need to succeed.</p>
<p>
Comprehensive Curriculum: Our classes cover a wide range of programming languages and concepts, ensuring that you gain a solid foundation in computer programming. From Python and JavaScript to C++ and Java, you'll learn the languages that are in high demand in today's job market.</p>
<p>
Hands-on Learning: We believe in learning by doing. Our classes provide hands-on coding exercises and projects that allow you to apply what you've learned in real-world scenarios. You'll have the opportunity to build practical applications and develop a portfolio of projects to showcase your skills.
</p></div>
            </div>
          
        </div>
        </div>
        <ServicesSection />	
        <AboutSection />
        <Team />
       </>
    );
}

export default About;
