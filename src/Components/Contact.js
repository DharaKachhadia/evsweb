import React from "react";
import contactpic from "../Container/images/station.jpg";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us!!</h1>
      <p>
        Whether you have a question for us, or you seek our secret recipes, we
        <br /> would love to hear your
        <br />
        request!.
      </p>
      <section>
        <div>
          <div>
            <img
              src={contactpic}
              alt="logo"
              width="40%"
              height="40%"
              className="contactpicc"
            />
            <div>
              <div>
                <h2>ADDRESS</h2>
                <p>
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div>
                <h2>EMAIL</h2>
                <p>example@email.com</p>
                <h2>PHONE</h2>
                <p>123-456-7890</p>
              </div>
            </div>
          </div>
          <div>
            <h2>Feedback</h2>
            <p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div>
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
