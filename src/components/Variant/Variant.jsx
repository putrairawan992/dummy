import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

class Variant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionValId: this.props.optionValId,
      optionValImage: this.props.optionValImage,
      optionValText: this.props.optionValText
    };
  }

  product = img => {
    // let classname = this.state.selected ? 'active' : ''
    return (
      <div
        className={
          this.props.selected ? "box-image tes active" : "box-image tes"
        }
        onClick={this.onVariantSelected}
      >
        <div className="radio-tile-content">{img}</div>
      </div>
    );
  };

  productImage = () => {
    //jika image source kosong maka tampilkan title
    if (this.state.optionValImage === "") {
      return this.product(<p>{this.state.optionValText}</p>);
    } else {
      return this.product(
        <img src={this.state.optionValImage} alt="" className="radio-content-image" />
      );
    }
  };

  tooltip = () => {
    const { classes } = this.props;

    return (
      <Tooltip
        id="tooltip-top"
        title={this.state.optionValText}
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        {this.productImage()}
      </Tooltip>
    );
  };

  onVariantSelected = () => {
    this.props.onChangeVariant(this.state);
  };

  render() {
    return this.tooltip();
  }
}

Variant.propTypes = {
  optionValId: PropTypes.string,
  optionValImage: PropTypes.string,
  optionValText: PropTypes.string
};

export default withStyles(tooltipsStyle)(Variant);
