import { socket, SocketContext } from '../contexts/socket';
import { AuthProvider } from '../hooks/useAuth';
import { RoomProvider } from '../hooks/useRoom';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <RoomProvider>
        <SocketContext.Provider value={socket}>
          <Component {...pageProps} />
          <GlobalStyle />
        </SocketContext.Provider>
      </RoomProvider>
    </AuthProvider>

  );
}

export default MyApp;
