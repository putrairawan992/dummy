import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Footerbottom from "components/Footer/Footerbottom";
class Waitingredirect extends Component {
    render() {
        return (
            <div className="waiting-redirect">
                <Container fluid className="waiting-redirect1">
                    <Row>
                        <Col lg="12">
                            <img src={require("assets/img/waiting_redirect.png")} className="img-responsive" />
                        </Col>
                    </Row>
                </Container>
                <Footerbottom />
            </div>
        );
    }

}

export default Waitingredirect;