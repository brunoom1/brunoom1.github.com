import React from "react";
import { Col } from "react-bootstrap";

const ProjectCardItem = ({ imgPath, title, description, ghLink, demoLink, isBlog }) => {
  return (
    <Col md={4} className="project-card">
      <div className="project-card-view">
        <img
          src={imgPath}
          alt="card-img"
          style={{
            height: "200px",
            objectFit: "contain",
            borderRadius: "10%",
          }}
        />
        <div style={{ padding: "20px" }}>
          <h4>{title}</h4>
          <p style={{ textAlign: "justify", fontSize: "15px" }}>
            {description}
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={ghLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {isBlog ? "Blog" : "GitHub"}
            </a>
            {!isBlog && demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCardItem;
