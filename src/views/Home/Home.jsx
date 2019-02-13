import React from 'react';
import Navigation from "components/Navigation/Navigation";
import SliderTopHome from "components/Slider/Slider";
import "assets/scss/style.css";
import Footer from "components/Footer/Footer";
import Cardhomecontent from "components/CardHome/Cardhomecontent.jsx";
import Products from "components/Product/Products";
import assetIconRocket from "assets/img/IconRocket.png";
import assetIconSecurity from "assets/img/IconSecurity.png";
import assetIconWallet from "assets/img/IconWallet.png";
import { DummyCategories } from "dummy/DummyCategories";
import Categories from "../../components/Category/Categories";
import { DummyInspiration } from "dummy/DummyInspiration";
import Inspirations from "../../components/Inspiration/Inspirations";
import { DummyFeature } from "../../dummy/DummyFeature";
import Features from "../../components/Feature/Features";
import { dsProducts } from "../../dummy/data_source/dsProducts";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  //Get Data Source From Local
  componentWillMount() {
    var product = [];
    const res = dsProducts;
    res.data.listData.map(data => {
      const dataDecode = JSON.parse(decodeURIComponent(data.homePageDetails));
      product.push(dataDecode);
      console.log({ push: product });

    })
    this.setState({
      products: product
    })
  }


  //Get Data Source From API
  // componentWillMount(){
  //   apiGetProduct("5b7276bf97ac1c1984473662").then(res => {
  //     res.data.listData.map(data => {
  //       const dataDecode = JSON.parse(decodeURIComponent(data.homePageDetails));
  //       this.setState({
  //         products : [...this.state.products,dataDecode]
  //       })
  //     })
  //   })
  // }

  render() {
    const { classes } = this.props;
    console.log(this.state.products);

    return (
      <div className={classes.container}>
        <div className="content-home-1">
          <Navigation />
          <div className="content-home-2">
            <GridContainer>
              <GridItem md={8}>
                <SliderTopHome />
              </GridItem>
              <Features features={DummyFeature} />
            </GridContainer>
            <GridContainer style={{ marginBottom: "2em" }}>
              <GridItem md={1}></GridItem>
              <GridItem md={3}>
                <Cardhomecontent
                  title="Global logistics"
                  imageUrl={assetIconRocket} />
              </GridItem>
              <GridItem md={3}>
                <Cardhomecontent
                  title="Payment Bank Transfer"
                  imageUrl={assetIconWallet} />
              </GridItem>
              <GridItem md={3}>
                <Cardhomecontent
                  title="Buyer Protection"
                  imageUrl={assetIconSecurity} />
              </GridItem>
              <GridItem md={1}></GridItem>
            </GridContainer>

            <Categories categories={DummyCategories} />

            <GridContainer className="content-home-6" style={{ marginTop: "3em" }} >

              <GridItem md={12} className="content-home-6-text">
                <b>Tops Trending</b>
              </GridItem>
              <Products products={this.state.products} />
              <Inspirations inspirations={DummyInspiration} />

              <GridItem
                md={12}
                style={{ marginTop: "3em" }}
                className="content-home-7-text" >
                <b>Sepatu Trend</b>
              </GridItem>
              {/* <Products products={DummyProducts} /> */}

              <GridItem
                md={12}
                className="content-home-7-text" >
                <b>Tas Trend</b>
              </GridItem>
              {/* <Products products={DummyProducts} /> */}

            </GridContainer>

            <Inspirations inspirations={DummyInspiration} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
