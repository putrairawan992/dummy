import React from 'react';
import {
    NavbarBrand,
    NavItem,
    NavLink,
    Container, Row, Col
} from 'reactstrap';
import 'assets/scss/style.css';
import { Link } from 'react-router-dom';
import 'assets/jss/material-kit-pro-react/components/buttonStyle.jsx';
import Loginpopup from '../Loginpopup/Loginpopup.jsx';


export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: ''
        };

    }

    listenScrollEvent = e => {
        if (window.scrollY > 100) {
            this.setState({ display: 'none' })
        } else {
            this.setState({ display: '' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div className="navbar-fixed-top navbar-inverse">
                <Container className="navigation-menu">
                    <Row>
                        <Col sm="4">
                            <NavbarBrand href="/">
                                <img src={require("assets/img/logo.png")} className="img-responsive img-navbar" />
                            </NavbarBrand>
                        </Col>
                        <Col md="4">
                            <form >
                                <div className="icon-search">
                                    <input className="search search-style" id="filter" type="text" placeholder="Search Here" name="search" />
                                </div>
                            </form>
                        </Col>
                        <Col md="4" >
                            <NavItem className="icon-navbar-inverse">
                                <NavLink tag={Link} to="/category-product">
                                    <img src={require("assets/img/Icon _ basket.svg")} />
                                </NavLink>
                            </NavItem>
                            <NavItem className="icon-navbar-inverse">
                                <NavLink tag={Link} to="/category-product">
                                    <img src={require("assets/img/icon _ Bell-notification.svg")} />
                                </NavLink>
                            </NavItem>
                            <NavItem>

                                <Loginpopup />

                            </NavItem>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="text-navbar-inverse"
                    style={{ display: this.state.display, marginTop: "-10px" }}>
                    <hr className="line-navigation" />
                    <Row>
                        <Col md="12" xs="12" lg="12" sm="2" className="text-bottom-navigation">
                            <NavItem>
                                <NavLink tag={Link} to="/category-product">Top Trend</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/category-product">Pakaian</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/category-product">Sepatu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/category-product">Aksesoris</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/category-product">Jam Tangan</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/category-product">Kacamata</NavLink>
                            </NavItem>
                        </Col>
                    </Row>
                    <hr className="line-navigation" />
                </Container>
            </div >
        );
    }
}