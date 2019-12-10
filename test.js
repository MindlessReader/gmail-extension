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

function defined(variable){
    if(variable != null && variable != undefined){
        return true;
    } else {
        return false;
    }
}

setTimeout(function() {
    var spamScoreCommunist = 1;
    var spamScoreRomantic = 1;
    var spamScoreExtortion = 1;
    var blacklistedEmail = false;
    var whitelistedEmail  = false;
    var counter = 0;
    var email = document.getElementsByClassName("gb_ob")[0].innerHTML;
    var body = document.getElementsByClassName("ii gt")[0].innerHTML.toLowerCase();
    var incEmail = document.getElementsByClassName("go")[0].textContent;
    var blacklistedEmails = ["1000059152@tvusd.us"];
    var whitelistedEmails = ["fabian@thevks.com"];
    var suspiciousWords = [ //Format: word,
    //Communist Keywords
    ["communism", "Communist", 100], ["communist", "Communist", 100], ["communists", "Communist", 100], ["communistic", "Communist", 100],
    //Romantic Keywords
    ["communism", "Romantic", 100], ["communist", "Romantic", 100], ["communists", "Romantic", 100], ["communistic", "Romantic", 100],
    //Extortion Keywords
    ["password", "Extortion", 1],["malware", "Extortion", 1],["vulnerability", "Extortion", 1],["critical vulnerability", "Extortion", 1],
    ["trojan", "Extortion", 1],["btc", "Extortion", 1],["adult sites", "Extortion", 1],["Bitcoins", "Extortion", 1],["BTC wallet", "Extortion", 1],["virus", "Extortion", 1],["RAT", "Extortion", 1],
    ["http://www.login.blockchain.com/en/#/signup/", "Extortion", 1],["http://www.paxful.com/", "Extortion", 1],["http://www.coingate.com/", "Extortion", 1],
    ["http://www.coinbase.com/", "Extortion", 1],["Drive-by exploit", "Extortion", 1],["send the video to all your contacts", "Extortion", 1],
    ["receiving payment", "Extortion", 1],["control computer", "Extortion", 1],["full access", "Extortion", 1],["darknet", "Extortion", 1],["darkweb", "Extortion", 1], 
    ["post social network", "Extortion", 1],["publish everything", "Extortion", 1],["case-sensitive", "Extortion", 1],["case sensitive", "Extortion", 1],["case-sensetive", "Extortion", 1], 
    ["case sensetive", "Extortion", 1],["private data", "Extortion", 1]
    
    ];
    var commonWords = ["<br>"," the ", " of ", " to ", " and ", " a ", " in ", " is ", " it ", " you ", " that ", " he ", " was ", " for ", " on ", " are ", " with ", " as ", " i ", " his ", " they ", " be ", " at ", " one ", " have ", " this ", " from ", " or ", " had ", " by ", " hot ", " word ", " but ", " what ", " some ", " we ", " can ", " out ", " other ", " were ", " all ", " there ", " when ", " up ", " use ", " your ", " how ", " said ", " an ", " each ", " she ", " which ", " do ", " their ", " time ", " if ", " will ", " way ", " about ", " many ", " then ", " them ", " write ", " would ", " like ", " so ", " these ", " her ", " long ", " make ", " thing ", " see ", " him ", " two ", " has ", " look ", " more ", " day ", " could ", " go ", " come ", " did ", " number ", " sound ", " no ", " most ", " people ", " my ", " over ", " know ", " water ", " than ", " call ", " first ", " who ", " may ", " down ", " side ", " been ", " now ", " find ", " any ", " new ", " work ", " part ", " take ", " get ", " place ", " made ", " live ", " where ", " after ", " back ", " little ", " only ", " round ", " man ", " year ", " came ", " show ", " every ", " good ", " me ", " give ", " our ", " under ", " name ", " very ", " through ", " just ", " form ", " sentence ", " great ", " think ", " say ", " help ", " low ", " line ", " differ ", " turn ", " cause ", " much ", " mean ", " before ", " move ", " right ", " boy ", " old ", " too ", " same ", " tell ", " does ", " set ", " three ", " want ", " air ", " well ", " also ", " play ", " small ", " end ", " put ", " home ", " read ", " hand ", " port ", " large ", " spell ", " add ", " even ", " land ", " here ", " must ", " big ", " high ", " such ", " follow ", " act ", " why ", " ask ", " men ", " change ", " went ", " light ", " kind ", " off ", " need ", " house ", " picture ", " try ", " us ", " again ", " animal ", " point ", " mother ", " world ", " near ", " build ", " self ", " earth ", " father ", " head ", " stand ", " own ", " page ", " should ", " country ", " found ", " answer ", " school ", " grow ", " study ", " still ", " learn ", " plant ", " cover ", " food ", " sun ", " four ", " between ", " state ", " keep ", " eye ", " never ", " last ", " let ", " thought ", " city ", " tree ", " cross ", " farm ", " hard ", " start ", " might ", " story ", " saw ", " far ", " sea ", " draw ", " left ", " late ", " run ", " don't ", " while ", " press ", " close ", " night ", " real ", " life ", " few ", " north ", " open ", " seem ", " together ", " next ", " white ", " children ", " begin ", " got ", " walk ", " example ", " ease ", " paper ", " group ", " always ", " music ", " those ", " both ", " mark ", " often ", " letter ", " until ", " mile ", " river ", " car ", " feet ", " care ", " second ", " book ", " carry ", " took ", " science ", " eat ", " room ", " friend ", " began ", " idea ", " fish ", " mountain ", " stop ", " once ", " base ", " hear ", " horse ", " cut ", " sure ", " watch ", " color ", " face ", " wood ", " main ", " enough ", " plain ", " girl ", " usual ", " young ", " ready ", " above ", " ever ", " red ", " list ", " though ", " feel ", " talk ", " bird ", " soon ", " body ", " dog ", " family ", " direct ", " pose ", " leave ", " song ", " measure ", " door ", " product ", " black ", " short ", " numeral ", " class ", " wind ", " question ", " happen ", " complete ", " ship ", " area ", " half ", " rock ", " order ", " fire ", " south ", " problem ", " piece ", " told ", " knew ", " pass ", " since ", " top ", " whole ", " king ", " space ", " heard ", " best ", " hour ", " better ", " true ", " during ", " hundred ", " five ", " remember ", " step ", " early ", " hold ", " west ", " ground ", " interest ", " reach ", " fast ", " verb ", " sing ", " listen ", " six ", " table ", " travel ", " less ", " morning ", " ten ", " simple ", " several ", " vowel ", " toward ", " war ", " lay ", " against ", " pattern ", " slow ", " center ", " love ", " person ", " money ", " serve ", " appear ", " road ", " map ", " rain ", " rule ", " govern ", " pull ", " cold ", " notice ", " voice ", " unit ", " power ", " town ", " fine ", " certain ", " fly ", " fall ", " lead ", " cry ", " dark ", " machine ", " note ", " wait ", " plan ", " figure ", " star ", " box ", " noun ", " field ", " rest ", " correct ", " able ", " pound ", " done ", " beauty ", " drive ", " stood ", " contain ", " front ", " teach ", " week ", " final ", " gave ", " green ", " oh ", " quick ", " develop ", " ocean ", " warm ", " free ", " minute ", " strong ", " special ", " mind ", " behind ", " clear ", " tail ", " produce ", " fact ", " street ", " inch ", " multiply ", " nothing ", " course ", " stay ", " wheel ", " full ", " force ", " blue ", " object ", " decide ", " surface ", " deep ", " moon ", " island ", " foot ", " system ", " busy ", " test ", " record ", " boat ", " common ", " gold ", " possible ", " plane ", " stead ", " dry ", " wonder ", " laugh ", " thousand ", " ago ", " ran ", " check ", " game ", " shape ", " equate ", " hot ", " miss ", " brought ", " heat ", " snow ", " tire ", " bring ", " yes ", " distant ", " fill ", " east ", " paint ", " language ", " among ", " grand ", " ball ", " yet ", " wave ", " drop ", " heart ", " am ", " present ", " heavy ", " dance ", " engine ", " position ", " arm ", " wide ", " sail ", " material ", " size ", " vary ", " settle ", " speak ", " weight ", " general ", " ice ", " matter ", " circle ", " pair ", " include ", " divide ", " syllable ", " felt ", " perhaps ", " pick ", " sudden ", " count ", " square ", " reason ", " length ", " represent ", " art ", " subject ", " region ", " energy ", " hunt ", " probable ", " bed ", " brother ", " egg ", " ride ", " cell ", " believe ", " fraction ", " forest ", " sit ", " race ", " window ", " store ", " summer ", " train ", " sleep ", " prove ", " lone ", " leg ", " exercise ", " wall ", " catch ", " mount ", " wish ", " sky ", " board ", " joy ", " winter ", " sat ", " written ", " wild ", " instrument ", " kept ", " glass ", " grass ", " cow ", " job ", " edge ", " sign ", " visit ", " past ", " soft ", " fun ", " bright ", " gas ", " weather ", " month ", " million ", " bear ", " finish ", " happy ", " hope ", " flower ", " clothe ", " strange ", " gone ", " jump ", " baby ", " eight ", " village ", " meet ", " root ", " buy ", " raise ", " solve ", " metal ", " whether ", " push ", " seven ", " paragraph ", " third ", " shall ", " held ", " hair ", " describe ", " cook ", " floor ", " either ", " result ", " burn ", " hill ", " safe ", " cat ", " century ", " consider ", " type ", " law ", " bit ", " coast ", " copy ", " phrase ", " silent ", " tall ", " sand ", " soil ", " roll ", " temperature ", " finger ", " industry ", " value ", " fight ", " lie ", " beat ", " excite ", " natural ", " view ", " sense ", " ear ", " else ", " quite ", " broke ", " case ", " middle ", " kill ", " son ", " lake ", " moment ", " scale ", " loud ", " spring ", " observe ", " child ", " straight ", " consonant ", " nation ", " dictionary ", " milk ", " speed ", " method ", " organ ", " pay ", " age ", " section ", " dress ", " cloud ", " surprise ", " quiet ", " stone ", " tiny ", " climb ", " cool ", " design ", " poor ", " lot ", " experiment ", " bottom ", " key ", " iron ", " single ", " stick ", " flat ", " twenty ", " skin ", " smile ", " crease ", " hole ", " trade ", " melody ", " trip ", " office ", " receive ", " row ", " mouth ", " exact ", " symbol ", " die ", " least ", " trouble ", " shout ", " except ", " wrote ", " seed ", " tone ", " join ", " suggest ", " clean ", " break ", " lady ", " yard ", " rise ", " bad ", " blow ", " oil ", " blood ", " touch ", " grew ", " cent ", " mix ", " team ", " wire ", " cost ", " lost ", " brown ", " wear ", " garden ", " equal ", " sent ", " choose ", " fell ", " fit ", " flow ", " fair ", " bank ", " collect ", " save ", " control ", " decimal ", " gentle ", " woman ", " captain ", " practice ", " separate ", " difficult ", " doctor ", " please ", " protect ", " noon ", " whose ", " locate ", " ring ", " character ", " insect ", " caught ", " period ", " indicate ", " radio ", " spoke ", " atom ", " human ", " history ", " effect ", " electric ", " expect ", " crop ", " modern ", " element ", " hit ", " student ", " corner ", " party ", " supply ", " bone ", " rail ", " imagine ", " provide ", " agree ", " thus ", " capital ", " won't ", " chair ", " danger ", " fruit ", " rich ", " thick ", " soldier ", " process ", " operate ", " guess ", " necessary ", " sharp ", " wing ", " create ", " neighbor ", " wash ", " bat ", " rather ", " crowd ", " corn ", " compare ", " poem ", " string ", " bell ", " depend ", " meat ", " rub ", " tube ", " famous ", " dollar ", " stream ", " fear ", " sight ", " thin ", " triangle ", " planet ", " hurry ", " chief ", " colony ", " clock ", " mine ", " tie ", " enter ", " major ", " fresh ", " search ", " send ", " yellow ", " gun ", " allow ", " print ", " dead ", " spot ", " desert ", " suit ", " current ", " lift ", " rose ", " continue ", " block ", " chart ", " hat ", " sell ", " success ", " company ", " subtract ", " event ", " particular ", " deal ", " swim ", " term ", " opposite ", " wife ", " shoe ", " shoulder ", " spread ", " arrange ", " camp ", " invent ", " cotton ", " born ", " determine ", " quart ", " nine ", " truck ", " noise ", " level ", " chance ", " gather ", " shop ", " stretch ", " throw ", " shine ", " property ", " column ", " molecule ", " select ", " wrong ", " gray ", " repeat ", " require ", " broad ", " prepare ", " salt ", " nose ", " plural ", " anger ", " claim ", " continent ", " oxygen ", " sugar ", " death ", " pretty ", " skill ", " women ", " season ", " solution ", " magnet ", " silver ", " thank ", " branch ", " match ", " suffix ", " especially ", " fig ", " afraid ", " huge ", " sister ", " steel ",
     " discuss ", " forward ", " similar ", " guide ", " experience ", " score ", " apple ", " bought ", " led ", " pitch ", " coat ", " mass ", " card ", " band ", " rope ", " slip ", " win ", " dream ", " evening ", " condition ", " feed ", " tool ", " total ", " basic ", " smell ", " valley ", " nor ", " double ", " seat ", " arrive ", " master ", " track ", " parent ", " shore ", " division ", " sheet ", " substance ", " favor ", " connect ", " spend ", " chord ", " fat ", " glad ", " original ", " share ", " station ", " dad ", " bread ", " charge ", " proper ", " bar ", " offer ", " segment ", " slave ", " duck ", " instant ", " market ", " degree ", " populate ", " chick ", " dear ", " enemy ", " reply ", " drink ", " occur ", " support ", " speech ", " nature ", " range ", " steam ", " motion ", " path ", " liquid ", " log ", " meant ", " quotient ", " teeth ", " shell ", " neck "];
   
     commonWords.forEach(element => {
        var re = new RegExp(element, 'g');
        if (defined(body.match(re))) {
        console.log(body.match(re).length + " " + element)
        }
        body = body.replace(re, ' ');
    });

    console.log(body);

    incEmail = incEmail.slice(1, incEmail.length - 1);
    blacklistedEmails.push(email);

    suspiciousWords.forEach(element => {
      
        if (searchString(body, element) != null && searchString(body, element) != undefined) {
            spamScoreCom = spamScoreCom * (searchString(body, element).length * 2);
        }
    });

    blacklistedEmails.forEach(element => {
        if (element == incEmail) {
            blacklistedEmail = true;
            console.log("blacklisted");
        }
    });

    whitelistedEmails.forEach(element => {
        if (element == incEmail) {
            whitelistedEmail = true;
            console.log("whitelisted");
        }
    });

    if (
        (spamScoreCom >= 1000 || blacklistedEmail == true) &&
        whitelistedEmail == false
      ) {
        if (confirm("This email is likely spam!\nSpam Score: " + spamScoreCom + "\n Press OK to get more info about this kind of email.")) {
          window.open(
            "https://sites.google.com/my.tvusd.k12.ca.us/spamfilter/threats-scams/extortion"
          );
        }
      } else if (
        (spamScoreRom >= 1000 || blacklistedEmail == true) &&
        whitelistedEmail == false
      ) {
        if (confirm("This email is likely spam!\nSpam Score: " + spamScoreRom + "\n Press OK to get more info about this kind of email.")) {
          window.open(
            "https://sites.google.com/my.tvusd.k12.ca.us/spamfilter/threats-scams/extortion"
          );
        }
      } else if (
        (spamScoreExt >= 1000 || blacklistedEmail == true) &&
        whitelistedEmail == false
      ) {
        if (confirm("This email is likely spam!\nSpam Score: " + spamScoreExt + "\n Press OK to get more info about this kind of email.")) {
          window.open(
            "https://sites.google.com/my.tvusd.k12.ca.us/spamfilter/threats-scams/extortion"
          );
        }
      }
      
    /* 
        alert("User Email: " + email);
        alert("Body: " + body);
        alert("Incoming Email Address: " + incEmail);
     */
}, 500);




