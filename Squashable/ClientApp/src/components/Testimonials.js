import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonials.css";
import Lumburgh from "../media/Testimonials/Lumburgh-modified.png";
import Sophia from "../media/Testimonials/Sophia-Android-modified.png";
import Alien from "../media/Testimonials/Alien-modified.png";
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() {
  return (
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
            This app is incredible, it helped my creators keep track of so many
            issues when I was in development. Thanks Squashable!
          </p>
        </div>
      </div>

      <div>
        <img src={Alien} alt="testimonial-alien" />
        <div className="myCarousel">
          <h3>Mr. Al Ien</h3>
          <h4>Sovereign Citizen/Tech Enthusiast</h4>
          <p>
            I wish we had this technology on my pla...I mean in my area, it
            would make debugging interdimensional travel so much easier! I
            mean...what?
          </p>
        </div>
      </div>

      <div>
        <img src={Lumburgh} alt="testimonial-lumburgh" />
        <div className="myCarousel">
          <h3>Bill</h3>
          <h4>Tech Boss</h4>
          <p>
            Yeah....I'm gonna need to find the engineer who made this app and
            have him come work for me ASAP....mmmkay?
          </p>
        </div>
      </div>
    </Carousel>
  );
}
