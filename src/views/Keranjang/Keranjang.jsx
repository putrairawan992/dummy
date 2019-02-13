import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Navigation from 'components/Navigation';
import 'assets/scss/style.css';
import Footer from 'components/Footer';
import CardExampleCardTrending from 'components/Shopingcardkeranjang';


class Keranjang extends React.Component {
  render() {
    return (
      <div className="content-keranjang-1">
        <Navigation/>
            <Container>
                <Row>
                    <Col md="8">
                        <b>Keranjang</b>
                        <CardExampleCardTrending />
                    </Col>
                </Row>
            </Container>
      <Footer />
      </div>
    );
  }
}

export default Keranjang;
