import React from "react";
import Feature from "./Feature";
import PropTypes from "prop-types";
import {
  Col
} from 'reactstrap';
const features = props => {
  return (
    <Col md="4">
      {props.features.map((feature, index) => {
        return (
          <Feature
            key={feature.id}
            id={feature.id}
            type={feature.type}
            imageUrl={feature.imageUrl}
            url={feature.url}
          />
        );
      })}
    </Col>
  );
};

features.propTypes = {
  features: PropTypes.arrayOf(Object)
};

export default features;
