import { createContext, useContext, useState } from 'react';
import { socketDispatchType } from '../constants';
import { api } from '../services/api';

export const RoomContext = createContext();

export function RoomProvider(props) {
  const { children } = props;
  const [user, setUser] = useState({
    name: 'FSK'
  });
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSaveUser = (user) => {
    setUser(user);
  };

  const handleFetchRooms = async () => {
    const response = await api.get("rooms");
    setRooms(response.data);
  };


  // const handleRoomSelect = (id) => {
  //   console.log(id);
  //   setCurrentRoom(id);
  //   socket.emit(socketDispatchType.JOIN_ROOM, { 
  //     room_id: id, 
  //     user_name: user.name 
  //   });
  // };

  const handleAddMessage = (message) => {
    setMessages([...messages, message]);
  };
  
  console.log("Messages 3 =>", messages);
  console.log("RENDER");

  return (
    <RoomContext.Provider
      value={{
        user,
        rooms,
        messages,
        handleSaveUser,
        handleFetchRooms,
        // handleRoomSelect,
        handleAddMessage
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
export function useRoom() {
  const context = useContext(RoomContext);

  return context;
}
