import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Face from "@material-ui/icons/Face";
import { Container, Row, Col } from "reactstrap";
// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import Service from "services/Services";
import Footerbottom from "../../components/Footer/Footerbottom";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      checked: [1]
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    let service = new Service();
    service.modelSignup(user);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <Container>
        <Row className="content-signup">
          <Col md="8">
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <NavLink tag={Link} to="/">
                <img
                  src={require("assets/img/image_signup.png")}
                  className="img-responsive"
                />
              </NavLink>
            </Grid>
          </Col>
          <Col md="4">
            <Card>
              <form className={classes.form} onSubmit={this.handleSubmit}>
                <CardHeader>
                  <div className={classes.socialLine}>
                    <h3 className="content-signup-text">Daftar</h3>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.iconButtons}
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.iconButtons}
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus-g" />
                    </Button>
                  </div>
                </CardHeader>
                <p className={`${classes.description} ${classes.textCenter}`}>
                  atau
                </p>
                <CardBody>
                  <CustomInput
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "Nama",
                      type: "text",
                      name: "name",
                      onChange: this.handleName,
                      required: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "Email",
                      type: "email",
                      name: "email",
                      onChange: this.handleEmail,
                      required: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "Password",
                      type: "password",
                      name: "password",
                      onChange: this.handlePassword,
                      required: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon className={classes.inputIconsColor}>
                            lock_utline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                  />
                </CardBody>
                <div className={classes.textCenter}>
                  <Button type="submit" color="warning">
                    Daftar
                  </Button>
                </div>
              </form>
              <FormControlLabel
                className="signup-controllabel"
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(22)}
                    checked={
                      this.state.checked.indexOf(22) !== -1 ? true : false
                    }
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                label={
                  <span className="text-signup">
                    Saya setuju dengan <a href="#pablo">syarat dan ketentuan</a>
                    .
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>
        <Footerbottom />
      </Container>
    );
  }
}

export default withStyles(loginPageStyle)(Signup);
