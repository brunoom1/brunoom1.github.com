import React from "react";
import { Col } from "react-bootstrap";

const SkillItem = ({ Icon, label }) => {
  return (
    <Col xs={4} md={2} className="tech-icons" title={label}>
      <Icon />
    </Col>
  );
};

export default SkillItem;
