const Dot = (props) => {
  const { handleNextDot, nameClass } = props;
  return <span className={nameClass} onClick={handleNextDot} />;
};

export default Dot;
