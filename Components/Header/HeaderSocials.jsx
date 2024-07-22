import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="HeaderSocials">
      <a
        href="https://www.linkedin.com/in/saravanan-m-944b9083/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sarava-NaN" target="_blank">
        <FaGithub />
      </a>
      <a href="https://codepen.io/Sarava-NaN" target="_blank">
        <FaCodepen />
      </a>
    </div>
  );
};

export default HeaderSocials;
