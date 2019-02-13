import React, { Component } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Navigation from "components/Navigation/Navigation.jsx";
import Footer from "components/Footer/Footer.jsx";
import CheckoutProducts from "../../components/Checkout/CheckoutProducts";

export default class Checkout extends Component {
  render() {
    return (
      <div className="content-home-1">
        <Navigation />
        <GridContainer>
          <GridItem xs={12} sm={6} md={5} lg={5}>
            <CheckoutProducts
              title="Detail Item"
              products={[
                {
                  id: "1",
                  priceProduct: "1500000",
                  imageUrl:
                    "https://www.jne.co.id/frontend/images/content/jonikecil.png",
                  label: "Tralala Trilili senangnya dalam hati",
                  quantity: 1,
                  note: "Jangan sampai ada noda",
                  idCourier: "",
                  variants: [
                    {
                      title: "Ukuran",
                      variantDetails: [
                        {
                          id: "1",
                          title: "Medium"
                        },
                        {
                          id: "2",
                          title: "Medium"
                        }
                      ]
                    },
                    {
                      title: "Klarifikasi Warna",
                      variantDetails: [
                        {
                          id: "1",
                          imageSrc: "https://dummyimage.com/32/ff0000/fff",
                          title: "Medium"
                        },
                        {
                          id: "2",
                          imageSrc: "https://dummyimage.com/32/2fff00/fff",
                          title: "Medium"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "1",
                  priceProduct: "1500000",
                  imageUrl:
                    "https://www.jne.co.id/frontend/images/content/jonikecil.png",
                  label: "Tralala Trilili senangnya dalam hati",
                  quantity: 1,
                  note: "Jangan sampai ada noda",
                  variants: [
                    {
                      title: "Ukuran",
                      variantDetails: [
                        {
                          id: "1",
                          title: "Medium"
                        },
                        {
                          id: "2",
                          title: "Medium"
                        }
                      ]
                    },
                    {
                      title: "Klarifikasi Warna",
                      variantDetails: [
                        {
                          id: "1",
                          imageSrc: "https://dummyimage.com/32/ff0000/fff",
                          title: "Medium"
                        },
                        {
                          id: "2",
                          imageSrc: "https://dummyimage.com/32/2fff00/fff",
                          title: "Medium"
                        }
                      ]
                    }
                  ]
                }
              ]}
            />
            />
          </GridItem>
        </GridContainer>
        <Footer />
      </div>
    );
  }
}
