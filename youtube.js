let bar = document.getElementsByTagName("ytd-video-primary-info-renderer");
console.log(bar);

let button = document.createElement("button");
button.innerHTML = "play";
button.id = "button-play";

bar.appendChild(button);