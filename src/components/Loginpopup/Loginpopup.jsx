import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Assignment from "@material-ui/icons/Assignment";
import Mail from "@material-ui/icons/Mail";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import { NavLink } from "reactstrap";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Link } from "react-router-dom";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import Service from "services/Services";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ExampleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      email: "",
      password: ""
    };
  }

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

  handdleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    let service = new Service();
    service.modelLogin(user);
  };

  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          className="button-loginpopup"
          color="warning"
          round
          onClick={() => this.handleClickOpen("loginModal")}
        >
          Login
        </Button>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLogin
          }}
          open={this.state.loginModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("loginModal")}
          aria-labelledby="login-modal-slide-title"
          aria-describedby="login-modal-slide-description"
        >
          <Card plain className={classes.modalLoginCard}>
            <DialogContent
              id="login-modal-slide-description"
              className={classes.modalBody}
            >
              {/* <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => this.handleClose("loginModal")}
              >
                {" "}
                <Close className={classes.modalClose} />
              </Button> */}
              <h5 className="login-popup">Log in</h5>
              <div className={classes.socialLine}>
                <Button justIcon link>
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon link>
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
              <form onSubmit={this.handdleSubmit}>
                <p className={`${classes.description} ${classes.textCenter}`}>
                  atau
                </p>
                <CardBody className={classes.cardLoginBody}>
                  <CustomInput
                    id="login-modal-email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.handleEmail,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail className={classes.icon} />
                        </InputAdornment>
                      ),
                      placeholder: "Email..."
                    }}
                  />
                  <CustomInput
                    id="login-modal-pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.handlePassword,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon className={classes.icon}>lock_outline</Icon>
                        </InputAdornment>
                      ),
                      placeholder: "Password..."
                    }}
                  />
                </CardBody>
                <DialogActions
                  className={`${classes.modalFooter} ${
                    classes.justifyContentCenter
                  }`}
                >
                  <Button
                    type="submit"
                    className="button-loginpopup"
                    color="warning"
                    simple
                    size="lg"
                  >
                    Login
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>

            <p className={`${classes.description} ${classes.textCenter}`}>
              Belum punya Akun MonggoPesen ?{" "}
              <NavLink tag={Link} to="/signup">
                Daftar Sekarang
              </NavLink>
            </p>
          </Card>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(ExampleLogin);
