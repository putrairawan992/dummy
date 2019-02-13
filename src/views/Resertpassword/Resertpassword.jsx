import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'assets/scss/style.css';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import InputAdornment from "@material-ui/core/InputAdornment";
import Mail from '@material-ui/icons/Mail';
import Button from 'components/CustomButtons/Button.jsx';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import Footerbottom from '../../components/Footer/Footerbottom';
import Service from "services/Services";

class Resetpassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
    };
    let service = new Service();
    service.modelLogin(user);
  };

  render() {
    console.log(this.state);
    return (
      <div className="reset-password">
        <Container className="reset-password2">
          <Row>
            <Col md="12" className="text-reset-password">
              <img src={require("assets/img/reset_password_background.png")} className="img-responsive" />
              <b >Reset Password</b>
            </Col>
            <Col md="4"></Col>
            <Col md="4">
              <form onSubmit={this.handleSubmit}>
                <CustomInput
                  id="login-modal-email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail />
                      </InputAdornment>
                    ),
                    placeholder: "Email..."
                  }}
                />
                <p>Reset password menggunakan email akun yang sudah terdaftar.</p>
                <p className="button-reset-password">
                  <Button color="warning">Kirim</Button>
                </p>
                <p className="text-reset-password-footer">Kembali ke halaman
                  <NavLink tag={Link} to="">
                    login
                  </NavLink>
                  atau
                    <NavLink tag={Link} to="/signup">
                    daftar
                    </NavLink>
                </p>
              </form>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Container>
        <Footerbottom />
      </div>
    );
  }
}

export default Resetpassword;
