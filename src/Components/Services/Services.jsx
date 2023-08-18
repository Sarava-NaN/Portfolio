import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Service</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SASS/SCSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JAVASCRIPT</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>REACT JS</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Need A Website?</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface & Experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Production & Maintenance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Real time Programming</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB Development */}
        <article className="service">
          <div className="service__head">
            <h3>Back-End Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Node JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PHP</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>My SQL</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>ANGULAR JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mongodb</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  );
};

export default Services;
