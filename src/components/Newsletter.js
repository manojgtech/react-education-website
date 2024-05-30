import React from 'react';

const Newsletter = () => {
    return (
        <section class="ftco-section ftco-no-pb ftco-no-pt">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="bg-secondary w-100 rounded p-4">
                      <div class="row">
                        <div class="col-md-7 d-flex align-items-center">
                          <h2 class="mb-3 mb-sm-0" style={{color:'black', fontSize: '18px'}}>Subcribe for our weekly tips</h2>
                        </div>
                        <div class="col-md-5 d-flex align-items-center">
                          <form action="#" class="subscribe-form">
                            <div class="form-group d-flex">
                              <input type="text" class="form-control" placeholder="Enter email address" />
                              <input type="submit" value="Subscribe" class="submit px-3" />
                            </div>
                          </form>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>
    );
}

export default Newsletter;
