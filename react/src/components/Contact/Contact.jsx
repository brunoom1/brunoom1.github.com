import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactField from "./ContactField";
import StatusMessage from "./StatusMessage";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_niilndo",
          "template_6z5idye",
          form.current,
          "VOBt6Akm1LhI5CZG-"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setFormData({});
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <ContactField
              label="Name"
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name || ""}
              onChange={handleChange}
            />
            <ContactField
              label="Email"
              type="email"
              name="reply_to"
              placeholder="Your Email"
              value={formData.reply_to || ""}
              onChange={handleChange}
            />
            <ContactField
              label="Message"
              type="textarea"
              name="message"
              placeholder="Your Message"
              value={formData.message || ""}
              onChange={handleChange}
            />
            <StatusMessage done={done} notDone={notDone} />
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;