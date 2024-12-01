import { createUserController } from "../controllers/register-controller.js"

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector('form')
  console.log(signupForm)
  createUserController(signupForm)
})
