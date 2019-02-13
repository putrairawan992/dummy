import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const productAttibutes = props => {
  return (
    <GridContainer>
      {props.productAttributes.map((productAttribute,index) => {
        return <GridItem xs={4} key={index}>{productAttribute}</GridItem>
      })}
    </GridContainer>
  );
};

export default productAttibutes;
