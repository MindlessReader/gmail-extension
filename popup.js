// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var buttonLog = [];
var clickCount = 0;


function clickCounter(buttonID){
  load();
  clickCount++;
  console.log("Clicked!");
  if (clickCount >= 5){
    console.log("That was click number "+clickCount+"!");
    alert("That was click number "+clickCount+"!");
  }
  buttonLog.push(buttonID);
  unload();
}

function load(){
  chrome.storage.local.get("buttonLog", callback);

function callback(result) {
  buttonLog = result.buttonLog;
}
console.log("Got buttonLog");

chrome.storage.local.get("clickCount", callback);

function callback(result) {
  clickCount = result.clickCount;
}
console.log("Got clickCount");
}

function unload(){
  chrome.storage.local.set({"buttonLog": buttonLog});
  chrome.storage.local.set({"clickCount": clickCount});
}

myButton.onclick = function() {
  clickCounter("myButton");
};

myButton2.onclick = function() {
  clickCounter("myButton2");
};

logButton.onclick = function() {
  console.log(buttonLog);
  alert("Buttons Clicked: "+buttonLog);
};





/*
window.load = function() {
console.log("Loaded!");
}

window.onbeforeunload = function() {
  alert("Goodbye");
}
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