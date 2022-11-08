import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";

const EditUser = () => {
  const [nombre, setnombre] = useState("");
  const [hora_entrada, sethora_entrada] = useState("");
  const [hora_salida, sethora_salida] = useState("");
  const [fecha, setfecha] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nombre,
        hora_entrada,
        hora_salida,
        fecha
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

    const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setnombre(response.data.nombre);
    sethora_entrada(response.data.hora_entrada);
    sethora_salida(response.data.hora_salida);
    setfecha(response.data.fecha);
    
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser } className="ml-5 mr-5">
          <div className="field ">
            <label className="label mt-3">Nombre</label>
            <div className="control">
              <input
                type="text"
                className="input form-control"
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
                placeholder="Nombre"
              />
            </div>
          </div>
          <div className="field">
            <label className="label mt-3">Hora Entrada</label>
            <div className="control">
              <input
                type="text"
                className="input form-control"
                value={hora_entrada}
                onChange={(e) => sethora_entrada(e.target.value)}
                placeholder="Hora Entrada"
              />
            </div>
          </div>
          <div className="field">
            <label className="label mt-3">Hora Salida</label>
            <div className="control">
              <input
                type="text"
                className="input form-control"
                value={hora_salida}
                onChange={(e) => sethora_salida(e.target.value)}
                placeholder="Hora Salida"
              />
            </div>
          </div>
          <div className="field">
            <label className="label mt-3">Fecha</label>
            <div className="control">
              <input
                type="date"
                className="input form-control"
                value={fecha}
                onChange={(e) => setfecha(e.target.value)}
                placeholder="Fecha"
              />
            </div>
          </div>
          <div className="field">
            <center>
            <button type="submit" className="btn btn-outline-success btn-lg mt-5 ">
              Actualizar
            </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;