import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>

      <main className="contact-container">
        <div className="field-container">
          <input type="text" placeholder="Name" className="input-field" />
          <input
            type="text"
            placeholder="E-mail Address"
            className="input-field"
          />
          <textarea
            type="comment"
            placeholder="Ask us anything!"
            className="input-field"
          />
        </div>
        <div className="button-container">
          <button>Submit</button>
        </div>
      </main>
    </>
  );
};

export default Contact;
