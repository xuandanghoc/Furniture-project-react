import { useState, useEffect, createContext } from "react";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import DetailProduct from "./DetailProduct/DetailProduct";
import { useContext } from "react";
import { MyContextProvider } from './DetailProduct/ContextProduct';

const SingleProduct = () => {
  const [myLocalStorageData, setMyLocalStorageData] = useState({});

  useEffect(() => {
    //logic for getting a value from local storage stored under the key 'key'
    const data = JSON.parse(localStorage.getItem("productSelected"));
    setMyLocalStorageData(data);
  }, []);

  return (
    <div className="single-product">
      <MyContextProvider>
        <Navigation productName={myLocalStorageData.name} />
        <DetailProduct />
      </MyContextProvider>
    </div>
  );
};

export default SingleProduct;
