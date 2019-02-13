import React from "react";
import Category from "./Category";
import PropTypes from "prop-types";
import { Row } from 'reactstrap';
const categories = props => {

  return (
    <Row style={{ marginBottom: "2em" }}>
      {props.categories.map((category) => {
        return (
          <Category
            key={category.id}
            id={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </Row>
  );
};

categories.PropTypes = {
  categories: PropTypes.arrayOf(Object)
};

export default categories;
