import Room from "./Room";
import Dot from "./Dot";
import Room1 from "../../../../assets/pattern/Pattern1.png";
import Room2 from "../../../../assets/pattern/Room2.png";
import Room3 from "../../../../assets/pattern/Room3.png";
import Room4 from "../../../../assets/pattern/Room4.png";
import { useState, useRef, useEffect } from "react";

const rooms = [Room1, Room2, Room3, Room4];

const SlideRoom = () => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  const slideRef = useRef(null);


  useEffect(() => {}, []);

  const handleNextDot = (index) => {
    if (slideRef.current) {
      const widthOfDiv = slideRef.current.clientWidth + 24;

      if (width < widthOfDiv * rooms.length - 2) {
        setWidth(widthOfDiv * index);
        setCount(index)
      }
    }
  };
  const handleNext = (index) => {
    if (slideRef.current) {
      const widthOfDiv = slideRef.current.clientWidth + 24;

      if (width < +widthOfDiv * (rooms.length - 1)) {
        setWidth(widthOfDiv + width);
        setCount(+index + 1)
      } else {
        setWidth(0);
        setCount(0);
      }
    }
  };

  const style = {
    transform: `translateX(${-width}px)`,
  };

  return (
    <div className="slide-room">
      <div className="slide-room-list d-flex">
        <div
          className="d-flex slide-room-list-wrapper"
          style={handleNextDot && style}
        >
          {rooms.map((room, index) => {
            return <Room room={room} key={index} slideRef={slideRef} />;
          })}
        </div>
      </div>
      <div className="slide-room-dot">
        {rooms.map((room, index) => {
          return (
            <Dot
              key={index}
              handleNextDot={() => handleNextDot(index)}
              nameClass={index === count ? "active" : "dot"}
            />
          );
        })}
      </div>
      <svg
        onClick={() => handleNext(count)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.00006 5L16.0001 12L9.00006 19"
          stroke="#B88E2F"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SlideRoom;
