import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../logo.svg";

function LandingLogo() {
  return (
    <div>
      <div className="LogoContainer">
        <div className="imgBg"></div>

        <img className="Logo" src={logo} alt="Logo" />

        <div className="icons">
          <div className="newsLink">
            <p>News</p>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </div>
          <div className="gamesLink">
            Games
            <FontAwesomeIcon icon={faAnglesLeft} />
          </div>
          <div className="galleryLink">
            <FontAwesomeIcon icon={faAnglesRight} />
            Gallery
          </div>
          <div className="contactLink">
            <FontAwesomeIcon icon={faAnglesRight} />
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingLogo;
