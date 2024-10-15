
export async function sendUser(userData){
    const response = await fetch("http://127.0.0.1:8000/users/", {
        method: "POST", // Usamos el method POST para enviar los datos del form.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Convertimos los datos a JSON
    });
    if (response.ok) {
        alert(`Los datos fueron enviados con éxito!`);
    
    } else if (response.status === 400) {
        const errorData = await response.json();
        alert(`Ocurrió un error inesperado: ${JSON.stringify(errorData)}`);
    } else {
        alert(`Error al enviar los datos: ${response.status}`);
    }
}  

export async function getUserIdByUsername(username) {
    try {
        const response = await fetch('http://127.0.0.1:8000/users/'); // Obtén todos los usuarios
        if (response.ok) {
            const users = await response.json();
            const user = users.find(u => u.username === username); // Filtrar por username
            if (user) {
                return user;  // Aquí tienes el usuario completo
            } else {
                alert('Usuario no encontrado');
            }
        }
    } catch (error) {
        alert(`Error al obtener el usuario: ${error.message}`);
    }
}

export async function patchUser(userId, modifiedData) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/users/${userId}/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(modifiedData),
        });

        if (response.ok) {
            alert('Los datos fueron actualizados con éxito!');
        } else if (response.status === 400) {
            const errorData = await response.json();
            console.log('Detalles del error:', errorData);
            alert(`Ocurrió un error inesperado: ${JSON.stringify(errorData)}`);
        } else {
            alert(`Error al actualizar los datos: ${response.status}`);
        }
    } catch (error) {
        alert(`Error de conexión: ${error.message}`);
    }
}