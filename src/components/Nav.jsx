import React from "react";
import { Jumbotron } from "react-bootstrap";

function Nav(props) {
  return (
    <Jumbotron style={{ backgroundColor: "#8e7cc3", color: "white" }}>
      <h1>{props.heading}</h1>
    </Jumbotron>
  );
}

export default Nav;
