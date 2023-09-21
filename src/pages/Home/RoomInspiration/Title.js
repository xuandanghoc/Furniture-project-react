import Button from "../../../components/Button";
const Title = () => {
  return (
    <div className="room-inspiration-title">
      <p className="text-fs40">50+ Beautiful rooms inspiration</p>
      <p className="text-fs16 fw-normal">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <div className="room-inspiration-button">
        <Button content="Explore More" />
      </div>
    </div>
  );
};

export default Title;
