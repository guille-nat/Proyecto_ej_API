import React, { useMemo, useState } from "react";
import { useGetUser } from "../logic/useGetUser";

function ListUsers() {
  const [buscar, setBuscar] = useState(false);
  const { userData, loading, error } = useGetUser({ buscar });

  const renderUsers = useMemo(() => {
    return Array.isArray(userData) && userData.length > 0 ? (
      userData.map((user) => (
        <li key={user.id}>
          <div>
            <span>Nombre: </span>
            {user.first_name}
          </div>
          <div>
            <span>Apellido: </span>
            {user.last_name}
          </div>
          <div>
            <span>Nombre de Usuario: </span>
            {user.username}
          </div>
          <div>
            <span>Email: </span>
            {user.email}
          </div>
          <br />
        </li>
      ))
    ) : (
      <p>No hay usuarios...</p>
    ); // Mensaje alternativo
  }, [userData]);

  return (
    <>
      <div className="main">
        {loading && (
          <div className="macbook">
            <div className="inner">
              <div className="screen">
                <div className="face-one">
                  <div className="camera"></div>
                  <div className="display">
                    <div cclassName="shade"></div>
                  </div>
                  <span>MacBook Air</span>
                </div>
                <title>Layer 1</title>
              </div>
              <div className="macbody">
                <div className="face-one">
                  <div className="touchpad"></div>
                  <div className="keyboard">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key space"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                  </div>
                </div>
                <div className="pad one"></div>
                <div className="pad two"></div>
                <div className="pad three"></div>
                <div className="pad four"></div>
              </div>
            </div>
            <div className="shadow"></div>
          </div>
        )}
        <div className="list-users">
          <h1>Lista de Usuarios</h1>
          <button class="cssbuttons-io" onClick={() => setBuscar(!buscar)}>
            <span>
              Buscar{" "}
              <svg
                viewBox="0 0 19.9 19.7"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="title desc"
                class="svg-icon search-icon"
              >
                <title>Search Icon</title>
                <desc id="desc">A magnifying glass icon.</desc>
                <g stroke="white" fill="none" class="search-path">
                  <path d="M18.5 18.3l-5.4-5.4" stroke-linecap="square"></path>
                  <circle r="7" cy="8" cx="8"></circle>
                </g>
              </svg>
            </span>
          </button>

          <ul>{renderUsers}</ul>
        </div>
        <div>{error && <p>Error al cargar los datos: {error.message}</p>}</div>
      </div>
    </>
  );
}

export default ListUsers;
