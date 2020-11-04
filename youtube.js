let parentNode = null;

const waitElement = (selector) => {
  return new Promise(resolve => {
    setInterval(() => {
      parentNode = document.querySelector(selector);
      if (parentNode !== null) { resolve(parentNode); }
    }, 500);
  });
}


const sendMedia = (mode) => {
    let msg = {
      media: {
        service: "youtube",
        position: mode,
        path: window.location.href,
      }
    }
    chrome.runtime.sendMessage(msg)
}

const onPlay = () => { sendMedia("now"); }
const onAddNext = () => { sendMedia("next")}
const onAddPlaylist = () => { sendMedia("end"); }

let buttonPlay = document.createElement("button");
buttonPlay.addEventListener("click", onPlay, false)
buttonPlay.innerHTML = "play";

let buttonAddPlaylist = document.createElement("button");
buttonAddPlaylist.addEventListener("click", onAddPlaylist, false)
buttonAddPlaylist.innerHTML = "add to playlist";

let buttonAddNext = document.createElement("button");
buttonAddNext.addEventListener("click", onAddNext, false)
buttonAddNext.innerHTML = "play next";

(async () => {

  let parentNode = await waitElement("div[class='style-scope ytd-video-primary-info-renderer']")
  console.log(parentNode);

  parentNode.appendChild(buttonPlay)
  //parentNode.appendChild(buttonAddNext)
  parentNode.appendChild(buttonAddPlaylist)

})()