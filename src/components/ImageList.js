import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const imagenIndividual = props.images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        image={image}
        //src={image.urls.regular}
        //alt={`Producto ${image.alt_description}`}
      />
    );
  });
  return <div className="image-list">{imagenIndividual}</div>;
};

export default ImageList;
