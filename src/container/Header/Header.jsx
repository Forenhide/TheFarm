import React from "react";

import { images } from "../../components/constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__header-texts">
      <p className="app__header-text app__header-text-bar">#Bar #TheFarm</p>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>

      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>

    <div className="scroll_container">
      <div className="scroll_container_dash scroll__container-dash">
        <img src={images.fade} alt="fade" />
      </div>
      <div className="scroll_container-text">Scroll</div>
    </div>
  </div>
);
export default Header;
