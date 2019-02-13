import React from "react";
import { Col } from 'reactstrap';

function CardHomeProduct(props) {


    return (
        <Col md="2">
            <div className="content-home-baju">
                <img
                    style={{ height: "180px", width: "100%", display: "block" }}
                    src={props.imageUrl}
                />
                <p>{props.title}</p>
            </div>
        </Col>


    );
}

export default CardHomeProduct;