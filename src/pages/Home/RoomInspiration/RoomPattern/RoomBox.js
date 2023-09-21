import RightIcon from "../../../../assets/RightIcon.png";

const RoomBox = (props) => {
  const { id, name, type, handleChangeBackground } = props;
  return (
    <div className="room-inspiration-pattern-box d-flex">
      <div className="room-inspiration-box-wrapper">
        <div className="box-name d-flex align-items-center">
          <span className="text-fs16">{id}</span>
          <span className="line"></span>
          <span className="text-fs16">{name}</span>
        </div>
        <div className="box-sub">{type}</div>
      </div>
      <span className="next-icon" onClick={handleChangeBackground}>
        <img src={RightIcon} alt="icon" />
      </span>
    </div>
  );
};

export default RoomBox;
