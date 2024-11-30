
import { createPostController } from "../controllers/listpost-controller.js"
import { renderNav } from "../views/nav-view.js"

document.addEventListener("DOMContentLoaded", () =>{

    const navbarContainer = document.querySelector(".navbar");
    navbarContainer.innerHTML = renderNav();

    console.log(navbarContainer)
    const createPostContainer = document.querySelector(".product-form-container");
    console.log(createPostContainer)
    createPostController(createPostContainer);
})