import  { builtNotification } from './notifications-view.js'

export function notificationController(notificationController){
    const showNotification = (message, type='success') =>{
        notificationController.innerHTML= builtNotification(message, type);
        
        setTimeout(() => {
            notificationController.innerHTML = "";
        }, 3500);
    };

    const handleError = (error) =>{
        const errorMessage = error instanceof Error ? error.message : error;
        showNotification(errorMessage,'error');
    };

    return {
        showNotification,
        handleError,
    }
}