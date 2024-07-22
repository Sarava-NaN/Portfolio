import React from "react";
import "./about.css";
import She from "../../assets/me-about.jpg";
import he from "../../assets/PROFILE_PIC.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={he} alt="Pic-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small>2+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <a
              className="project_links"
              href="https://github.com/Sarava-NaN?tab=repositories"
              target="_blank"
            >
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>40+ Completed</small>
              </article>
            </a>
          </div>

          <p>
            Hello! I'm saravanan, a passionate frontend developer dedicated to
            bringing digital ideas to life through clean code and captivating
            user interfaces. With a strong foundation in HTML, CSS, and
            JavaScript, I thrive on turning design concepts into interactive
            realities...
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
