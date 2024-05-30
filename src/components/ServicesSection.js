import React from 'react';
import 'animate.css'; 
const ServicesSection = () => {
    return (
      <div class="container-xxl py-5">
      <div class="container">
          <div class="row g-4">
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="service-item text-center pt-3">
                      <div class="p-4">
                          <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                          <h5 class="mb-3">Skilled Instructors</h5>
                          <p>Instructors has several years of industry experience</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div class="service-item text-center pt-3">
                      <div class="p-4">
                          <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                          <h5 class="mb-3">Online/Offline/Weekend Classes</h5>
                          <p>We provide both online and Offline classes</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="service-item text-center pt-3">
                      <div class="p-4">
                          <i class="fa fa-3x fa-home text-primary mb-4"></i>
                          <h5 class="mb-3">Projects</h5>
                          <p>With course ,we make you work on live projects.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div class="service-item text-center pt-3">
                      <div class="p-4">
                          <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                          <h5 class="mb-3">Study materiel</h5>
                          <p>Provide best study materiel & doubt clearing sessions.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
}

export default ServicesSection;
