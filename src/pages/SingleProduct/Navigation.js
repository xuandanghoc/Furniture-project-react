import ArrowRight from "../../components/ArrowRight";
import { Container } from "react-bootstrap";
const Navigation = (props) => {
  const { productName } = props;
  return (
    <div className="single-product-link">
      <div className="single-product-link-wrapper container d-flex align-items-center">
        <a className="fw-normal" href="/">Home</a>
        <ArrowRight />
        <a className="fw-normal" href="/shop">Shop</a>
        <ArrowRight />
        <span className="line-vertical"></span>
        <span className="fw-normal">{productName}</span>
      </div>
    </div>
  );
};

export default Navigation;
