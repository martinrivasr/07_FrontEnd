export async function createUser(email, password){
    // pendiente hacer gestión de errores como en tweets-model.js
  
    const response = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password
      }),
      headers: {
        "Content-type": "application/json"  
      }
    });
  
    if (!response.ok) {
      throw new Error("error creando usuario")
    }
  }