import React, { Component } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";
import CheckoutProduct from "./CheckoutProduct";

export default class CheckoutProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      checkoutProducts: this.props.products
    };
  }

  //   onChangeProduct = productChanged => {
  //     this.setState({
  //       cartProducts: this.state.cartProducts.map(cartProduct => {
  //         if (cartProduct.id === productChanged.id) {
  //           cartProduct = {
  //             ...cartProduct,
  //             note: productChanged.note,
  //             quantity: productChanged.quantity
  //           };
  //         }
  //         return cartProduct;
  //       })
  //     });
  //   };

  //   onDeleteCartProduct = productIndex => {
  //     const cartProducts = [...this.state.cartProducts];
  //     cartProducts.splice(productIndex, 1);
  //     this.setState({
  //       cartProducts: cartProducts
  //     });
  //   };

  listCheckoutProducts = () => {
    return this.state.checkoutProducts.map((checkoutProduct, index) => (
      <CheckoutProduct key={index} product={checkoutProduct} />
    ));
  };

  render() {
    return (
      <GridContainer>
        <GridItem xs={12}>{this.state.title}</GridItem>
        <GridItem xs={12}>{this.listCheckoutProducts()}</GridItem>
      </GridContainer>
    );
  }
}
CheckoutProducts.propTypes = {
  title: PropTypes.string,
  checkoutProducts: PropTypes.arrayOf(Object)
};
