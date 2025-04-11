import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './providers/AuthProvider';
import Layout from './components/Layout';
import UserListAccordion from './components/UserListAccordion';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <h1>Welcome to My App</h1>
        <UserListAccordion users={[
          {
            id: 1,
            name: 'JohnDoe',
            isOnline: true,
            isAdmin: false,
            isTyping: false,
            avatar: 'https://i.pravatar.cc/150?img=1',
            lastSeen: '2 minutes ago'
          },
          {
            id: 2,
            name: 'JaneSmith',
            isOnline: true,
            isAdmin: true,
            isTyping: true,
            avatar: 'https://i.pravatar.cc/150?img=2',
            lastSeen: 'Online now'
          },
          {
            id: 3,
            name: 'BobJohnson',
            isOnline: false,
            isAdmin: false,
            isTyping: false,
            avatar: 'https://i.pravatar.cc/150?img=3',
            lastSeen: 'Last seen 1 hour ago'
          }
        ]}
          onlineCount={2} />
        <ChatRoom />
      </Layout>
    </AuthProvider>
  );
}

export default App;