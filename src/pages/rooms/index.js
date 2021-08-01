import {
  useContext, useEffect, useState
} from 'react';
import { useRoom } from '../../hooks/useRoom';
import { RoomList } from '../../components/RoomList';
import { Chat } from '../../components/Chat';
import { socketDispatchType } from '../../constants';
import styles from './room.module.scss';

export default function Room() {
  const {
    rooms,
    messages,
    currentRoom,
    handleFetchRooms,
    handleRoomSelect,
    handleSendMessage
  } = useRoom();

  useEffect(() => {
    handleFetchRooms();
  }, []);

  return (
    <div className={styles.room}>
      <RoomList
        rooms={rooms}
        onRoomClick={handleRoomSelect}
        currentRoom={currentRoom}
      />
      <Chat
        messages={messages}
        onSendButtonClick={handleSendMessage}
      />
    </div>
  );
}
