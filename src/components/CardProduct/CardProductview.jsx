import React, { Component } from "react";
import VariantDetail from "./VariantDetail";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";

export default class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      variantProduct: this.props.variantProduct,
      valVariant: ""
    };
  }

  loopCardProduct = () => {
    return this.state.variantProduct.map((props, index) => (
      <CardExample
        imageSrc={props.imageSrc}
 
      />
    ));
  };

  render() {


    return (
      <GridContainer>
        <GridItem xs={2}>{this.props.label}</GridItem>
        <GridItem xs={10}>{this.loopCardProduct()}</GridItem>
      </GridContainer>
    );
  }
}
Variant.propTypes = {
  label: PropTypes.string,
  variantProduct: PropTypes.arrayOf(Object)
};
