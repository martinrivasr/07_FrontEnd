//import { notificationController } from "./notification/notifications-controller.js";
import { sessionController } from "../controllers/session-controller.js";
//import { tweetsController } from "./tweets/tweets-controller.js";

document.addEventListener("DOMContentLoaded", () => {

  const sessionContainer = document.querySelector("#session-container");

  sessionController(sessionContainer)

})