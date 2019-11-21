//document.getElementById("test").addEventListener('click', () => {
//    console.log("Popup DOM fully loaded and parsed");
//
//    function modifyDOM() {
//        //You can play with your DOM here or check URL against your regex
//        console.log('Tab script:');
//        console.log(document.body);
//        return document.body.innerHTML;
//    }
//
//    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
//    chrome.tabs.executeScript({
//        code: 'var email = document.getElementsByClassName("gb_hb");console.log(email[0]);chrome.runtime.sendMessage({greeting: email[0]}, function(response) {console.log(response.farewell);});' //argument here is a string but function.toString() returns function's code
//    }, (results) => {
//        //Here we have just the innerHTML and not DOM structure
//         //console.log('Popup script:')
//        //console.log(results[0]);
//    });
//});
//
////class gb_hb
////(' + modifyDOM + ')();

alert("hi");