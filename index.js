const video =  document.querySelector('video');
const button =  document.querySelector('button');

// Check for Browser is supported or not
if(!document.pictureInPictureEnabled){
    button.textContent = 'Browser does not supported';
    button.disabled = true;
    button.style.cursor = "not-allowed";
    button.style.opacity = "0.5"
}

video.addEventListener("enterpictureinpicture", () => (button.textContent = 'Remove'));

video.addEventListener("leavepictureinpicture", () => (button.textContent = 'Activate PiP'));

button.addEventListener("click", () => {
    document.pictureInPictureElement ? document.exitPictureInPicture() : video.requestPictureInPicture()
});