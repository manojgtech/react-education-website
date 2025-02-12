import React from 'react';

const Categories = () => {
    return (
        <div>
            <div class="container-xxl py-5 category">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Programming Classes</h6>
                <h1 class="mb-5">Available Courses</h1>
            </div>
            <div class="row g-3">
                <div class="col-lg-7 col-md-6">
                    <div class="row g-3">
                        <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a class="position-relative d-block overflow-hidden" href="/digital-marketing">
                                <img class="img-fluid" src="img/cat-1.jpg" alt="" />
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 class="m-0">Digital Marketing</h5>
                                    <small class="text-primary"> 1 month</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a class="position-relative d-block overflow-hidden" href="/python">
                                <img class="img-fluid" src="img/cat-2.jpg" alt="" />
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 class="m-0">Python</h5>
                                    <small class="text-primary">3 months</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a class="position-relative d-block overflow-hidden" href="/reactjs">
                                <img class="img-fluid" src="img/cat-3.jpg" alt="" />
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 class="m-0">React Js</h5>
                                    <small class="text-primary">2 months</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}}>
                    <a class="position-relative d-block h-100 overflow-hidden" href="/php_laravel">
                        <img class="img-fluid position-absolute w-100 h-100" src="img/cat-4.jpg" alt="" style={{objectFit: 'cover'}} />
                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                            <h5 class="m-0">PHP & Laravel</h5>
                            <small class="text-primary">3 Month</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Categories;
