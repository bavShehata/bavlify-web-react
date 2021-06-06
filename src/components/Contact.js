import React from "react";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Want to get in touch? Fill this form</h2>
        <ContactForm />
        <article className="socialMedia">
          <h3>
            <span className="separator">OR</span>Find me on one of the following
            platforms
          </h3>
          <SocialMedia />
        </article>
      </div>
    </section>
  );
};
export default Contact;
