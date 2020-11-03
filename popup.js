document.addEventListener('DOMContentLoaded', () => {
    let buttonPlay = document.getElementById('play');
    let buttonPrevious = document.getElementById('previous');
    let buttonNext = document.getElementById('next');

    function onPlay() {
        if (buttonPlay.innerHTML === "pause") {
            chrome.runtime.sendMessage({ status: "pause" });
            buttonPlay.innerHTML = "play";
        }
        else {
            chrome.runtime.sendMessage({ status: "play" });
            buttonPlay.innerHTML = "pause";
        }
    }

    function onNext() {
        chrome.runtime.sendMessage({move: "next"});
    }

    function onPrevious() {
        chrome.runtime.sendMessage({move: "previous"});
    }

    buttonPlay.addEventListener('click', onPlay, false)
    buttonPrevious.addEventListener('click', onPrevious, false)
    buttonNext.addEventListener('click', onNext, false)
})