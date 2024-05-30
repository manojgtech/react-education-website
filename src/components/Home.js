import React from 'react';
 import Hero from './Hero';

import AboutSection from './AboutSection';
 import ServicesSection from './ServicesSection';
 import Categories from './Categories';
 import PopularCourses from './PopularCourses';
import Team from './Team';
import 'animate.css'; 
const Home = () => {
    return (
        <>
        <Hero />
        <div class="container-xxl py-5">
        <div class='container'>
        
        
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Join Us</h6>
                <h1 class="mb-5"> 
                    Why Choose Our Programming Classes?
                    </h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                   
<p>
Small Class Sizes: To ensure personalized attention and a supportive learning environment, we keep our class sizes small. This enables our instructors to provide individualized feedback and address any questions or challenges you may have along the way.
</p>
<p>
Flexibility: We understand that everyone has different schedules and commitments. That's why we offer flexible class options, including evening and weekend classes. Whether you prefer to attend in-person or participate in live online sessions, we have a class format that suits your needs.
</p>
<p>
Career Support: Our commitment to your success extends beyond the classroom. We provide career support and guidance to help you navigate the job market successfully. From resume building and interview preparation to networking opportunities, we're here to assist you in launching or advancing your career in programming.
</p>
<p>
Community: Joining our programming class means becoming part of a vibrant and supportive community of fellow learners. Collaborate on projects, share ideas, and connect with like-minded individuals who share your passion for coding.
</p>
<p>
Affordable Pricing: We believe that high-quality programming education should be accessible to all. Our classes are competitively priced, making them affordable for students at any stage of their learning journey.
</p>
<p>
Whether you're interested in web development, data analysis, mobile app development, or software engineering, our programming classes will equip you with the skills you need to succeed in today's digital world.
</p>
<p>
Take the first step towards mastering programming. Enroll in our classes today and unlock endless possibilities through the power of code!
</p>
<p>
Contact us now to learn more or to enroll in our upcoming classes. We look forward to helping you embark on an exciting programming journey!</p></div>
            </div>
          
        </div>
        </div>
         <ServicesSection />
		<AboutSection />
        <Categories />
        <PopularCourses />
        {/* <Team /> */}
{/* <WhySection />
<Newsletter />
    <PlansSection />  */}
        </>
    );
}
export default Home;
