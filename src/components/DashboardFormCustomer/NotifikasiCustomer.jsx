import React, { Component } from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import sepatu from 'assets/img/sepatu.png';


class NotifikasiCustomer extends Component {

    render() {
        return (
            <div className="notifikasi-customer">
                <GridContainer className="notifikasi-customer1">
                    <GridItem className="notifikasi-customer2" xs={12} sm={12} md={12}>
                        <b>Selamat Bergabung Kawan</b>
                        <br /><br />
                        <p>Ayo dapatkan harga termurah untuk tingkatkan Fashion mu</p>
                    </GridItem>
                    <GridItem className="notifikasi-customer2" xs={12} sm={12} md={12}>
                        <b>Mavic PRO Mini…. Ayo, ini akan jadi milik kamu</b>
                        <br /><br />
                        <p>Lanjutkan pembelian dari keranjang pada 21 Sep 2018
                        <img src={sepatu} width="100" height="80" /></p>
                    </GridItem>
                </GridContainer>
            </div>

        )
    }
}

export default NotifikasiCustomer;