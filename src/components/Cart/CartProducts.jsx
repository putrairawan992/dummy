import React, { Component } from "react";
import CartProduct from "./CartProduct";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";

export default class CartProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      cartProducts: this.props.cartProducts
    };
  }

  onChangeProduct = productChanged => {
    this.setState({
      cartProducts: this.state.cartProducts.map(cartProduct => {
        if (cartProduct.id === productChanged.id) {
          cartProduct = {
            ...cartProduct,
            note: productChanged.note,
            quantity: productChanged.quantity
          };
        }
        return cartProduct;
      })
    });
  };

  onDeleteCartProduct = productIndex => {
    const cartProducts = [...this.state.cartProducts];
    cartProducts.splice(productIndex, 1);
    this.setState({
      cartProducts: cartProducts
    });
  };

  listCartProducts = () => {
    return this.state.cartProducts.map((cartProduct, index) => {
      return (
        <CartProduct
          key={cartProduct.idProduct}
          id={cartProduct.idProduct}
          price={cartProduct.price}
          imageUrl={cartProduct.imageUrl}
          label={cartProduct.label}
          quantity={cartProduct.quantity}
          onDelete={() => this.onDeleteCartProduct(index)}
          onChangeProduct={this.onChangeProduct}
        />
      );
    });
  };

  render() {
    return (
      <GridContainer>
        <GridItem xs={12}><p className="cart-product-title">{this.state.title}</p></GridItem>
        <GridItem xs={12}>{this.listCartProducts()}</GridItem>
      </GridContainer>
    );
  }
}
CartProducts.propTypes = {
  title: PropTypes.string,
  cartProducts: PropTypes.arrayOf(Object)
};
