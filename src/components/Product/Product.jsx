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
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";


const style = {
  ...imagesStyles,
  cardTitle
};

function Product(props) {
  const { classes } = props;
  return (

    <GridItem md={3} sm={4}>
      <Card plain product>
        <CardHeader noShadow image>
          <a href="#pablo">
            <img src={props.productPic} alt=".." style={{ height: "180px", width: "100%", display: "block" }} />
          </a>
        </CardHeader>
        <CardBody plain>
          <a href="#pablo">
            <h4 className={classes.cardTitle}> {props.productName}</h4>
          </a>
        </CardBody>
        <CardFooter plain className={classes.justifyContentBetween}>
          <div className={classes.priceContainer}>
            <span className={classes.price}> {props.prices.map(price => {
              if (price.price.code === "IDR")
                return <CurrencyRp price={price.price.value} />
            })}</span>
          </div>
          <Tooltip
            id="tooltip-top"
            title="Save to Wishlist"
            placement="left"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              justCategory
              simple
              color="rose"
              className={classes.pullRight}
            >
              <FavoriteBorder />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </GridItem>


  );
}

export default withStyles(style)(Product);
