import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Button from "components/CustomButtons/Button.jsx";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";

class ButtonQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
      title: this.props.title,
      onChangeQuantity: this.props.quantity
    };
  }

  incrementItem = () => {
    const quantity = this.state.quantity;
    this.setState({ quantity: quantity + 1 }, () => {
      this.props.onChange(this.state.quantity);
    });
  };
  decreaseItem = () => {
    const quantity = this.state.quantity;
    if (this.state.quantity > 1) {
      this.setState({ quantity: quantity - 1 }, () => {
        this.props.onChange(this.state.quantity);
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="button-kategori-product1">
        <b>{this.props.title}</b>
        <b className="button-kategori-product2">{this.state.quantity}</b>
        <div className={classes.buttonGroup}>
          <Button
            color="warning"
            size="sm"
            round
            className={classes.firstButton}
            onClick={this.decreaseItem}
          >
            <Remove />
          </Button>
          <Button
            color="warning"
            size="sm"
            round
            className={classes.lastButton}
            onClick={this.incrementItem}
          >
            <Add />
          </Button>
        </div>
      </div>
    );
  }
}

ButtonQuantity.propTypes = {
  quantity: PropTypes.number,
  title: PropTypes.string
};

export default withStyles(shoppingCartStyle)(ButtonQuantity);
