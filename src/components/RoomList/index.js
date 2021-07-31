import { Room } from '../Room';

export const RoomList = ({ rooms, onRoomClick }) => {
  return (
    <div>
      <div>
        {rooms.map((room) => (
          <Room key={room.id} room={room} onRoomClick={onRoomClick}/>
        ))}
      </div>
      <button>
        Create New Room
      </button>
    </div>
  );
}
