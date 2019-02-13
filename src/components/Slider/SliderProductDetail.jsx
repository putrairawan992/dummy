import React from "react";
import propTypes from "prop-types";
import ImageGallery from "react-image-gallery";

const sliderProductDetail = props => {
  const images = [];
  props.productImages.map(productImage => {
    images.push({
      original: productImage.big,
      thumbnail: productImage.small
    });
  });
  return (
    <div>
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        startIndex={0}
        items={images}
      />
    </div>
  );
};

sliderProductDetail.propTypes = {
    productImages : propTypes.arrayOf(Object)
};

export default sliderProductDetail;
