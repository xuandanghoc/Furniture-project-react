import { useContext } from "react";
import ProductImage from "./ProductImage/ProductImage";
const DetailProduct = (props) => {
    const {name} = props;
    return (
        <div className="">
            <ProductImage />
        </div>
    )
}

export default DetailProduct;