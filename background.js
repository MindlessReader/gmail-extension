// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//chrome.storage.local.set({"buttonLog": buttonLog});



chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        console.log('The color is green.');
    });
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
    if (changeInfo.url != "https://mail.google.com/mail/u/0/#inbox" && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm0&ogbl#inbox" && changeInfo.url && changeInfo.url != "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox") {
        console.log("Not Inbox");
        chrome.tabs.executeScript({
            file: 'test.js'
        });
    }
});