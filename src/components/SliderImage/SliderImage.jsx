import React from "react";
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
import ImageGallery from "react-image-gallery";
// images
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

export default SliderImage => {
  const images = [
    {
      original: product3,
      thumbnail: product4
    },
    {
      original: product4,
      thumbnail: product4
    },
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product2,
      thumbnail: product2
    }
  ];

  return (
    
    <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      startIndex={0}
      items={images}
  
    />
    
  );
};
