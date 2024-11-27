//import { notificationController } from "./notification/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";
//import { tweetsController } from "./tweets/tweets-controller.js";

alert("cargado");

console.log("Archivo index.js cargado correctamente");
document.addEventListener("DOMContentLoaded", () => {

  console.log("DOMContentLoaded ejecutado");
  //const detailContainer = document.querySelector("#detail-container");
  //const messageContainer = document.querySelector("#message-container");
  const sessionContainer = document.querySelector("#session-container");
  console.log("Session container:", sessionContainer);

  sessionController(sessionContainer)
 // tweetsController(tweetsContainer)
//  const { showNotification } = notificationController(messageContainer)

  //tweetsContainer.addEventListener("loading-tweets-info", (event) => {
  //  showNotification(event.detail.message, event.detail.type);
  //})
})