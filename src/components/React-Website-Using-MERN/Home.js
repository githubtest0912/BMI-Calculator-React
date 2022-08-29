import React from "react";
import './style.css'
const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center">
                Feels the Fresh Business Perspective
              </h1>
              <p className="lead text-center fs-4 mb-5">
                A business is defined as an organization or enterprising entity
                engaged in commercial, industrial, or professional activities.
                Businesses can be for-profit entities or non-profit
                organizations. Business types range from limited liability
                companies to sole proprietorships, corporations, and
                partnerships.
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-warning me-4 rounded-pill px-4 py-2 ">Get Quote</button>
                <button className="btn btn-warning rounded-pill px-4 py-2 ">Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
