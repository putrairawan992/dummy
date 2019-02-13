import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import CurrencyRp from "components/Typography/CurrencyRp";


const style = {
  ...imagesStyles,
  cardTitle
};

function CardProduct(props) {
  const { classes } = props;
  return (
    <Card style={{ width: "21rem" }}>
      <CardBody>
        <h4 className={classes.cardTitle}>
          <CurrencyRp
            price={props.price} />
        </h4>
      </CardBody>
      <img
        style={{ height: "180px", width: "100%", display: "block" }}
        className={classes.imgCardTop}
        src={props.imgSrc} />
      <CardFooter plain className={classes.justifyContentBetween}>
        <div className={classes.priceContainer}>
          <span className={classes.price}>
            {props.nameproduct}
          </span>
        </div>
        <Tooltip
          id="tooltip-top"
          title="Save to Wishlist"
          placement="left"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            justIcon
            simple
            color="rose"
            className={classes.pullRight}
          >
            <img src={require("assets/img/Icon _ basket.svg")} />
          </Button>
        </Tooltip>
      </CardFooter>
      <span>
        <img src={require("assets/img/5-stars-png-no-background-3.png")} className="icon-star" />
      </span>
    </Card>
  );
}

export default withStyles(style)(CardProduct);