function copyIP() {
    const ip = "talenkuat.aternos.me:64341";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(ip).then(() => {
            alert(`Server IP "${ip}" copied to clipboard!`);
        }).catch(() => {
            fallbackCopyText(ip);
        });
    } else {
        fallbackCopyText(ip);
    }
}

function fallbackCopyText(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert(`Server IP "${text}" copied to clipboard!`);
}
