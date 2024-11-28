//import { notificationController } from "./notification/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";
//import { tweetsController } from "./tweets/tweets-controller.js";

document.addEventListener("DOMContentLoaded", () => {

  //const detailContainer = document.querySelector("#detail-container");
  //const messageContainer = document.querySelector("#message-container");
  const sessionContainer = document.querySelector("#session-container");

  sessionController(sessionContainer)
 // tweetsController(tweetsContainer)
//  const { showNotification } = notificationController(messageContainer)

  //tweetsContainer.addEventListener("loading-tweets-info", (event) => {
  //  showNotification(event.detail.message, event.detail.type);
  //})
})