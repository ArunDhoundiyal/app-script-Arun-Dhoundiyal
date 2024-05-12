import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import "./index.css";

const Product = (props) => {
  const { eachItem } = props;
  const { title, image, description } = eachItem;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="item-card-container">
      <img src={image} alt={title} className="product-img" />
      <div className="title-description-container">
        <div className="title-toggle-button-container">
          <h1 className="product-heading">{title}</h1>
          <button className="toggle-button" onClick={toggleFavorite}>
            {isFavorite ? (
              <GoHeartFill className="toggle-icon toggle-icon-color" />
            ) : (
              <GoHeart className="toggle-icon" />
            )}
          </button>
        </div>
        <p className="product-paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Product;
