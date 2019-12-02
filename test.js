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

function searchString(stringToSearch, searchTerm) {
    var re = new RegExp(searchTerm, 'g');
    return (stringToSearch.match(re));
}

setTimeout(function() {
    var spamScore = 1;
    var blacklistedEmail = false;
    var counter = 0;
    var email = document.getElementsByClassName("gb_ob")[0].innerHTML;
    var body = document.getElementsByClassName("ii gt")[0].innerHTML;
    var incEmail = document.getElementsByClassName("go")[0].textContent;
    var blacklistedEmails = ["1000059152@tvusd.us"];
    var suspiciousWordsCom = ["communism", "communist", "communists", "communistic"]; //Communism
    var suspiciousWordsRom = ["communism", "communist", "communists", "communistic"]; //Romantic
    var suspiciousWordsExt = ["password", "malware", "vulnerability", "critical vulnerability",
        "trojan", "btc", "adult sites", "Bitcoins", "BTC wallet", "virus", "RAT",
        "http://www.login.blockchain.com/en/#/signup/", "http://www.paxful.com/", "http://www.coingate.com/",
        "http://www.coinbase.com/", "Drive-by exploit", "send the video to all your contacts",
        "after receiving the payment", "control over your computer", "see everything", "full access", "darknet",
        "darkweb", "post it on social network"
    ]; //Extortion
    var commonWords = [];

    commonWords.forEach(element => {
        var re = new RegExp(element, 'g');
        body = body.replace(re, '');
    });

    console.log(body);

    incEmail = incEmail.slice(1, incEmail.length - 1);
    blacklistedEmails.push(email);

    suspiciousWordsCom.forEach(element => {
        if (searchString(body, element) != null && searchString(body, element) != undefined) {
            spamScore = spamScore * (searchString(body, element).length * 2);
        }
    });

    suspiciousWordsRom.forEach(element => {
        if (searchString(body, element) != null && searchString(body, element) != undefined) {
            spamScore = spamScore * (searchString(body, element).length * 2);
        }
    });

    suspiciousWordsExt.forEach(element => {
        if (searchString(body, element) != null && searchString(body, element) != undefined) {
            spamScore = spamScore * (searchString(body, element).length * 2);
        }
    });

    blacklistedEmails.forEach(element => {
        if (element == incEmail) {
            blacklistedEmail = true;
        }
    });

    console.log(spamScore);
    if (blacklistedEmail == true) {
        alert("We detected that this email came from a blacklisted source, either a known spam address, or someone impersonating your own email address.\nSpam Score: " + spamScore);
    } else if (spamScore >= 1000) {
        alert("This email is likely spam!\nSpam Score: " + spamScore);
    }

    /* 
        alert("User Email: " + email);
        alert("Body: " + body);
        alert("Incoming Email Address: " + incEmail);
     */
}, 500);