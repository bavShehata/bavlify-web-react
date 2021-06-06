import React, { useState } from "react";
import ContactSuccess from "./ContactSuccess";

const ContactForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactSuccessful, setContactSuccessful] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // If the contact is successful
    setContactSuccessful(true);
    // add to database
    // Else
    setContactSuccessful(false);
    // Show errors
  };

  return (
    <article className="contactForm">
      <form onSubmit={(e) => handleSubmit(e)} id="contacting">
        <img src="/assets/hero/logo.svg" alt="Logo" className="logoImg" />
        <div>
          <label htmlFor="fName" id="fNameL">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fName"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lName" id="lNameL">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lName"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="errorPara">Please enter a valid E-mail address</p>
          <p className="suggestionPara">
            Did you mean <span className="suggested"></span>
          </p>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Tell me a bit about your business/idea. What do you have in mind? What do you hope to achieve with a website?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <input
          type="submit"
          name="submit"
          id="submit"
          value="Contact Me"
          className="btn"
        />
      </form>
      <ContactSuccess contactSuccessful={contactSuccessful} />
    </article>
  );
};
export default ContactForm;
