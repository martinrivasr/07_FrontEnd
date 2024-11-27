import { createUserController } from "./register/register-controller.js"

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector('.login-form-container')
  createUserController(signupForm)
})
