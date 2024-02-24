import { ReactComponent as BgBadge } from "../home/assets/bg-badge.svg";
import React, { useState } from "react";
import { keyframes, css } from "styled-components";
import "./attribute.css";
function AttributeCard(props) {
  // prop json ==> {imagePath: 'https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', AttributeText:"Creative Agency", badge:{imagePath:"https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}, altName:"altName"};
  const [isBadgeVisible, setBadgeVisibility] = useState(true);
  const fadingAnimation = isBadgeVisible ? "fadeIn" : "fadeOut";
  props = props.commonProps;
  return (
    <div
      className="attributePanel"
      onMouseEnter={() => setBadgeVisibility(false)}
      onMouseLeave={() => setBadgeVisibility(true)}
    >
      <img
        src={props.imagePath}
        className="attributePanelBg"
        alt={props.altName}
      />
      <div className="attributePanelFeature">
        <div className="attributeText">
          <div className="attributeTextBg"></div>
          <span className="attributeTextContent"> {props.AttributeText}</span>
        </div>
        <div className={`attributeBadge ${fadingAnimation}`}>
          <BgBadge className="badgeBg" />
          <img
            src={props.badge.imagePath}
            className="badgeLogo"
            alt={props.badge.altName}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AttributeCard;
