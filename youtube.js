let parentNode = null;

const waitElement = (selector) => {
  return new Promise(resolve => {
    setInterval(() => {
      parentNode = document.querySelector(selector);
      if (parentNode !== null) { resolve(parentNode); }
    }, 500);
  });
}

function sendMedia(mode) {
  let msg = {
    media: { 
      service: "youtube",
      path: "url"
    }
  }
  msg.addmode = mode;
  chrome.runtime.sendMessage(msg)
}

function onAdd() { sendMedia("add"); }
function onPlay() { sendMedia("play"); }

let buttonPlay = document.createElement("button");
buttonPlay.addEventListener("click", onPlay, false)
buttonPlay.innerHTML = "play";

let buttonAdd = document.createElement("button");
buttonAdd.addEventListener("click", onAdd, false)
buttonAdd.innerHTML = "add";

(async () => {

  let parentNode = await waitElement("div[class='style-scope ytd-video-primary-info-renderer']")
  console.log(parentNode);

  parentNode.appendChild(buttonPlay)
  parentNode.appendChild(buttonAdd)
})()