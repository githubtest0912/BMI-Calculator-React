import React from "react";
import image from "./Image/office.jpg";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={image} className="w-75 mt-3"></img>
            </div>

            <div className="col-md-6">
              <h3 className="fs-5 mb-2">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50"/>
              <p className="lead mb-4">
                A company is a legal entity created by an individual or group of
                individuals to conduct a business enterprise, which is usually
                the sale of a business or product that is needed or desired by
                society. Companies have been around for hundreds of years and
                there are many different types, depending on the size, scope,
                and goals of each.
                <br /> <br />
                 Companies have been around for hundreds of years and
                there are many different types, depending on the size, scope,
                and goals of each.
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
              <button className="btn btn-outline-primary rounded-pill mx-2 px-4 py-2">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
