import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import "assets/scss/style.css";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";
import Sidebarproduct from "components/Sidebarproduct/Sidebarproduct";
//import Product from "components/Product/Product";
import Products from "../../../components/Product/Products";
import { DummyProducts } from "dummy/DummyProducts";

class SectionProducts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem md={12} className="content-kategori-product">
            <div>
              <p>Pakaian</p>
              <img
                src={require("assets/img/gambar-detail-product.png")}
                className="img-responsive" />
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem md={2} sm={3} className="sidebar-kategori-product">
            <Sidebarproduct />
          </GridItem>

          <GridItem md={10} sm={10} className="item-content-kategori-product">
            <Products products={DummyProducts} />
            <p className="text-button-kategori-produk">
              <button className="button-kategori-product">
                Load more...
                </button>
            </p>
          </GridItem>
        </GridContainer>
      </div>

    );
  }
}

export default withStyles(styles)(SectionProducts);
