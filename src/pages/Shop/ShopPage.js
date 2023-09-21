import BannerPage from "../../components/BannerPage";
import Toolbar from "./ToolBar";
import PaginatedItems from "./PaginatePage";
import Guarantee from "../../components/Guarantee";
const ShopPage = () => {
  return (
    <div className="shop-page">
      <BannerPage page="Shop" />
      <Toolbar />
      <div className="shop-product">
        <PaginatedItems itemsPerPage={2} />
      </div>
      <Guarantee />
    </div>
  );
};

export default ShopPage;
