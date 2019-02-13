import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.jsx";
import SliderImage from "components/SliderImage/SliderImage.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ButtonQuantity from "components/ButtonQuantity/ButtonQuantity";
import "assets/css/product-detail.css";
import Variants from "components/Variant/Variants";
import CurrencyRp from "components/Typography/CurrencyRp";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Button from "components/CustomButtons/Button.jsx";
import "assets/scss/style.css";
import Style from "../Style/Style";
import { assetBoxShipping } from "assets/text-directory.js";
import { dummyProductDetail } from "dummy/DummyProductDetail";
import SliderProductDetail from "../Slider/SliderProductDetail";
import { apiGetProductById } from "services/ServiceProductDetail";
import {
  dsProductDetail1,
  dsProductDetail2
} from "../../dummy/data_source/dsProductDetail";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductAttributes from "../Typography/productAttibutes";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      variants: [],
      details: {},
      productId: "",
      options: [],
      productAttributes: [],
      productImages: [],
      productSalePrice: [],
      productTitle: "",
      note : "",
      productDescriptions : []
    };
  }

//Get Data source From Lokal
  componentWillMount() {
    const res = dsProductDetail2;
    console.log(res);

    const details = JSON.parse(decodeURIComponent(res.details));
    const productId = res.productId;
    const productTitle = details.productTitle;
    const options = [...details.options];
    const productAttributes = [...details.productAttributes];
    const productImages = [...details.productImages];
    // const productSalePrice = details.productSalePrice.map(productSalePrice => {
    //   if (productSalePrice.price.code === "IDR") {
    //     this.setState({
    //       productSalePrice: productSalePrice.price.value
    //     });
    //   }
    // });
    const productDescriptions = [...details.productDescription];
    this.setState({
      productId: productId,
      productTitle: productTitle,
      options: options,
      productAttributes: productAttributes,
      productImages: productImages,
      productDescriptions: productDescriptions
    });
  }


  //Get Data From API
  // componentWillMount() {
  //   //const res = dsProductDetail;
  //   const response = apiGetProductById("569846888233").then(res => {
  //     const details = JSON.parse(decodeURIComponent(res.data.details));
  //     console.log(details);

  //     const productId = res.data.productId;
  //     const productTitle = details.productTitle;
  //     const options = [...details.options];
  //     const productAttributes = [...details.productAttributes];
  //     const productImages = [...details.productImages];
  //     const productSalePrice = [...details.productSalePrice];

  //     this.setState({
  //       productId: productId,
  //       productTitle: productTitle,
  //       options: options,
  //       productAttributes: productAttributes,
  //       productImages: productImages,
  //       productSalePrice: productSalePrice
  //     });
  //   }).catch(error=>{
  //     console.log(error);
  //   });
  // }

  updateVariants = responseVariant => {
    const variants = [...this.state.variants];
    var updatedvariant = variants;
    const result = variants.find(
      variant => variant.name == responseVariant.name
    );
    if (variants < 1) {
      updatedvariant.push({
        name: responseVariant.name,
        value: responseVariant.value.optionValText,
        imageUrl: responseVariant.value.optionValImage
      });
    } else {
      if (result === undefined) {
        updatedvariant.push({
          name: responseVariant.name,
          value: responseVariant.value.optionValText,
          imageUrl: responseVariant.value.optionValImage
        });
      } else {
        updatedvariant = variants.map(
          variant =>
            variant.name !== responseVariant.name
              ? variant
              : {
                ...variant,
                value: responseVariant.value.optionValText,
                imageUrl: responseVariant.value.optionValImage
              }
        );
      }
    }
    this.setState({
      variants: updatedvariant
    });
  };

  onChangeVariant = selected => {
    const productImages = [...this.state.productImages];
    this.updateVariants(selected);
    if (selected.value.optionValImage.length > 0) {
      productImages.unshift({
        small: selected.value.optionValImage,
        medium: selected.value.optionValImage,
        big: selected.value.optionValImage
      });
      this.setState({
        productImages: productImages
      });
    }
  };

  onChangeQuantity = qyt => {
    let quantity = this.state.quantity;
    quantity = qyt;
    this.setState({
      quantity: quantity
    });
  };

  addToCart = () => {
    const state = { ...this.state };
    let requestAddtoCart = [];
    requestAddtoCart.push({
      productId: state.productId,
      variant: state.variants,
      quantity: state.quantity,
      note : state.note
    });
    console.log(requestAddtoCart);
  };

  render() {    
    console.log(this.state.productAttributes);
    const { classes } = this.props;
    return (
      <div className={classes.productPage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="#">MonggoPesen</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Fashion Wanita</BreadcrumbItem>
              </Breadcrumb>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <SliderProductDetail productImages={this.state.productImages} />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <GridContainer>
                <GridItem xs={12}>
                  <b className="name-item">{this.state.productTitle}</b>
                </GridItem>
                <GridItem xs={12}>
                  {this.state.productSalePrice.map(
                    (productSalePrice, index) => {
                      if (productSalePrice.price.code === "IDR") {
                        return (
                          <CurrencyRp
                            key={productSalePrice.price.code}
                            price={productSalePrice.price.value}
                          />
                        );
                      }
                    }
                  )}
                </GridItem>
                <GridItem xs={12}>
                  {this.state.options.map((option, index) => {
                    return (
                      <Variants
                        key={option.optionId}
                        optionType={option.optionType}
                        optionValue={option.optionValue}
                        optionId={option.optionId}
                        onChangeVariant={this.onChangeVariant}
                      />
                    );
                  })}
                </GridItem>
                <GridItem xs={12}>
                  <ButtonQuantity
                    title="Kuantitas"
                    quantity={1}
                    onChange={this.onChangeQuantity}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Button
                    className="button-tambah-keranjang"
                    color="warning"
                    onClick={this.addToCart}
                  >
                    Tambah Keranjang
                  </Button>
                </GridItem>
                <GridItem xs={12}>
                  <hr className="line-product1" />
                  <img src={assetBoxShipping} className="shipping" />
                  <hr className="line-product1" />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem md={12}>
              <h4 className="deskripsi-produk-text">Deskripsi Product</h4>
              <hr className="line-deskripsi-produk-text1" />
              <hr className="line-deskripsi-produk-text" />
            </GridItem>
            <GridItem md={12}>
              <ProductAttributes productAttributes={this.state.productAttributes} />
            </GridItem>
            <GridItem md={12}>
              <hr className="line-deskripsi" />
              <div className="image-product-details">
                <ProductDescription productDescriptions={this.state.productDescriptions}/>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductDetail);
