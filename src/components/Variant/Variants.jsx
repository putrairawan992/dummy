import React, { Component } from "react";
import Variant from "./Variant";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";

export default class Variants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionType: this.props.optionType,
      optionValue: this.props.optionValue,
      optionId : this.props.optionId,
      variantSelected: []
    };
  }

  onChangeVariant = selected => {
    this.setState({
      variantSelected: selected
    },()=>{
      let variant = {name : this.state.optionType, value : this.state.variantSelected};
      this.props.onChangeVariant(variant);
    });
  };

  loopVariantProduct = () => {
    return this.state.optionValue.map((option, index) => (
      <Variant
        key={option.optionValId}
        optionValId={option.optionValId}
        optionValImage={option.optionValImage}
        optionValText={option.optionValText}
        onChangeVariant={this.onChangeVariant}
        selected={this.state.variantSelected.optionValId === option.optionValId ? true : false}
      />
    ));
  };

  render() {
    return (
      <GridContainer>
        <span className="button-kategori-product3">
          <p>{this.props.title}</p>
        </span>

        <GridItem xs={10}>{this.loopVariantProduct()}</GridItem>
      </GridContainer>
    );
  }
}
Variants.propTypes = {
  optionType: PropTypes.string,
  optionValue: PropTypes.arrayOf(Object),
  optionId : PropTypes.string
};
