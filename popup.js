function defined(variable) {
    if (variable != null && variable != undefined) {
        return true;
    } else {
        return false;
    }
}

function storeSettings() {
    activeSettings[0] = alertsOn;
    activeSettings[1] = linksOn;
    activeSettings[2] = blacklistedEmails;
    activeSettings[3] = whitelistedEmails;
    chrome.storage.local.set({ "settingsStorage": activeSettings });
}
var activeSettings = [true, true];
var alertsOn = true;
var linksOn = true;
var blacklistedEmails = ["1000059152@tvusd.us"];
var whitelistedEmails = ["fabian@thevks.com"];

//Loading

window.onload = function() {
    chrome.storage.local.get(["settingsStorage"], function(result) {
        var settingsStorage = result.settingsStorage;
        console.log(settingsStorage);
        if (defined(settingsStorage)) {
            activeSettings = settingsStorage;
            alertsOn = activeSettings[0];
            linksOn = activeSettings[1];
            document.getElementById("alertCheck").checked = alertsOn;
            document.getElementById("linkCheck").checked = linksOn;
            blacklistedEmails = activeSettings[2];
            whitelistedEmails = activeSettings[3];
        }
    });
}


blacklistButton.onclick = function() {
    var email = prompt("Enter an email address to blacklist");
    if (defined(email)){
    blacklistedEmails.push(email);
    console.log(blacklistedEmails);
    }
}

whitelistButton.onclick = function() {
    var email = prompt("Enter an email address to whitelist");
    if (defined(email)){
    whitelistedEmails.push(email);
    console.log(whitelistedEmails);
    }
}

webLinkButton.onclick = function() {
    chrome.tabs.executeScript({
        code: 'window.open("https://sites.google.com/my.tvusd.k12.ca.us/spamfilter/home");'
    });}

reportButton.onclick = function() {
    alert("Report Button");
}

linkCheck.onclick = function() {
    linksOn = document.getElementById("linkCheck").checked;
    storeSettings();
}

linkCheckTextBox.onclick = function() {
    document.getElementById("linkCheck").checked = !document.getElementById("linkCheck").checked;
    linksOn = document.getElementById("linkCheck").checked;
    storeSettings();
}

alertCheck.onclick = function() {
    alertsOn = document.getElementById("alertCheck").checked;
    storeSettings();
}

alertCheckTextBox.onclick = function() {
    document.getElementById("alertCheck").checked = !document.getElementById("alertCheck").checked;
    alertsOn = document.getElementById("alertCheck").checked;
    storeSettings();
}