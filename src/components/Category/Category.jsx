import React from "react";
import PropTypes from "prop-types";
import { Col } from 'reactstrap';

const category = props => {

  return (
    <Col md="2">
      <div className="content-home-baju">
        <p>{props.name}</p>
        <img src={props.imageUrl} className="img-responsive" />
      </div>
    </Col>
  );
};

category.PropTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string
};

export default category;

