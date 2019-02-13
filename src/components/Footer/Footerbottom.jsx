import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class Footerbottom extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg="12">
                        <div className="footer-bottom">
                            <hr className="inline-footer-bottom" />
                            <b> &copy; Copyright pt.giyarto manunggal sejati. All rights reserved.</b>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Footerbottom;