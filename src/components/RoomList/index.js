import { Button } from '../Button';
import { Room } from '../Room';

import { Container, RoomsContainer } from './styles';

export const RoomList = ({ currentRoom, rooms, onRoomClick, onJoinRoomButtonClick }) => (
  <Container>
    <h1>Available Rooms</h1>
    <RoomsContainer>
      {rooms.map((room) => (
        <Room
          key={room.id}
          room={room}
          onRoomClick={onRoomClick}
          isActive={currentRoom === room.id}
        />
      ))}
    </RoomsContainer>
    <Button
      fullWidth
      onClick={onJoinRoomButtonClick}
    >
      Join a Room
    </Button>
  </Container>
);
