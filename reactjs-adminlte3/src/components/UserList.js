import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered ml-5 mr-5">
      <div className="column is-half">
        <Link to={`add`} class="btn btn-success btn-lg mb-5">
          Agregar Nuevo Estudiante
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Hora Entrada</th>
              <th>Hora Salida</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nombre}</td>
                <td>{user.hora_entrada}</td>
                <td>{user.hora_salida}</td>
                <td>{user.fecha}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="btn btn-outline-info mr-2"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-outline-danger "
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;