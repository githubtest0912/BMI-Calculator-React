import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          {/* // cards */}
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
               
                <div className="card-body text-center">
                    {/* // icon,color -> text-primary  and its size -> fa-4x*/}
                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>

                  <h4 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h4>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content
                  </p>
                  
                </div>
              </div>
            </div>

            {/* // second card */}

            <div className="col-md-4">
              <div className="card p-3">
               
                <div className="card-body text-center">
                    {/* // icon,color -> text-primary  and its size -> fa-4x*/}
                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>

                  <h4 className="card-title mb-3 fs-4 fw-bold">Fully responsive layout</h4>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content
                  </p>
                  
                </div>
              </div>
            </div>

{/* // third card */}
<div className="col-md-4">
              <div className="card p-3">
               
                <div className="card-body text-center">
                    {/* // icon,color -> text-primary  and its size -> fa-4x*/}
                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>

                  <h4 className="card-title mb-3 fs-4 fw-bold">User Experience</h4>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content
                  </p>
                  
                </div>
              </div>
            </div>
            {/* //fourth card */}

            <div className="col-md-4 mt-5">
              <div className="card p-3">
               
                <div className="card-body text-center">
                    {/* // icon,color -> text-primary  and its size -> fa-4x*/}
                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>

                  <h4 className="card-title mb-3 fs-4 fw-bold">Creative webdesign</h4>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content
                  </p>
                  
                </div>
              </div>
            </div>

{/* // fifth card */}
<div className="col-md-4  mt-5">
              <div className="card p-3">
               
                <div className="card-body text-center">
                    {/* // icon,color -> text-primary  and its size -> fa-4x*/}
                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>

                  <h4 className="card-title mb-3 fs-4 fw-bold">Unique and clean</h4>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content
                  </p>
                  
                </div>
              </div>
            </div>

{/* // sixth card */}
<div className="col-md-4  mt-5">
              <div className="card p-3">
               
                <div className="card-body text-center">
                    {/* // icon,color -> text-primary  and its size -> fa-4x*/}
                    <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>

                  <h4 className="card-title mb-3 fs-4 fw-bold">Creative ideas</h4>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content
                  </p>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
