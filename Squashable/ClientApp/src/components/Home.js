import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import DeviceMockups from "../media/device-mockups.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Lumburgh from "../media/Testimonials/Lumburgh-modified.png";
import Sophia from "../media/Testimonials/Sophia-Android-modified.png";
import Alien from "../media/Testimonials/Alien-modified.png";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import "./Footer.css";
import "./About.css";
import "./Contact.css";
import "./Testimonials.css";
import "../App.css";

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  const renderHomepage = () => {
    if (isAuthenticated) {
      return (
        <>
          <div id="home" fluid className="home-container">
            <div className="home-section">
              <div className="landing-page-heading-before-auth">
                <h2>Welcome to</h2>
                <h1>Squashable.</h1>
                <h2>a fully functional bug tracking system.</h2>
                <h3>
                  built for <u className="developer-word">Developers</u>, by{" "}
                  <u className="developer-word">Developers</u>.
                </h3>
              </div>
              <img
                id="device-mockups-before-auth"
                src={DeviceMockups}
                class="img-fluid fade-in-image ms-auto"
                alt="device-mockups"
              ></img>
            </div>
            <Container id="about" className="about-container">
              <div className="about-title">About</div>
              <div className="mission-statement">
                <p>
                  Squashable is based on an industry standard practice of
                  tracking issues that arise in software engineering. It was
                  founded in early 2022 by a self-taught software engineer who
                  was pursuing his passion of creating software and bringing
                  instantaneous value to the world.
                </p>
                <br />
                <p>
                  What makes Squashable so appealing to tech companies is the
                  ability to track issues in a real time environment. This is
                  achieved by using a web application that allows users to
                  create issues as they arise and assign them to themselves or a
                  team member. While also receiving instant updates on the
                  status of the issue. It is an excellent tool for
                  collaboration!
                </p>
                <br />
                <p>
                  Squashable is not solely used by developers, it is also used
                  by Project Managers, Designers and everyone else involved in
                  the lifecycle of a project!
                </p>
              </div>
            </Container>
            <Container id="testimonials" className="testimonials-container">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
              >
                <div>
                  <img src={Sophia} alt="testimonial-android" />
                  <div className="myCarousel">
                    <h3>Sophia</h3>
                    <h4>Android</h4>
                    <p>
                      This app is incredible, it helped my creators keep track
                      of so many issues when I was in development. Thanks
                      Squashable!
                    </p>
                  </div>
                </div>

                <div>
                  <img src={Alien} alt="testimonial-alien" />
                  <div className="myCarousel">
                    <h3>Mr. Al Ien</h3>
                    <h4>Sovereign Citizen/Tech Enthusiast</h4>
                    <p>
                      I wish we had this technology on my pla...I mean in my
                      area, it would make debugging interdimensional travel so
                      much easier! I mean...what?
                    </p>
                  </div>
                </div>

                <div>
                  <img src={Lumburgh} alt="testimonial-lumburgh" />
                  <div className="myCarousel">
                    <h3>Bill</h3>
                    <h4>Tech Boss</h4>
                    <p>
                      Yeah....I'm gonna need to find the engineer who made this
                      app and have him come work for me ASAP....mmmkay?
                    </p>
                  </div>
                </div>
              </Carousel>
            </Container>
            <Container id="contact" className="contact-container">
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
            </Container>
            <Container className="footer-container">
              <div id="social-platforms">
                <div>Visit us on our socials.</div>
                <a class="btn btn-icon btn-facebook" href="#">
                  <i class="fa fa-facebook"></i>
                  <span>Facebook</span>
                </a>
                <a class="btn btn-icon btn-twitter" href="#">
                  <i class="fa fa-twitter"></i>
                  <span>Twitter</span>
                </a>
                <a class="btn btn-icon btn-github" href="#">
                  <i class="fa fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a class="btn btn-icon btn-codepen" href="#">
                  <i class="fa fa-codepen"></i>
                  <span>Codepen</span>
                </a>
                <a class="btn btn-icon btn-linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <div className="footer-text">
                  Squashable. Copyright &copy; 2022. All rights reserved.
                </div>
              </div>
            </Container>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div id="home" fluid className="home-container">
            <div className="home-section">
              <div className="landing-page-heading-before-auth">
                <h2>Welcome to</h2>
                <h1>Squashable.</h1>
                <h2>a fully functional bug tracking system.</h2>
                <h3>
                  built for <u className="developer-word">Developers</u>, by{" "}
                  <u className="developer-word">Developers</u>.
                </h3>
              </div>
              <img
                id="device-mockups-before-auth"
                src={DeviceMockups}
                class="img-fluid fade-in-image ms-auto"
                alt="device-mockups"
              ></img>
            </div>
            <Container id="about" className="about-container">
              <div className="about-section">
                <div className="about-title">About</div>

                <div className="mission-statement">
                  <p>
                    Squashable is based on an industry standard practice of
                    tracking issues that arise in software engineering. It was
                    founded in early 2022 by a self-taught software engineer who
                    was pursuing his passion of creating software and bringing
                    instantaneous value to the world.
                  </p>
                  <br />
                  <p>
                    What makes Squashable so appealing to tech companies is the
                    ability to track issues in a real time environment. This is
                    achieved by using a web application that allows users to
                    create issues as they arise and assign them to themselves or
                    a team member. While also receiving instant updates on the
                    status of the issue. It is an excellent tool for
                    collaboration!
                  </p>
                  <br />
                  <p>
                    Squashable is not solely used by developers, it is also used
                    by Project Managers, Designers and everyone else involved in
                    the lifecycle of a project!
                  </p>
                </div>
              </div>
            </Container>
            <Container id="testimonials" className="testimonials-container">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
              >
                <div>
                  <img src={Sophia} alt="testimonial-android" />
                  <div className="myCarousel">
                    <h3>Sophia</h3>
                    <h4>Android</h4>
                    <p>
                      This app is incredible, it helped my creators keep track
                      of so many issues when I was in development. Thanks
                      Squashable!
                    </p>
                  </div>
                </div>

                <div>
                  <img src={Alien} alt="testimonial-alien" />
                  <div className="myCarousel">
                    <h3>Mr. Al Ien</h3>
                    <h4>Sovereign Citizen/Tech Enthusiast</h4>
                    <p>
                      I wish we had this technology on my pla...I mean in my
                      area, it would make debugging interdimensional travel so
                      much easier! I mean...what?
                    </p>
                  </div>
                </div>

                <div>
                  <img src={Lumburgh} alt="testimonial-lumburgh" />
                  <div className="myCarousel">
                    <h3>Bill</h3>
                    <h4>Tech Boss</h4>
                    <p>
                      Yeah....I'm gonna need to find the engineer who made this
                      app and have him come work for me ASAP....mmmkay?
                    </p>
                  </div>
                </div>
              </Carousel>
            </Container>
            <Container id="contact" className="contact-container">
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
            </Container>
            <Container className="footer-container">
              <div id="social-platforms">
                <div>Visit us on our socials.</div>
                <a class="btn btn-icon btn-facebook" href="#">
                  <i class="fa fa-facebook"></i>
                  <span>Facebook</span>
                </a>
                <a class="btn btn-icon btn-twitter" href="#">
                  <i class="fa fa-twitter"></i>
                  <span>Twitter</span>
                </a>
                <a class="btn btn-icon btn-github" href="#">
                  <i class="fa fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a class="btn btn-icon btn-codepen" href="#">
                  <i class="fa fa-codepen"></i>
                  <span>Codepen</span>
                </a>
                <a class="btn btn-icon btn-linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <div className="footer-text">
                  Squashable. Copyright &copy; 2022. All rights reserved.
                </div>
              </div>
            </Container>
          </div>
        </>
      );
    }
  };

  return <>{renderHomepage()}</>;
};
