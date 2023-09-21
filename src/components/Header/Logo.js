const LogoPage = (props) => {
  const { logo } = props;
  return (
    <div className="header-logo d-flex justify-center align-items-center">
      <img src={logo} alt="Logo" />
      <span className="text-xl">Furniro</span>
    </div>
  );
};

export default LogoPage;
