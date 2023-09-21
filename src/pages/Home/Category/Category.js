import CategoryItem from "./CategoryItem";
import Dining from "../../../assets/category/dining.png";
import Living from "../../../assets/category/living.png";
import Bed from "../../../assets/category/bed.png";

const categoryLists = [
  {
    title: "Dining",
    image: Dining,
  },
  {
    title: "Living",
    image: Living,
  },
  {
    title: "Bedroom",
    image: Bed,
  },
];

const Category = () => {
  return (
    <div className="category container">
      <div className="category-title">
        <p className="tx-center text-xl">Browse The Range</p>
        <p className="tx-center text-fs20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="category-wrapper d-flex justify-content-center">
        {categoryLists.map((item) => {
          return (
            <CategoryItem
              image={item.image}
              title={item.title}
              key={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
