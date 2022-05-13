import React from "react";
import "./About.css";
import Testimonials from "./Testimonials";

export const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-title">About</div>
        <div className="mission-statement">
          <p>
            Squashable is based on an industry standard practice of tracking
            issues that arise in software engineering. It was founded in early
            2022 by a self-taught software engineer who was pursuing his passion
            of creating software and brining instantaneous value to the world.
          </p>
          <br />
          <p>
            What makes Squashable so appealing to tech companies is the ability
            to track issues in a real time environment. This is achieved by
            using a web application that allows users to create issues as they
            arise and assign them to themselves or a team member. While also
            receiving instant updates on the status of the issue. It is an
            excellent tool for collaboration!
          </p>
          <br />
          <p>
            Squashable is not solely used by developers, it is also used by
            Project Managers, Designers and everyone else involved in the
            lifecycle of a project!
          </p>
        </div>{" "}
        <Testimonials />
      </div>
    </>
  );
};
