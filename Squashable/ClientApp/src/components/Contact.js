import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-title">Contact</div>
      <div className="contact-form-background">
        <div class="mb-4">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Your email address"
          ></input>
        </div>
        <div class="mb-4">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Subject"
          ></input>
        </div>
        <div class="mb-4">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
        <div class="mb-4">
          <button type="submit" class="btn contact-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
