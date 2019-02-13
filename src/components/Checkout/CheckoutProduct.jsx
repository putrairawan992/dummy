import React, { Component } from "react";
import Card from "components/Card/Card.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import PropTypes from "prop-types";
import CurrencyRp from "../Typography/CurrencyRp";
import Variant from "../Variant/Variants";
import CourierDelivery from "../Courier/CourierDelivery";

export default class CheckoutProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      priceSubTotal: ""
    };
  }

  onChangeCourier = price => {
    const priceSubTotal =
      parseInt(this.state.product.priceProduct) + parseInt(price);
    this.setState({
      priceSubTotal: priceSubTotal
    });
  };

  listVariants = () => {
    return this.state.product.variants.map((variant, index) => (
      <GridItem xs={12}>
        <Variant
          key={index}
          title={variant.title}
          variantDetails={variant.variantDetails}
        />
      </GridItem>
    ));
  };

  render() {
    return (
      <Card>
        <GridContainer>
          <GridItem xs={2}>
            <img src={this.state.product.imageUrl} alt="" />
          </GridItem>
          <GridItem xs={7}>
            <GridContainer>
              <GridItem xs={12}>
                <GridContainer>
                  <GridItem xs={12}>{this.state.product.label}</GridItem>
                  {this.listVariants()}
                  <GridItem xs={12}>{this.state.product.quantity}</GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={3}>
            <GridContainer>
              <GridItem xs={12}>
                <CurrencyRp price={this.state.product.priceProduct} />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12}>Catatan : {this.state.product.note}</GridItem>
          <GridItem xs={12}>
            <CourierDelivery
              couriers={[
                {
                  id: "1",
                  price: "150000",
                  label: "Tiki super cepat"
                },
                {
                  id: "2",
                  price: "250000",
                  label: "JNE super cepat"
                },
                {
                  id: "3",
                  price: "350000",
                  label: "Post super cepat"
                }
              ]}
              onChangeCourier={this.onChangeCourier}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={7}>Sub Total</GridItem>
          <GridItem xs={5}>
            <CurrencyRp price={this.state.priceSubTotal.toString()} />
          </GridItem>
        </GridContainer>
      </Card>
    );
  }
}

CheckoutProduct.propTypes = {
  product: PropTypes.object
};
