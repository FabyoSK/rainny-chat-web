export const Room = ({ room, onRoomClick}) => {
  return (
    <div onClick={() => onRoomClick(room.id)}>
      <p>{room.name}</p>
      <span>users: {room.participants}</span>
    </div>
  );
}
