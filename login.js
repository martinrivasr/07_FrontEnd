import { loginController } from "./login/login-controller.js"

console.log("entro a login.js")


document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form")
  loginController(loginForm)
})
