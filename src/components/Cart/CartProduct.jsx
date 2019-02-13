import React, { Component } from "react";
import Card from "components/Card/Card.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ButtonQuantity from "../ButtonQuantity/ButtonQuantity";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import PropTypes from "prop-types";
import CurrencyRp from "../Typography/CurrencyRp";

export default class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      imageUrl: this.props.imageUrl,
      label: this.props.label,
      price: this.props.price,
      quantity: this.props.quantity,
      note: ""
    };
  }

  onChangeNote = event => {
    this.setState(
      {
        note: event.target.value
      },
      () => {
        this.props.onChangeProduct(this.state);
      }
    );
  };

  onChangeQuantity = quantity => {
    this.setState(
      {
        quantity: quantity
      },
      () => {
        this.props.onChangeProduct(this.state);
      }
    );
  };

  render() {
    return (
      <Card>
        <GridContainer>
          <GridItem md={12} xs={12} >
            <GridContainer>
              <GridItem xs={12} className="close-button-cart">
                <p onClick={this.props.onDelete}>Hapus</p>
              </GridItem>
              <GridItem xs={2}>
                <img src={this.state.imageUrl} alt="" className="img-responsive" />
              </GridItem>
              <GridItem md={8} xs={7} className="button-cart">
                <p className="label-cart-product">{this.state.label}</p>
                <ButtonQuantity
                  quantity={this.state.quantity}
                  onChange={this.onChangeQuantity}
                />
                <CustomInput
                  labelText="Tulis Catatan (Opsional)"
                  id="note"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: this.onChangeNote
                  }}
                />

              </GridItem>
              <GridItem md={2} xs={3} className="cart-product-price">
                <CurrencyRp price={this.state.price} />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </Card>
    );
  }
}

CartProduct.propTypes = {
  label: PropTypes.string,
  price: PropTypes.string,
  imageSrc: PropTypes.string,
  quantity: PropTypes.number
};
