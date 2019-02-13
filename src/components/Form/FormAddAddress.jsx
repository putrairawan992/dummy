import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import GridItem from "components/Grid/GridItem.jsx";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import styles from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ExampleOptionalSizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallModal: false,
      largeModal: false,
      simpleSelect: ""
    };
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
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
        <Button className="alamat-dashboard-button"
          color="warning"
          onClick={() => this.handleClickOpen("largeModal")}
        >
          Tambah Alamat
        </Button>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLarge
          }}
          open={this.state.largeModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("largeModal")}
          aria-labelledby="large-modal-slide-title"
          aria-describedby="large-modal-slide-description"
        >
          <DialogTitle
            id="large-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              simple
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              onClick={() => this.handleClose("largeModal")}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h4 className="typography-title">Tambah Alamat</h4>

          </DialogTitle>
          <DialogContent
            id="large-modal-slide-description"
            className={classes.modalBody}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Label Alamat"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <label>Contoh Rumah,Apartement,Kos dan Dll</label>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nama Penerima"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="No Handphone"
                  id="float"
                  type="number"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} >
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}>
                    Provinsi
                 </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2">
                      Paris
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3">
                      Bucharest
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="4">
                      Rome
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} >
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}>
                    Kota / Kabupaten
                 </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}>
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}>
                      Multiple Select
              </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2">
                      Paris
              </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3">
                      Bucharest
              </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="4">
                      Rome
              </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Kode Pos"
                  id="float"
                  type="number"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  className="testing"
                  id="regular"
                  inputProps={{
                    placeholder: "Isi dengan nama Jalan Gang / No Rumah / Nama Gedung / Lantai / Dan lain-lain"
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
          </DialogContent>
          <GridContainer>
            <GridItem md={6}>
              <Button className="modal-button-close-tambahalamat"
                color="default">
                Close
        </Button>
            </GridItem>
            <GridItem md={6}>
              <Button className="modal-button-save-tambahalamat"
                color="warning">
                Save
        </Button>
            </GridItem>
          </GridContainer>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(ExampleOptionalSizes);
