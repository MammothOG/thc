document.addEventListener('DOMContentLoaded', () => {
    let buttonPlayPause = document.getElementById('play');
    let buttonPrevious = document.getElementById('previous');
    let buttonNext = document.getElementById('next');
    let buttonClearPlaylist = document.getElementById('clear-playlist');
    let buttonStop = document.getElementById('stop');

    function onPlayPause() {
        if (buttonPlay.innerHTML === "pause") {
            chrome.runtime.sendMessage({ action: "pause" });
            buttonPlay.innerHTML = "play";
        }
        else {
            chrome.runtime.sendMessage({ action: "play" });
            buttonPlay.innerHTML = "pause";
        }
    }

    function onNext() { chrome.runtime.sendMessage({ action: "next"}); }
    function onPrevious() { chrome.runtime.sendMessage({ action: "previous"}); } 
    function onStop() { chrome.runtime.sendMessage({ action: "stop"}); } 
    function onClearPlaylist() { chrome.runtime.sendMessage({ action: "clearplaylist"}); } 

    buttonPlayPause.addEventListener('click', onPlayPause, false);
    buttonPrevious.addEventListener('click', onPrevious, false);
    buttonNext.addEventListener('click', onNext, false);
    buttonStop.addEventListener('click', onStop, false);
    buttonClearPlaylist.addEventListener('click', onClearPlaylist, false);
    
})