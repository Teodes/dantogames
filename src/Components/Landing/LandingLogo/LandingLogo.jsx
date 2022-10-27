import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../logo.svg";
import { useState } from "react";

function LandingLogo() {
  const [active, setActive] = useState("");
  function triggerAnimation(e) {
    // console.log(e.target.parentElement.className);
    setActive(e.currentTarget.className);
  }

  return (
    <div>
      <div className="LogoContainer">
        <div className="imgBg"></div>

        <img
          className={active ? `${active} Logo` : "Logo"}
          src={logo}
          alt="Logo"
          // width={"5000px"}
        />

        <div className="icons">
          <div className="newsLink" onClick={triggerAnimation}>
            <p>News</p>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </div>
          <div className="gamesLink" onClick={triggerAnimation}>
            <p>Games</p>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </div>
          <div className="galleryLink" onClick={triggerAnimation}>
            <FontAwesomeIcon icon={faAnglesRight} />
            <p>Gallery</p>
          </div>
          <div className="contactLink" onClick={triggerAnimation}>
            <FontAwesomeIcon icon={faAnglesRight} />
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingLogo;
