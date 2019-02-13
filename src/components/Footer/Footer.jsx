import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import 'assets/scss/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <Container className="footer">
                <Row className="menufirst77">
                    <Col xs="12" sm="3" lg="3">
                        <div className="menufirst1">
                            <ul className="menu menu11">
                                <li>
                                    <NavLink tag={Link} to="#">
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="#">
                                        Careers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="#">
                                        Affailate Program
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="#">
                                        Bussiness with us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="#">
                                        Join to Reseller
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <hr className="line-footer" />
                        <div className="menufirst1">
                            <ul className="menu">
                                <li className="menu22">
                                    <NavLink tag={Link} to="/home">
                                        <img src={require("assets/img/LogoMonggoPesen.png")} />
                                    </NavLink>
                                </li>
                                <li >
                                    <NavLink tag={Link} to="/">
                                        Monggo Pesen
                            </NavLink>
                                </li>
                                <li className="footer-text">
                                    <NavLink tag={Link} to="">
                                        Privacy Police
                        </NavLink>
                                </li>
                                <li className="footer-text">
                                    <NavLink tag={Link} to="">
                                        Term and Conditiions
                        </NavLink>
                                </li>
                                <li className="footer-text">
                                    <NavLink tag={Link} to="">
                                        How to Deals
                        </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="download-icon">
                            <br />
                            <br />
                            <br />
                            <div className="form-input">
                                <Label for="input4" className="icon">
                                    <img src={require("assets/img/Icon _ message (1).svg")} />
                                </Label>
                                <Button id="convert" className="button">
                                    <img src={require("assets/img/Icon _ arrow-right Copy 2.svg")} />
                                </Button>
                                <Input id="uid" type="text" className="input" placeholder="Email Here" />
                            </div>
                            <b>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className="callme" /></a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className="callme" /></a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className="callme" /></a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} className="callme" /></a>
                            </b>
                        </div>
                        <Col xs="12" lg="12" className="footer-bottom ">
                            <p>  &copy; PT. Giyarto Manunggal Sejati</p>
                        </Col>
                        <hr className="line-footer3" />
                    </Col>
                    <Col xs="12" sm="3" lg="3">
                        <div className="menufirst2">
                            <ul className="menu menu11">
                                <li className="text-menu-22">
                                    <NavLink tag={Link} to="#">
                                        Help
                            </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="">
                                        Contact us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="">
                                        Track orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="">
                                        FAQ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink tag={Link} to="">
                                        Shooping Info
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>


                </Row>
            </Container>




        );
    }
}

export default Footer;
