import ShareIcon from "../../assets/products/Share.png";
import CompareIcon from "../../assets/products/Compare.png";
import HeartIcon from "../../assets/products/Heart.png";

const ModalProduct = (props) => {
  const { style, setIndexId, handleDisplayModal, handleOnClick } = props;
  return (
    <div
      className="modal-product"
      style={style}
      onMouseLeave={() => {
        setIndexId(null)
      }}
      onMouseEnter={handleDisplayModal}
    >
      <a type="text" href="/product" onClick={handleOnClick}>Add to cart</a>
      <div className="interact d-flex justify-content-center">
        <span className="icon d-flex align-items-center">
          <img src={ShareIcon} alt="ShareIcon" />
          <span>Compare</span>
        </span>
        <span className="icon d-flex align-items-center">
          <img src={CompareIcon} alt="Compare" />
          <span>Compare</span>
        </span>
        <span className="icon d-flex align-items-center">
          <img src={HeartIcon} alt="HeartIcon" />
          <span>Like</span>
        </span>
      </div>
    </div>
  );
};

export default ModalProduct;
