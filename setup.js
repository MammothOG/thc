document.addEventListener('DOMContentLoaded', () => {
    let inputIp = document.getElementById('input-ip');
    let displayIp = document.getElementById('display-ip');
    let buttonAddIp = document.getElementById("add-ip");

    function onNewIp() {
        if (!inputIp.value) {
            console.error("Error: No value specified!");
            return
        }
        chrome.storage.local.set({ server_ip: inputIp.value }, () => {
            console.log("Ip", inputIp, "has been saved.");
            displayIp.innerHTML = inputIp.value;
        });
    }

    chrome.storage.local.get(["server_ip"], (result) => {
        displayIp.innerHTML = result.server_ip;
    });

    buttonAddIp.addEventListener('click', onNewIp, false)
})