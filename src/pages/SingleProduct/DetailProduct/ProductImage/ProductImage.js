import MiniImage from "./MiniImage";
import { useMyContext } from "../ContextProduct";

export default function ProductImage () {
  const { image } = useMyContext();
  console.log(image);
  return (
    <div className="product-image">
      <div className="product-">
        <MiniImage image={image} />
      </div>
      <div className="">
        <img src={image} alt="product" />
      </div>
    </div>
  );
};
