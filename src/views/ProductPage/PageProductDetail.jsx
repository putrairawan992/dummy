import React, { Component } from "react";
import Navigation from "components/Navigation/Navigation";
import "assets/scss/style.css";
import Footer from "components/Footer/Footer";

import ProductDetail from "components/Product/ProductDetail";

class PageProductDetail extends React.Component {
  render() {
    return (
      <div className="product-detail">
        <Navigation />
        <ProductDetail />
        <Footer />
      </div>
    );
  }
}

export default PageProductDetail;
