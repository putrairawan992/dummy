import React from "react";
import PropTypes from "prop-types";
import { Col } from 'reactstrap';

const inspiration = props => {
  return (
    <Col md="12">
      <img src={props.imageUrl} alt="" id={props.id} onClick={props.url} className="img-responsive" />
    </Col>
  );
};

inspiration.PropTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string
};

export default inspiration;

