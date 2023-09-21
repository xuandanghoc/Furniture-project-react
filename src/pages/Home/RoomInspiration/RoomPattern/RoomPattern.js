import Dining from "../../../../assets/category/dining.png";
import Living from "../../../../assets/category/living.png";
import BedRoom from "../../../../assets/pattern/BedRoom.png";
import RoomBox from "./RoomBox";
import RightIcon from "../../../../assets/RightIcon.png";
import { useState } from "react";

const rooms = [
  {
    id: 0,
    name: "Bed Room",
    type: "Inner Peace",
    image: BedRoom,
  },
  {
    id: 1,
    name: "Living Room",
    type: "Inner Peace",
    image: Living,
  },
  {
    id: 2,
    name: "Dining Room",
    type: "Inner Peace",
    image: Dining,
  },
];

const RoomPattern = () => {
  const [indexBg, setIndexBg] = useState(0);

  const handleChangeBackground = () => {
    if (indexBg >= rooms.length - 1) {
      setIndexBg(0);
    } else {
      setIndexBg(indexBg + 1);
    }
  };
  const styles = {
    backgroundImage: `url(${rooms[indexBg].image})`,
    backgroundRepeat: "no-repeat",
  };
  console.log(rooms[2].id + 1)

  return (
    <div className="room-inspiration-pattern d-flex" style={styles}>
      <RoomBox id={"0" + `${rooms[indexBg].id + 1}`} name={rooms[indexBg].name} type={rooms[indexBg].type} handleChangeBackground={handleChangeBackground} />
    </div>
  );
};

export default RoomPattern;
