import Item from "./ShareItem";
import Image1 from "../../../assets/shareList/Image1.png";
import Image2 from "../../../assets/shareList/Image2.png";
import Image3 from "../../../assets/shareList/Image3.png";
import Image4 from "../../../assets/shareList/Image4.png";
import Image5 from "../../../assets/shareList/Image5.png";
import Image6 from "../../../assets/shareList/Image6.png";
import Image7 from "../../../assets/shareList/Image7.png";
import Image8 from "../../../assets/shareList/Image8.png";
import ImageMiddle from "../../../assets/shareList/ImageMiddle.png";

const listImage1th = [Image1, Image3, Image2, Image4];
const listImage2th = [Image5, Image8, Image7, Image6];

const Share = () => {
  return (
    <div className="share">
      <div className="share-title">
        <p className="text-fs20 text-center">Share your setup with</p>
        <p className="text-fs40 text-center">#FuniroFurniture</p>
      </div>
      <div className="share-wrapper">
        <div className="share-wrapper-list d-flex">
          {listImage1th.map((item, index) => {
            return <Item key={index} image={item} />;
          })}
        </div>
        <div className="share-wrapper-list d-flex align-items-center">
          <Item image={ImageMiddle} />
        </div>
        <div className="share-wrapper-list d-flex">
          {listImage2th.map((item, index) => {
            return <Item key={index} image={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Share;
