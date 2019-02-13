import React from "react";

import { Container, Row, Col } from 'reactstrap';
import Inspiration from "./Inspiration";

const inspirations = props => {
  return (
    <Row style={{ marginBottom: "2em" }}>
      {props.inspirations.map((inspiration) => {
        return (
          <Inspiration
            id={inspiration.id}
            url={inspiration.type}
            imageUrl={inspiration.imageUrl}
          />
        );
      })}
    </Row>
  );
};


export default inspirations;
