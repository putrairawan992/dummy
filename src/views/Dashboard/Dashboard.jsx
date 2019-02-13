import React, { Component } from 'react';
import SidebarCustomer from '../../components/SidebarCustomer/TabsSidebar';
import { Container, Row } from 'reactstrap';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

class DashboardCustomer extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Container className="dashboard-customer">
                    <Row>
                        <SidebarCustomer />
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default DashboardCustomer;
