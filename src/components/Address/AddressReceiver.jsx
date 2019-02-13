import React from "react";
import { Card } from "@material-ui/core";
import PropTypes from "prop-types";

const addressReceiver = props => {
  return (
    <Card>
      <p>{props.labelName}</p>
      <p>{props.receiverName}</p>
      <p>{props.fullAddress}</p>
      <p>Ganti Alamat</p>
    </Card>
  );
};

addressReceiver.PropTypes = {
  id: PropTypes.string,
  labelName: PropTypes.string,
  receiverName: PropTypes.string,
  fullAddress: PropTypes.string,
  isDefault: PropTypes.bool
};

export default addressReceiver;
