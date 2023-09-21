import ListProduct from "./Products";
import Button from "../../../components/Button";
import { useData } from "./Products";

const ProductHome = () => {
  return (
    <div className="product">
      <p className="product-title">Our Products</p>
      <ListProduct />
      <div className="text-center button-wrapper">
        <Button content="Show More" />
      </div>
    </div>
  );
};

export default ProductHome;
