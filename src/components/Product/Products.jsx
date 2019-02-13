import React from "react";
import Product from "./Product";
import GridContainer from "components/Grid/GridContainer.jsx";
const products = props => {  
  return (
    <GridContainer className="products-item">
      {props.products.map((product) => {
        return (
          <Product
            key={product.productId}
            productId={product.productId}
            prices={product.prices}
            productName={product.productName}
            productPic={product.productPic}
          />
        );
      })}
    </GridContainer>
  );
};

export default products;
