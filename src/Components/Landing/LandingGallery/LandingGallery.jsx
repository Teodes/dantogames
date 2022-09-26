import React from "react";
import { Container, Image } from "react-bootstrap";

function LandingGallery() {
  return (
    <div className="LogoTrans w-100">
      <h3 className="fs-1 strong fw-bolder text-center">GALLERY</h3>
      <h4 className="text-center mb-0">¡Have a look!</h4>
      <h4 className="text-center">
        Screenshots, work in progress, and much more.
      </h4>
      <Container className="d-flex flex-column py-2 gap-3">
        <div className="w-75">
          <Image
            fluid
            rounded
            src="https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1599736700/content-items/005/736/763/Lowpoly-original.png?1599736700"
          />
        </div>
        <div className="w-75 align-self-end">
          <Image
            fluid
            rounded
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/28534d67126595.5b2eb9ad6908e.jpg"
          />
        </div>
        <div className="w-75">
          <Image
            fluid
            rounded
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c203b554558117.5ca13f54395de.png"
          />
        </div>
        <div className="w-75 align-self-end">
          <Image
            fluid
            rounded
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/00e5e810218663.58bec04f061fd.jpg"
          />
        </div>
      </Container>
    </div>
  );
}

export default LandingGallery;
