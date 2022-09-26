import React from "react";
import { Button, Container } from "react-bootstrap";

function About() {
  return (
    <Container>
      <h2 className="text-center">¿What is Danto Games?</h2>
      <h4 className="text-center">
        I'm Daniel, the creator of Danto Games, and to me, this is more than
        just a studio. It's the result of decades of enjoying video games. And
        my goal is give you the same beautiful experiences that I had.
      </h4>
      <Button className="rounded-5">SEE MORE</Button>
    </Container>
  );
}

export default About;
