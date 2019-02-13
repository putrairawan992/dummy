import React, { Component } from 'react';
import SideBarCustomerInvoice from '../../components/InvoiceDetailCustomer/SideBarCustomerInvoice';
import { Container, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

class InvoiceCustomerDetail extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Container className="dashboard-customer">
                    <Row>
                        <SideBarCustomerInvoice />
                    </Row>
                </Container>

                <Footer />
            </div>
        );
    }

}

export default InvoiceCustomerDetail;
