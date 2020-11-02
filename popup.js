document.addEventListener('DOMContentLoaded', () => {
    let buttonPlay = document.getElementById('play');
    let buttonPrevious = document.getElementById('previous');
    let buttonNext = document.getElementById('next');

    function onPlay() {
        if (buttonPlay.innerHTML === "pause") {
            console.log("click pause");
            chrome.runtime.sendMessage({ status: "pause" });
            buttonPlay.innerHTML = "play";
        }
        else {
            console.log("click play");
            chrome.runtime.sendMessage({ status: "play" });
            buttonPlay.innerHTML = "pause";
        }
    }

    function onNext() {
        console.log("click next");
        chrome.runtime.sendMessage({move: "next"});
    }

    function onPrevious() {
        console.log("click previous");
        chrome.runtime.sendMessage({move: "previous"});
    }

    buttonPlay.addEventListener('click', onPlay, false)
    buttonPrevious.addEventListener('click', onPrevious, false)
    buttonNext.addEventListener('click', onNext, false)
})