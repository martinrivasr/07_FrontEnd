export async function createNewProduct(newProduct) {
    const token = localStorage.getItem('jwt');

    try {
        const response = await fetch("http://localhost:8000/api/tweets", {
            method: "POST",
            body: JSON.stringify(newProduct), // Elimina el objeto adicional
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json(); // Obtiene el mensaje de error del servidor
            throw new Error(errorData.message || "Error creando producto"); // Usa el mensaje del servidor si está disponible
        }

        return await response.json(); // Retorna la respuesta si es exitosa

    } catch (error) {
        console.error("Error creando producto:", error.message); // Muestra el error en la consola
        throw error; // Lanza el error para que pueda ser manejado en otro lugar
    }
}
