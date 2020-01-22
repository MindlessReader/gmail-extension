'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'mail.google.com' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});




chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url != "https://mail.google.com/mail/u/0/#inbox" && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm0&ogbl#inbox" && changeInfo.url && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" && changeInfo.url != "https://mail.google.com/mail/u/0/#label/Scam+Examples" && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm0&ogbl#label/Scam+Examples" && changeInfo.url && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm&ogbl#label/Scam+Examples") {
        console.log("Not Inbox");
        chrome.tabs.executeScript({
            file: 'emailScan.js'
        });
    }
});
