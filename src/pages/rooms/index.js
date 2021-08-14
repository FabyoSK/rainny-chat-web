import {
  useEffect,
  useState } from 'react';
import { useRoom } from '../../hooks/useRoom';
import { RoomList } from '../../components/RoomList';
import { Chat } from '../../components/Chat';
import { socketDispatchType } from '../../constants';
import { Container } from './styles';
import { AuthGuard } from '../../components/auth/AuthGuard';
import { RoomModal } from '../../components/RoomModal';

export default function Room() {
  const {
    rooms,
    messages,
    currentRoom,
    handleFetchRooms,
    handleRoomSelect,
    handleSendMessage
  } = useRoom();

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(
    false
  );

  function handleOpenRoomModal() {
    setIsRoomModalOpen(true);
  }

  function handleCloseRoomModal() {
    setIsRoomModalOpen(false);
  }

  useEffect(async () => {
    await handleFetchRooms();
  }, []);

  return (
    <AuthGuard>
      <RoomModal
        isOpen={isRoomModalOpen}
        onRequestClose={handleCloseRoomModal}
      />
      <Container>
        <RoomList
          rooms={rooms}
          onRoomClick={handleRoomSelect}
          currentRoom={currentRoom}
          onJoinRoomButtonClick={handleOpenRoomModal}
        />
        <Chat
          messages={messages}
          onSendButtonClick={handleSendMessage}
        />
      </Container>
    </AuthGuard>
  );
}
