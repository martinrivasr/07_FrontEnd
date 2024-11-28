export function builtNotification (message, type){
    return `<div class="notification ${type}">
    <h3>${message}</h3>
  </div>`
}