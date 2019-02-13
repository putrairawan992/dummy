import React, { Component } from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from 'components/CustomButtons/Button.jsx';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Invoicecustomer extends Component {

    render() {
        return (
            <div className="invoice-customer">
                <GridContainer className="invoice-customer1">
                    <GridItem xs={12} sm={12} md={3}>
                        <p>No. Invoice - INV17081908</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <p>Tanggal Checkout</p>
                        <p>Fri , Sep 21 2018</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <p>Total Pesanan</p>
                        <p>Rp. 278.000</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                        <p className="waiting-price">Menunggu Pembayaran</p>
                        <NavLink tag={Link} to="/invoicecustomerdetail">
                            <Button type="button" color="warning" className="button-price-invoice">Lihat Invoice
                        </Button>
                        </NavLink>
                    </GridItem>
                </GridContainer>
                <GridContainer className="invoice-customer2">
                    <GridItem xs={12} sm={12} md={6}>

                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>

                    </GridItem>
                </GridContainer>
            </div>

        )
    }
}

export default Invoicecustomer;