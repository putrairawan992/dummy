import React, { Component } from "react";
import StyleDetail from "./StyleDetail";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";

export default class Style extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      styleDetails: this.props.styleDetails,
      styleSelected: ""
    };
  }

  onChangeStyle = selected => {
    this.setState({
      styleSelected: selected
    });
  };

  loopStyleProduct = () => {
    return this.state.styleDetails.map((props, index) => (
      <StyleDetail
        key={index}
        id={props.id}
        imageSrc={props.imageSrc}
        title={props.title}
        onChangeStyle={this.onChangeStyle}
        selected={ (this.state.styleSelected === props.id) ? true : false }
      />
    ));
  };

  render() {

    console.log(this.state.styleSelected);

    return (
      <GridContainer>

          <span className="button-kategori-product3">
           <p>{this.props.title}</p>
          </span>

        <GridItem xs={10}>{this.loopStyleProduct()}</GridItem>
      </GridContainer>
    );
  }
}
Style.propTypes = {
  label: PropTypes.string,
  variantProduct: PropTypes.arrayOf(Object)
};
