import { REGEXP } from "../utilities/constants.js";
import { loginUser } from "./login-model.js";

export function loginController(loginForm) {
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userEmailElement = loginForm.querySelector("#user-mail");
    const passwordElement = loginForm.querySelector("#password");
    const nameElement = loginForm.querySelector("#name");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    

    // 2- validar el mail
    const emailRegExp = new RegExp(REGEXP.mail);
    if (!emailRegExp.test(userEmail)) {
      alert('formato de mail incorrecto')
    } else {
      handleLoginUser(userEmail, password, name)
    }
  })
}

async function handleLoginUser(userEmail, password) {
  const token = await loginUser(userEmail, password);

  localStorage.setItem("jwt", token);
  window.location.href = "/"
}
