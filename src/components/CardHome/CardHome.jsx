import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import CardHomeProduct from "components/CardHome/CardHomeProduct";

const CardHome = props => {
    return (
        <GridContainer>
            {props.cardhomeproduct.map((cardhomeproduct, index) => {
                return (
                    <CardHomeProduct
                        title={cardhomeproduct.title}
                        imageUrl={cardhomeproduct.imageUrl}

                    />
                );
            })}
        </GridContainer>
    );
};

export default CardHome;
