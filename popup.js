document.addEventListener('DOMContentLoaded', () => {
    let buttonPlay = document.getElementById('play');
    let buttonPrevious = document.getElementById('previous');
    let buttonNext = document.getElementById('next');

    function onPlay() {
        if (buttonPlay.innerHTML === "pause") {
            chrome.runtime.sendMessage({ action: "pause" });
            buttonPlay.innerHTML = "play";
        }
        else {
            chrome.runtime.sendMessage({ action: "play" });
            buttonPlay.innerHTML = "pause";
        }
    }

    function onNext() {
        chrome.runtime.sendMessage({ action: "next"});
    }

    function onPrevious() {
        chrome.runtime.sendMessage({ action: "previous"});
    }

    buttonPlay.addEventListener('click', onPlay, false)
    buttonPrevious.addEventListener('click', onPrevious, false)
    buttonNext.addEventListener('click', onNext, false)
})