const Room = (props) => {
  const { room, slideRef } = props;

  return (
      <img src={room} alt="slide-room" ref={slideRef}/>
  );
};

export default Room;
