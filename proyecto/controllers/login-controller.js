import { REGEXP } from "../shared/utilities/constants.js";
import { loginUser } from "../models/login-model.js"; 
import { notificationController } from "../shared/notification/notifications-controller.js";

export function loginController(loginForm) {
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userEmailElement = loginForm.querySelector("#user-mail");
    const passwordElement = loginForm.querySelector("#password");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    

    // 2- validar el mail
    const emailRegExp = new RegExp(REGEXP.mail);
    if (!emailRegExp.test(userEmail)) {
      alert('formato de mail incorrecto')
    } else {
      handleLoginUser(userEmail, password)
    }
  })
}

async function handleLoginUser(userEmail, password) {
  try {
    const token = await loginUser(userEmail, password);

    localStorage.setItem("jwt", token);
    window.location.href = "/"

  } catch (error) {
    const notificationContainer = document.querySelector("#message-container");
    const { showNotification  } = notificationController(notificationContainer)
    showNotification ("Error al inciar sesion, usuario y/o password incorrecto","error")
  }

}
