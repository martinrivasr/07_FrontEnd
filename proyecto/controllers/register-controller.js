import { REGEXP } from "../shared/utilities/constants.js";
import { createUser } from "../models/register-model.js";

export function createUserController(form) {

  // 1- obtener los datos del 

  form.addEventListener("submit", (event) => {

    event.preventDefault();
  
    const userEmailElement = form.querySelector("#user-mail");
    const passwordElement = form.querySelector("#password");
    const passwordConfirmElement = form.querySelector("#password-confirm");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    const passwordConfirm = passwordConfirmElement.value;
    
    const errors = [];

    // 2- validarlos
    const emailRegExp = new RegExp(REGEXP.mail);
    if (!emailRegExp.test(userEmail)) {
      errors.push('formato de mail incorrecto verifique, ')
    }

    if (password !== passwordConfirm) {
      errors.push('los passwords ingresados no son iguales')
    }

    for (const error of errors) {
      alert(error)      
    }

    if (errors.length === 0) {
      handleCreateUser(userEmail, password)
    }
  })

}

async function handleCreateUser(userEmail, password, userName) {
  // 3- consumir sparrest para crear el usuario
  try {
    await createUser(userEmail, password)
    window.location.href = "/";
  } catch (error) {
    alert(error.message)
  }
}
