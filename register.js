import { createUserController } from "./register/register-controller.js"

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector('form')
  console.log(signupForm)
  createUserController(signupForm)
})
