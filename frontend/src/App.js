import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './providers/AuthProvider';
import Layout from './components/Layout';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <h1>Welcome to My App</h1>
      </Layout>
    </AuthProvider>
  );
}

export default App;