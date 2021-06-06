import React from "react";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <p>
          Having your own business, whether small or big, is a great way to make
          money while being your own boss; we can all agree about that. Whether
          you already own a business or planning to start one, you should
          already know by now that you need a website of your own. Millions of
          business are started every year, so in a sea of ordinary, let your
          website
          <em>
            <strong>stand out</strong>
          </em>{" "}
          of the competition.
        </p>
        <h2 className="center">Who am I?</h2>
        <div id="aboutMe">
          <p>
            My name is Bavly Shehata, a full-stack web developer from Egypt.
            When I'm not developing websites, I'm studying for my bachelor's,
            learning Spanish, or working out. <br />
            You probably ended up here either from my
            <a
              href="https://www.linkedin.com/in/bavshehata/"
              target="_blank"
              rel="noreferrer"
            >
              linkedIn
            </a>
            or Google. Either way, it means that you have a business that you
            are passionate about, an idea that you want to see grow. You may
            have a lot of support, or maybe you are the only one believing in
            your business at the moment. I can relate to that, as I turned down
            a great engineering degree (Which believe me, is a pretty difficult
            thing to do in Egypt), for a Computer Science degree. I believed in
            myself, followed my passion, and never regretted it. I want to help
            you do the same. You have a great business to share with the world?
            <a href="#contact" className="lets">
              Let's do it!
            </a>
            .
          </p>
          <a
            href="/assets/about/openPhotoSmaller.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/about/openPhotoSmaller.jpg" alt="That's me" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
