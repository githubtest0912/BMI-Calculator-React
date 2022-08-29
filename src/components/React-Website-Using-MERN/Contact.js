import React from "react";
import image from "./Image/contact.jpg";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
            <h1 className="display-6 text-center mb-4">
              Have Some <b>Question?</b>
            </h1>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        {/* // Image */}
        <div className="row">
          <div className="col-md-6">
            <img src={image} alt="" className="w-75"></img>
          </div>
          {/* // Form */}
          <div className="col-md-6">
            <form action="">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Your email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary ">
                Send Message
                <i className="fa fa-paper-plane ms-2 "></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
