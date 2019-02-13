import React from "react";
import PropTypes from "prop-types";

const feature = props => {
  return (
    <div className="sidebar-slider">
      <img src={props.imageUrl} alt="" id={props.id} onClick={props.url} className="img-responsive" />
    </div>
  );
};

feature.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string
};

export default feature;
