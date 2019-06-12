import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
    <div>Click an image to earn points, just make sure you don't click on any more than once!
    </div>
  </div>
);

export default Header;