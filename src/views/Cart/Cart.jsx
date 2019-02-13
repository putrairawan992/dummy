import React, { Component } from "react";
import Navigation from "components/Navigation/Navigation.jsx";
import Footer from "components/Footer/Footer.jsx";
import CartProducts from "../../components/Cart/CartProducts";
import { DummyProducts } from "dummy/DummyProducts";
import OrderDetail from "../../components/Cart/OrderDetail";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";

class Cart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className="cart-product">
          <Navigation />
          <GridContainer>
            <GridItem md={8} xs={6} >
              <h4>Keranjang</h4>
              <CartProducts
                title="Items"
                cartProducts={DummyProducts}
              />
            </GridItem>
            <GridItem md={4} xs={6} >
              <OrderDetail
                label="Total Harga Barang"
                price="200000"
                title="Order Detail"
              />
            </GridItem>

          </GridContainer>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Cart);