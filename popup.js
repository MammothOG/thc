document.addEventListener('DOMContentLoaded', () => {
    let inputIp = document.getElementById('ip');
    let buttonPlayPause = document.getElementById('play');
    let buttonPrevious = document.getElementById('previous');
    let buttonNext = document.getElementById('next');
    let buttonClearPlaylist = document.getElementById('clear-playlist');
    let buttonStop = document.getElementById('stop');
    let buttonConnect = document.getElementById('connection');

    function send(request, path) {
        let msg = {
            api: path,
            content: request,
        }
        chrome.runtime.sendMessage(msg);
    }

    function onPlayPause() {
        if (buttonPlayPause.innerHTML === "pause") {
            send({ action: "pause" }, 'remote');
            buttonPlayPause.innerHTML = "play";
        }
        else {
            send({ action: "play" }, 'remote');
            buttonPlayPause.innerHTML = "pause";
        }
    }


    function onNext() { send({ action: "next"}, 'remote'); }
    function onPrevious() { send({ action: "previous"}, 'remote'); } 
    function onStop() { send({ action: "stop"}, 'remote'); } 
    function onClearPlaylist() { send({ action: "clearplaylist"}, 'remote'); } 

    //buttonConnect.addEventListener('click', onConnect, false);
    buttonPlayPause.addEventListener('click', onPlayPause, false);
    buttonPrevious.addEventListener('click', onPrevious, false);
    buttonNext.addEventListener('click', onNext, false);
    buttonStop.addEventListener('click', onStop, false);
    buttonClearPlaylist.addEventListener('click', onClearPlaylist, false);
    
})