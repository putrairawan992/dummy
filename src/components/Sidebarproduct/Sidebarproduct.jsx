import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Accordion from "components/Accordion/Accordion.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";
import { Radio } from "@material-ui/core";
import { FormGroup, Label, Input } from "reactstrap";


class Sidebarproduct extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: [1, 9, 27],
      priceRange: [101, 790],
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
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


  render() {
    const { classes } = this.props;

    return (


      <Card plain>
        <CardBody className={classes.cardBodyRefine}>
          <h4 className={`${classes.cardTitle} ${classes.textLeft}`}>
            Sort By:
                    <br />
            <FormGroup className="form-control-product">
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <Clearfix />
          </h4>
          <Accordion
            activeColor="rose"
            collapses={[
              {
                title: "Kategori",
                content: (

                  <div>

                    <Accordion
                      className="test123"
                      activeColor="rose"
                      collapses={[
                        {
                          title: "Pakaian Wanita",
                          content: (
                            <div>
                              <FormControlLabel
                                control={
                                  <Radio
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(9)}
                                    checked={
                                      this.state.checked.indexOf(9) !== -1
                                        ? true
                                        : false
                                    }
                                  />
                                }
                                classes={{ label: classes.label }}
                                label="Dress"
                              />
                              <FormControlLabel
                                control={
                                  <Radio
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(10)}
                                    checked={
                                      this.state.checked.indexOf(10) !== -1
                                        ? true
                                        : false
                                    }
                                  />
                                }
                                classes={{ label: classes.label }}
                                label="Dress"
                              />
                            </div>
                          )
                        }

                      ]}
                    >
                    </Accordion>

                    <Accordion
                      className="test123"
                      activeColor="rose"
                      collapses={[
                        {
                          title: "Pakaian Pria",
                          content: (


                            <div>
                              <FormControlLabel
                                control={
                                  <Radio
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(11)}
                                    checked={
                                      this.state.checked.indexOf(11) !== -1
                                        ? true
                                        : false
                                    }
                                  />
                                }
                                classes={{ label: classes.label }}
                                label="Dress"
                              />

                              <FormControlLabel
                                control={
                                  <Radio
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(12)}
                                    checked={
                                      this.state.checked.indexOf(12) !== -1
                                        ? true
                                        : false
                                    }
                                  />
                                }
                                classes={{ label: classes.label }}
                                label="Dress"
                              />
                            </div>
                          )
                        }

                      ]}
                    >
                    </Accordion>

                  </div>

                )
              }

            ]}

          />
          <hr className="line-product-sidebar" />

          <h4 className="SectionProducts-cardTitle-98 SectionProducts-textLeft-112">
            Kisaran Harga
                          </h4>

          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(1)}
                checked={
                  this.state.checked.indexOf(1) !== -1
                    ? true
                    : false

                }

              />
            }
            classes={{ label: classes.label }}
            label="Tampilkan semua"

          />
          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(2)}
                checked={
                  this.state.checked.indexOf(2) !== -1
                    ? true
                    : false
                }
              />
            }
            classes={{ label: classes.label }}
            label="Dibawah - 100k"
          />
          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(3)}
                checked={
                  this.state.checked.indexOf(3) !== -1
                    ? true
                    : false
                }
              />
            }
            classes={{ label: classes.label }}
            label="100 - 149k"
          />
          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(4)}
                checked={
                  this.state.checked.indexOf(4) !== -1
                    ? true
                    : false
                }
              />
            }
            classes={{ label: classes.label }}
            label="150 - 199k"
          />
          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(5)}
                checked={
                  this.state.checked.indexOf(5) !== -1
                    ? true
                    : false
                }
              />
            }
            classes={{ label: classes.label }}
            label="200 - 249k"
          />
          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(6)}
                checked={
                  this.state.checked.indexOf(6) !== -1
                    ? true
                    : false
                }
              />
            }
            classes={{ label: classes.label }}
            label="150 - 199k"
          />
          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(7)}
                checked={
                  this.state.checked.indexOf(7) !== -1
                    ? true
                    : false
                }
              />
            }
            classes={{ label: classes.label }}
            label="150 - 199k"
          />
          <FormControlLabel
            control={
              <Radio
                tabIndex={-1}
                onClick={() => this.handleToggle(8)}
                checked={
                  this.state.checked.indexOf(8) !== -1
                    ? true
                    : false
                }
              />
            }
            classes={{ label: classes.label }}
            label="150 - 199k"
          />
        </CardBody>
      </Card>

    );
  }
}

export default withStyles(styles)(Sidebarproduct);