import React, { Component } from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';

class Formcustomer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <GridContainer>
                <img src={require("assets/img/faces/christian.jpg")} className="img-circle" />
                <GridItem xs={12} sm={12} md={12} >
                    <CustomInput
                        labelText="Nama"
                        id="float"
                        type="text"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="Email"
                        id="float"
                        type="text"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="No Handphone"
                        id="float"
                        Type="nmber"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <Button type="button" color="warning">Update</Button>
            </GridContainer >
        )
    }
}

export default Formcustomer;