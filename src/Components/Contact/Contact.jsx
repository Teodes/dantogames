import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.scss";

function Contact() {
  return (
    <Container>
      <h2>CONTACT</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="d-none">Your Name</Form.Label>
              <Form.Control
                className="rounded-1 text-white"
                type="text"
                placeholder="Your Name"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-none">Email address</Form.Label>
              <Form.Control
                className="rounded-1 "
                type="email"
                placeholder="Your Email"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label className="d-none">Subject</Form.Label>
          <Form.Control
            className="rounded-1"
            type="text"
            placeholder="Subject"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label className="d-none">Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Message" />
          <Form.Text className="text-white-50">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="rounded-5">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
