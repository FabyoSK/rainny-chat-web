import { useCallback, useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../contexts/socket';
import { useRoom } from '../../hooks/useRoom';
import { RoomList } from '../../components/RoomList';
import { Chat } from '../../components/Chat';
import { socketDispatchType } from '../../constants';
import styles from './room.module.scss'

export default function Room() {
  const {
    rooms,
    messages,
    handleFetchRooms,
    handleRoomSelect,
    handleAddMessage
  } = useRoom();

  const socket = useContext(SocketContext);

  const handleSendMessage = (text) => {
    const message = {
      content: text,
      senderName: 'FSK'
    };
    socket.emit(socketDispatchType.SEND_MESSAGE, message);
  };

  useEffect(() => {
    handleFetchRooms();
  }, [])

  useEffect(() => {
    // socket.on(socketDispatchType.CONNECTION, () => {
    //   console.log(`I'm connected with the back-end`);
    // });

    // socket.on(socketDispatchType.MESSAGE, (message) => {
    //   handleAddMessage(message);
    // });
 
    // return () => {
    //   socket.off('message');
    // };
  }, [socket]);

  return (
    <div className={styles.room}>
        <RoomList 
          rooms={rooms}
          onRoomClick={handleRoomSelect}
        />
        <Chat 
          messages={messages} 
          onSendButtonClick={handleSendMessage}
        />
    </div>
  );
}
