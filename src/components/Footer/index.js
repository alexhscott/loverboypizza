import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Lover Boy Pizza © </h2>
      <p>
        <ul>
          <a href="https://www.yelp.com/biz/lover-boy-pizza-no-title">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          {/* <a href="https://www.linkedin.com/in/alexhscott/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a> */}
        </ul>
      </p>
    </footer>
  );
}

export default Footer;