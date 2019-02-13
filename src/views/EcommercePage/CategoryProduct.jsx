import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Navigation from "components/Navigation/Navigation";
import "assets/scss/style.css";
import Footer from "components/Footer/Footer";
import ScrollToTopOnMount from "components/ScrollToTopOnMount/ScrollToTopOnMount";
import SectionProducts from "./Sections/SectionProducts";

class CategoryProduct extends React.Component {
  state = {
    selectedValue: "a"
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="kategori-produk">
        <Navigation />
        <Container fluid>
          <ScrollToTopOnMount />
          <SectionProducts />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default CategoryProduct;
