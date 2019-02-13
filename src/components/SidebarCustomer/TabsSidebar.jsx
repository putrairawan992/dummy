import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Formcustomer from 'components/DashboardFormCustomer/FormDashboard';
import AlamatCustomer from 'components/DashboardFormCustomer/AlamatDashboard';
import InvoiceCustomer from 'components/DashboardFormCustomer/InvoiceCustomer';
import NotifikasiCustomer from 'components/DashboardFormCustomer/NotifikasiCustomer';

export default class SidebarCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Akun Saya
                                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Alamat
                                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    Invoice
                                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '4' })}
                                    onClick={() => { this.toggle('4'); }}
                                >
                                    Notifikasi
                                        </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md="9">
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col md="12">
                                        <Formcustomer />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col md="12">
                                        <AlamatCustomer />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col md="12">
                                        <InvoiceCustomer />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col md="12">
                                        <NotifikasiCustomer />
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>
        );
    }
}