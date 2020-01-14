'use strict';


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url != "https://mail.google.com/mail/u/0/#inbox" && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm0&ogbl#inbox" && changeInfo.url && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox") {
        console.log("Not Inbox");
        chrome.tabs.executeScript({
            file: 'emailScan.js'
        });
    }
});