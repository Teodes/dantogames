import React from "react";
import { Container } from "react-bootstrap";
import LandingGallery from "./LandingGallery/LandingGallery";
import LandingLogo from "./LandingLogo/LandingLogo";
import LandingNews from "./LandingNews/LandingNews";

function LandingContainer() {
  return (
    <>
      <LandingLogo />
      <Container className="text-center py-5">
        <h2>
          <strong>
            Passion, hardwork, and the hope that you will enjoy the ride.
          </strong>
        </h2>
      </Container>
      <LandingGallery />
      <LandingNews />
    </>
  );
}

export default LandingContainer;
