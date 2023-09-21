import Title from "./Title";
import RoomPattern from "./RoomPattern/RoomPattern";
import SlideRoom from "./SlideRoom/SlideRoom";
import { Container } from "react-bootstrap";
const RoomInspiration = () => {
  return (
    <div className="inspiration">
      <Container>
        <div className="room-inspiration d-flex">
          <Title />
          <RoomPattern />
          <SlideRoom />
        </div>
      </Container>
    </div>
  );
};

export default RoomInspiration;
