import React, { Component } from "react";
import PropTypes from "prop-types";
import CurrencyRp from "../Typography/CurrencyRp";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from 'components/CustomButtons/Button.jsx';
import assetStandarPengiriman from "assets/img/standar_pengiriman.png";

export default class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      label: this.props.label,
      price: this.props.price,
      imageSrc: this.props.imageSrc
    };
  }
  render() {
    return (
      <GridContainer className="label-cart">
        <GridItem xs={12}>
          <p>{this.state.title}</p>
        </GridItem>
        <GridItem xs={12}>
          <img src={assetStandarPengiriman} className="img-responsive" />
        </GridItem>
        <GridItem xs={12} className="price-label-cart">
          <p>{this.state.label}</p>
          <CurrencyRp price={this.props.price} />
        </GridItem>
        <GridItem xs={12} className="price-label-cart1" >
          <Button
            className="button-price-cart"
            type="button"
            color="warning">
            Checkout
          </Button>
          <br />
          <p>Pembayaran Mudah dan Aman</p>
        </GridItem>
      </GridContainer>
    );
  }
}
OrderDetail.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  imageSrc: PropTypes.string
};
