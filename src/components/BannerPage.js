import Logo from "../assets/Logo.png";
import ImageBanner from "../assets/ShopPage/BannerShop.png";

const BannerPage = (props) => {
  const { page } = props;
  const style = {
    backgroundImage: `url(${ImageBanner})`
  }
  return (
    <div className="banner-page" style={style}>
      <div className="banner-page-wrapper">
        <img src={Logo} alt="logo" />
        <p className="banner-page-wrapper-name text-fs48">{page}</p>
        <div className="banner-page-wrapper-direction">
          <span className="direction-root text-fs16 fw-normal">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
          </svg>
          <span className="direction-destination text-fs16 fw-light">{page}</span>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
