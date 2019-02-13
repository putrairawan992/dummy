import React, { Component } from "react";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";
import CurrencyRp from "../Typography/CurrencyRp";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";

class CourierDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "0",
      couriers: this.props.couriers,
      courierSelected: ""
    };
  }
  onChangeCourier = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
        price: event.target.value
      },
      () => {
        this.props.onChangeCourier(this.state.price);
      }
    );
  };
  listCouriers = () => {
    const { classes } = this.props;
    return this.state.couriers.map((courier, index) => (
      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        key={index}
        value={courier.price}
      >
        {courier.label}
      </MenuItem>
    ));
  };
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={5} lg={5}>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Kurir Pengiriman
            </InputLabel>
            <Select
              MenuProps={{
                className: classes.selectMenu
              }}
              classes={{
                select: classes.select
              }}
              value={this.state.courierSelected}
              onChange={this.onChangeCourier}
              inputProps={{
                name: "courierSelected",
                id: "simple-select"
              }}
            >
              {this.listCouriers()}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={6} md={5} lg={5}>
          <CurrencyRp price={this.state.price} />
        </GridItem>
      </GridContainer>
    );
  }
}
CourierDelivery.propTypes = {
  couriers: PropTypes.arrayOf(Object)
};
export default withStyles(styles)(CourierDelivery);
