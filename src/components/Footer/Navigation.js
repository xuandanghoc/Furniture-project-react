const Nav = (props) => {
  const { title, listNav } = props;
  return (
    <div className="footer-wrapper-top-nav">
      <p>{title}</p>
      <ul className="footer-wrapper-top-nav-list d-flex flex-column mr-top">
        {listNav.map((item) => {
          return (
            <a className="nav-item" key={item}>
              {item}
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
