import  { builtNotification } from './notifications-view.js'

export function notificationController(notificationController){
    const showNotification = (message, type='success') =>{
        notificationController.innerHTML= builtNotification(message, type);
        
        setTimeout(() => {
            notificationController.innerHTML("");
        }, 3500);
    }
    return {
        showNotification
    }
}