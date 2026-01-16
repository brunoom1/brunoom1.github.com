import React from "react";
import { Col } from "react-bootstrap";

const SocialLink = ({ href, Icon, label, ariaLabel }) => {
  return (
    <li className="social-icons">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
        aria-label={ariaLabel || label}
        title={label}
      >
        <Icon />
      </a>
    </li>
  );
};

export default SocialLink;
