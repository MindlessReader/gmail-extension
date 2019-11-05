// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var buttonLog = [];
var clickCount = 0;
var showAlert = true;
var searchText;
var searchTerm;
var results;
var email;

window.onload = function() {
    chrome.storage.local.get(["buttonLogStorage"], function(result) {
        var buttonLogStorage = result.buttonLogStorage;
        console.log(buttonLogStorage);
        if (buttonLogStorage != NaN && buttonLogStorage != undefined) {
            buttonLog = buttonLogStorage;
        }
    });

    chrome.storage.local.get(["clickCountStorage"], function(result) {
        var clickCountStorage = result.clickCountStorage;
        console.log(clickCountStorage);
        if (clickCountStorage != NaN && clickCountStorage != undefined) {
            clickCount = clickCountStorage;
        }
    });
    chrome.storage.local.get(["showAlertStorage"], function(result) {
        var showAlertStorage = result.showAlertStorage;
        console.log(showAlertStorage);
        if (showAlertStorage != NaN && showAlertStorage != undefined) {
            showAlert = showAlertStorage;
        }
    });
    console.log(showAlert);
    document.getElementById("toggleAlertButton").textContent = "Alerts Shown: " + showAlert;
    console.log("Loaded");

}

function clickCounter(buttonID) {
    document.getElementById(buttonID).disabled = true;
    clickCount++;
    console.log("Clicked!");
    if (clickCount >= 5 && showAlert == true) {
        console.log("That was click number " + clickCount + "!");
        alert("That was click number " + clickCount + "!");
    }
    buttonLog.push(buttonID);

    storeValues(buttonID);
}

function storeValues(buttonID) {
    chrome.storage.local.set({ "buttonLogStorage": buttonLog });
    chrome.storage.local.set({ "clickCountStorage": clickCount }, function(result) {
        if (buttonID != undefined) {
            document.getElementById(buttonID).disabled = false;
        }
        chrome.storage.local.set({ "showAlertStorage": showAlert });
    });
}

function searchString(stringToSearch, searchTerm) {
    var re = new RegExp(searchTerm, 'g');
    return (stringToSearch.match(re));
}

myButton.onclick = function() {
    clickCounter("myButton");
};

myButton2.onclick = function() {
    clickCounter("myButton2");
};

logButton.onclick = function() {
    console.log(buttonLog);
    alert("Buttons Clicked: " + buttonLog);
};

countButton.onclick = function() {
    console.log(clickCount);
    alert("Times Clicked: " + clickCount);
};

resetButton.onclick = function() {
    buttonLog = [];
    clickCount = 0;
    storeValues();
}

toggleAlertButton.onclick = function() {
    showAlert = !showAlert;
    document.getElementById("toggleAlertButton").textContent = "Alerts Shown: " + showAlert;
    storeValues();
}

searchButton.onclick = function() {
    searchText = prompt("Enter text to search through").toLowerCase();
    searchText = searchText.toLowerCase();
    searchTerm = prompt("Enter a search term").toLowerCase();
    results = searchString(searchText, searchTerm);
    console.log(results);
    alert("Found " + results.length + " Results");
}

test2.onclick = function() {
    chrome.storage.local.get(["emailStorage"], function(result) {
        var emailStorage = result.emailStorage;
        console.log(emailStorage[0]);
        if (emailStorage != NaN && emailStorage != undefined) {
            email = emailStorage;
        }
    });
    alert(email[0]);
}


/*
chrome.tabs.executeScript({
        code: 'alert("Hi"); alert("How are you?");var emailAddress = "emailAddressString";'
    });
    */



/*
let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
*/



/*
chrome.storage.local.get("buttonLog", callback);

function callback(result) {
  buttonlog = result.buttonLog;
}
*/


