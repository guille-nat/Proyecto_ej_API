import React, { useState } from "react";
import { sendUser, getUserIdByUsername, patchUser } from "../logic/sendApiData";

// Función para filtrar solo los campos que han sido modificados
const getModifiedFields = (originalData, newData) => {
    const modifiedData = {};
    for (let key in newData) {
        if (newData[key] && newData[key] !== originalData[key]) {
            modifiedData[key] = newData[key];
        }
    }
    return modifiedData;
};

export default function Form() {
    const [inputUser, setInputUser] = useState(true);
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    });
    const [originalUserData, setOriginalUserData] = useState({}); // Para almacenar los datos originales en caso de editar

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const cleanForm = () => {
        setUserData({
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: ''
        });
        setOriginalUserData({});
    };

    const sendForm = async (e) => {
        e.preventDefault();

        if (inputUser) {
            // Registro de nuevo usuario
            try {
                await sendUser(userData);
                cleanForm();
            } catch (error) {
                console.log(error);
            }
        } else {
            // Actualización de usuario
            try {
                const user = await getUserIdByUsername(userData.username); // Obtenemos el usuario por su username
                if (user) {
                    // Filtramos solo los campos que han sido modificados
                    const modifiedData = getModifiedFields(originalUserData, userData);
                    await patchUser(user.id, modifiedData); // Actualización con solo los campos modificados
                    cleanForm();
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="main">
                <div className="content-form">
                    <h1>Método POST y PATCH</h1>
                    <div className="toggle-button-cover">
                        <div className="button r" id="button-3">
                            <input
                                type="checkbox"
                                className="checkbox"
                                onClick={() => setInputUser(!inputUser)}
                            />
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                    <div className="form-card1">
                        <div className="form-card2">
                            <form className="form" onSubmit={sendForm}>
                                <p className="form-heading">FORMULARIO</p>
                                <div className="form-field">
                                    <input
                                        required
                                        type="text"
                                        placeholder="Nombre de Usuario"
                                        className="input-field"
                                        name="username"
                                        value={userData.username.toLowerCase()}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        
                                        type="text"
                                        placeholder="Nombre"
                                        className="input-field"
                                        name="first_name"
                                        value={userData.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        
                                        type="text"
                                        placeholder="Apellido"
                                        className="input-field"
                                        name="last_name"
                                        value={userData.last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        
                                        type="email"
                                        placeholder="Email"
                                        className="input-field"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                        className="input-field"
                                        value={userData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="sendMessage-btn" type="submit">
                                    {inputUser ? <p>Registrar Usuario</p> : <p>Actualizar Usuario</p>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
