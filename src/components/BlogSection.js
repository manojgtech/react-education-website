import React from 'react';

const BlogSection = () => {
    return (
        <section class="ftco-section" >
      <div class="container">
        <div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center animate__animated animate__bounce animate__slow">
            <h2>Latest news from our blog</h2>
            <span class="subheading">News &amp; Blog</span>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-md-4 d-flex animate__animated animate__bounce animate__slow">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20 rounded"  style={{background: `url(${bg1}) no-repeat`}}>
              </a>
              <div class="text mt-3">
              	<div class="meta mb-2">
                  <div><a href="#">January 30, 2020</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
                </div>
                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex animate__animated animate__bounce animate__slow">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20 rounded"  style={{background: `url(${bg2}) no-repeat`}}>
              </a>
              <div class="text mt-3">
              	<div class="meta mb-2">
                  <div><a href="#">January 30, 2020</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
                </div>
                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex animate__animated animate__bounce animate__slow">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20 rounded"  style={{background: `url(${bg3}) no-repeat`}}>
              </a>
              <div class="text mt-3">
              	<div class="meta mb-2">
                  <div><a href="#">January 30, 2020</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
                </div>
                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		
    );
}

export default BlogSection;
