import ModalProduct from "./ModalProduct";
import { useState } from "react";

const Product = (props) => {
  const {
    image,
    name,
    type,
    priceDiscount,
    priceOrigin,
    percent,
    handleDisplayModal,
    handleHideModal,
  } = props;
  const styles = {
    display: "block",
  };

  const styleBg = {
    backGroundColor: "#3A3A3A",
    opacity: 0.72,
  };

  return (
    <div className="product-item-detail" onMouseEnter={handleDisplayModal}>
      <img src={image} alt="product" />
      <div className="product-item-content">
        <p className="name text-fs24">{name}</p>
        <p className="type">{type}</p>
        <div className="price">
          <span className="text-fs20">{priceDiscount}</span>
          <span className="">{priceOrigin}</span>
        </div>
      </div>
      {percent !== "" && (
        <div className="product-item-percent d-flex align-items-center justify-content-center">
          {percent}
        </div>
      )}
    </div>
  );
};

export default Product;
