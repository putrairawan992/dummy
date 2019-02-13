import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

class StyleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      imageSrc: this.props.imageSrc,
      title: this.props.title,

    };
  }

  product = img => {
    // let classname = this.state.selected ? 'active' : ''
    return (
      <div className={ (this.props.selected) ? 'box-image tes active' : 'box-image tes' } onClick={this.onStyleSelected}>
        {img}
      </div>
    );
  };

  productImage = () => {
       //jika image source kosong maka tampilkan title
    if (this.state.imageSrc === "") {
      return this.product(<div />);
    } else {
      return this.product(
        <p className="style-size">{this.state.title}</p>
          
      );
    }
  };

  tooltip = () => {
    const { classes } = this.props;

    return (
      <Tooltip
        id="tooltip-top"
        title={this.state.title}
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        {this.productImage()}
      </Tooltip>
    );
  };

  onStyleSelected = () => {
    this.props.onChangeStyle(this.state.id);
  };

  render() {
    return this.tooltip();
  }
}

StyleDetail.propTypes = {
  id: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(tooltipsStyle)(StyleDetail);
