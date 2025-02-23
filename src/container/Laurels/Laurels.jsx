import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../components/constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#C8887C" }}>
        {title}
      </p>
      <p className="p__cormorant"> {subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg3 app__wrapper section__padding" id="awards">
    <div className="app_wrapper-img">
      <img src={images.logo} alt="logo" />
    </div>
    <div className="laurels__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((awards) => (
          <AwardCard award={awards} key={awards.title} />
        ))}
      </div>
    </div>

    <div className="laurels__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
