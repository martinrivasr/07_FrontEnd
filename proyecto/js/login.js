import { loginController } from "../controllers/login-controller.js"

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form")
  loginController(loginForm)
})
