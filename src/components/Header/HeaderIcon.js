const HeaderIcon = (props) => {
  const { icon } = props;
  return (
      <span className="icon">
        <img src={icon} alt="icon" />
      </span>
  );
};

export default HeaderIcon;
