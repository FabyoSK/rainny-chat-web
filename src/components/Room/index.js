import { Container, RoomName } from './styles';

export const Room = ({ room, onRoomClick, isActive }) => (
  <Container
    isActive={isActive}
    onClick={() => onRoomClick(room.id)}
  >
    <RoomName>{room.name}</RoomName>
    {/* <span>
      users:
      {room.participants.length}
    </span> */}
  </Container>
);
