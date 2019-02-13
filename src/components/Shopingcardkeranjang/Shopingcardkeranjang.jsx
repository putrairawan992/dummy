import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui icons
import Remove from "@material-ui/icons/Remove";
import Button from "components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Label } from 'reactstrap';
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

const style = {
  ...cardsStyle
};

function CardExampleCardTrending(props) {
  const { classes } = props;
  return (
    <Card>
      <CardBody>
        <img src={require("assets/img/sepatu.png")} className="gambar-keranjang"/>   
           <Label>Mavic PRO Mini Drones Hobby RC Quadcopter</Label> 
           <br/>
           <span>
            <div className={classes.buttonGroup}>
             <b>1</b>
              <Button
                color="info"
                size="sm"
                round
                className={classes.firstButton}
              >
                <Remove />
              </Button>
              <Button
                color="info"
                size="sm"
                round
                className={classes.lastButton}
              >
                <Add />
              </Button>
            </div>
          </span>
      </CardBody>
    </Card>
  );
}

export default withStyles(style)(CardExampleCardTrending);