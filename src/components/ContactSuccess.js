import React, { useEffect } from "react";

const ContactSuccess = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/../contactSuccessPrompt.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  if (props.ContactSuccess)
    return (
      <article class="contactConfirmation">
        <div class="container">
          <span class="icon-check-circle-o"></span>
          <h2>Your message has been received!</h2>
          <p>
            Congratulations, you've taken your first step towards a unique
            online presence. Please expect a very soon reply, and let's show
            your business to the world!
          </p>
          <button class="btn">Back to website</button>
        </div>
      </article>
    );
  else return <></>;
};
export default ContactSuccess;
