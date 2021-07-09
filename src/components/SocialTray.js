import React from "react";
import { IconContext } from "react-icons";
import { RiSpotifyLine, RiTwitterLine } from "react-icons/ri";
import { CgInstagram } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";

const SocialTray = () => {
  return (
    <div className="socialTray">
      <a href="https://www.facebook.com/coltrincompositions/">
        <FiFacebook className="socialTray__icon" size="55px" />
      </a>
      <a href="https://www.instagram.com/coltrincompositions/">
        <CgInstagram className="socialTray__icon" size="55px" />
      </a>
      <a href="https://open.spotify.com/artist/6SMg7GcbjUTdheeGpRXn7L?si=eVZD7Q4JQm2w1bjFDGVA7A&dl_branch=1">
        <RiSpotifyLine className="socialTray__icon" size="55px" />
      </a>
      <a href="https://www.twitter.com/">
        <RiTwitterLine className="socialTray__icon" size="55px" />
      </a>
    </div>
  );
};

export default SocialTray;
