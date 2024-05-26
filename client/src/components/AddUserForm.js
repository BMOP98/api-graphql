import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import '../css/style.css'; // Importar estilos CSS

const ADD_USER = gql`
  mutation AddUser($Nombre: String!, $Apellido: String!, $mail: String!) {
    addUser(Nombre: $Nombre, Apellido: $Apellido, mail: $mail) {
      _id
      Nombre
      Apellido
      mail
    }
  }
`;

const AddUserForm = () => {
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');

  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser({ variables: { Nombre, Apellido, mail } });
    setNombre('');
    setApellido('');
    setMail('');
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={Nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={Apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddUserForm;
