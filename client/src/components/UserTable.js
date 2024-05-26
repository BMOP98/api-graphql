import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../css/style.css'; 

const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      Nombre
      Apellido
      mail
    }
  }
`;

const UserTable = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map(user => (
            <tr key={user._id}>
              <td>{user.Nombre}</td>
              <td>{user.Apellido}</td>
              <td>{user.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
