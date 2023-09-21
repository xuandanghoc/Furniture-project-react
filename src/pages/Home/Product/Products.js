import Grifo from "../../../assets/products/Grifo.png";
import Syltherine from "../../../assets/products/Syltherine.png";
import Leviosa from "../../../assets/products/Leviosa.png";
import Lolito from "../../../assets/products/Lolito.png";
import Respira from "../../../assets/products/Respira.png";
import Potty from "../../../assets/products/Potty.png";
import Muggo from "../../../assets/products/Muggo.png";
import Pingky from "../../../assets/products/Pingky.png";
import ModalProduct from "../../../components/Product/ModalProduct";
import { useState } from "react";
import Product from "../../../components/Product/ProductItem";
import SingleProduct from "../../SingleProduct/SingleProduct";

const products = [
  {
    id: 0,
    image: Syltherine,
    name: "Syltherine",
    type: "Stylish cafe chair",
    priceDiscount: "Rp 2.500.000",
    priceOrigin: "Rp 3.500.000",
    percent: "-30%",
  },
  {
    id: 1,
    image: Leviosa,
    name: "Leviosa",
    type: "Stylish cafe chair",
    priceDiscount: "Rp 2.500.000",
    priceOrigin: "",
    percent: "",
  },
  {
    id: 2,
    image: Lolito,
    name: "Lolito",
    type: "Luxury big sofa",
    priceDiscount: "Rp 7.000.000",
    priceOrigin: "Rp 14.000.000",
    percent: "-50%",
  },
  {
    id: 3,
    image: Respira,
    name: "Respira",
    type: "Outdoor bar table and stool",
    priceDiscount: "Rp 500.000",
    priceOrigin: "",
    percent: "New",
  },
  {
    id: 4,
    image: Grifo,
    name: "Grifo",
    type: "Night lamp",
    priceDiscount: "Rp 1.500.000",
    priceOrigin: "",
    percent: "",
  },
  {
    id: 5,
    image: Muggo,
    name: "Muggo",
    type: "Small mug",
    priceDiscount: "Rp 150.000",
    priceOrigin: "",
    percent: "New",
  },
  {
    id: 6,
    image: Pingky,
    name: "Pingky",
    type: "Cute bed set",
    priceDiscount: "Rp 7.000.000",
    priceOrigin: "Rp 14.000.000",
    percent: "-50%",
  },
  {
    id: 7,
    image: Potty,
    name: "Potty",
    type: "Minimalist flower pot",
    priceDiscount: "Rp 500.000",
    priceOrigin: "",
    percent: "New",
  },
];

const ListProduct = () => {
  let idIndex = null;
  const [indexId, setIndexId] = useState(null);

  const [productSelected, setProductSelected] = useState({});

  const handleDisplayModal = (product, index) => {
    if (index === product.id) {
      idIndex = index;
      setIndexId(idIndex);
    }
  };

  const handleHideModal = () => {
    setIndexId(null);
  };

  const styleModal = {
    display: "block",
    opacity: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 160,
    backgroundColor: "rgba(79, 78, 75, 0.72)",
  };


  return (
    <div className="product-list container">
      {products.map((product, index) => {
        return (
          <div className="product-item" key={product.id}>
            <Product
              image={product.image}
              name={product.name}
              type={product.type}
              priceDiscount={product.priceDiscount}
              priceOrigin={product.priceOrigin}
              percent={product.percent}
            />
            <ModalProduct
              style={{
                ...styleModal,
                opacity: indexId === product.id ? 1 : 0,
              }}
              handleDisplayModal={() => handleDisplayModal(product, index)}
              setIndexId={setIndexId}
              handleOnClick={() => {
                // setProductSelected(product);
                localStorage.setItem('productSelected', JSON.stringify(product))
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ListProduct;
