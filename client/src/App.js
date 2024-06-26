import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Ingreso de Usuarios</h1>
        <AddUserForm />
        <UserTable />
      </div>
    </ApolloProvider>
  );
};

export default App;
