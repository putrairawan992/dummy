import React, { Component } from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import FormAddAddress from 'components/DashboardFormCustomer/TambahAlamatCustomer';

class AlamatCustomer extends Component {

    render() {
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={6} >
                    <div className="alamat-dashboard">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOv5SxGvNsgjN4XaiW6XfLzxE7J6R9qjhx9auB2vVzr4pBjesB" className="img-circle" />
                    </div>
                    <FormAddAddress />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} >
                    <div className="alamat-dashboard">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOv5SxGvNsgjN4XaiW6XfLzxE7J6R9qjhx9auB2vVzr4pBjesB" className="img-circle" />
                    </div>
                </GridItem>
            </GridContainer >
        )
    }
}

export default AlamatCustomer;