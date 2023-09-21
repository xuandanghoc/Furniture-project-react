const CategoryItem = (props) => {
  const { image, title } = props;
  return (
    <div className="category-wrapper-item">
      <img src={image} alt="category" />
      <p className="tx-center text-fs24">{title}</p>
    </div>
  );
};

export default CategoryItem;
