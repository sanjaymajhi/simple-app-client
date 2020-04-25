import React from "react";
import { Jumbotron } from "react-bootstrap";

function Nav(props) {
  return (
    <Jumbotron>
      <h1>{props.heading}</h1>
    </Jumbotron>
  );
}

export default Nav;
