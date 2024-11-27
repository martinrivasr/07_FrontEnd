import { createProductController } from "./createproduct/createproduct-controller.js";

document.addEventListener("DOMContentLoaded", () =>{
    const createProduct = document.querySelector('form');

    createProductController(createProduct)
})