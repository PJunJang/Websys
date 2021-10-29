var all;
var daily_play;
var found;
var foundlist = [];
var guess;
var letters = [], todayletters = [];
var points;
var rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9;
var replaying;
var total, todaytotal, yesterdaytotal;
var win;
var wordlist = [], todaywordlist = [], yesterdaywordlist = [];
var words, todaywords, yesterdaywords;
var dark;
var comb1 = document.getElementById('comb1')
var comb2 = document.getElementById('comb2')
var comb3 = document.getElementById('comb3')
var comb4 = document.getElementById('comb4')
var comb5 = document.getElementById('comb5')
var comb6 = document.getElementById('comb6')
var comb7 = document.getElementById('comb7')

var play1 = document.getElementById("play1")
var play2 = document.getElementById("play2")
var play3 = document.getElementById("play3")
var play4 = document.getElementById("play4")
var play5 = document.getElementById("play5")
var play6 = document.getElementById("play6")
var play7 = document.getElementById("play7")
// display();
// get_today();
// alert(todaywords)
function darkmode() {
    if (dark == 1) {
        var x = document.querySelectorAll('*');
        for (var i = 0; i < x.length; i++) {
            if (x[i].className != "fg" && x[i].className != "bg") {
                x[i].style.background = "#fbfcff";
            }
        }
        dark = 0;
        localStorage.setItem("useDarkMode", 1);
    } else {
        var x = document.querySelectorAll('*');
        for (var i = 0; i < x.length; i++) {
            if (x[i].className != "fg" && x[i].className != "bg") {
                x[i].style.background = "#111111";
            }
        }
        dark = 1;
        localStorage.setItem("useDarkMode", 0);
    }
}

function type(letter, combno) {
    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";
    document.getElementById("comb" + combno).style.height = "80px";
    document.getElementById("comb" + combno).style.width = "80px";
    document.getElementById("comb" + combno).style.left = parseInt(document.getElementById("comb" + combno).style.left) + 10 + "px";
    document.getElementById("comb" + combno).style.top = parseInt(document.getElementById("comb" + combno).style.top) + 10 + "px";
    document.getElementById("guess").value = document.getElementById("guess").value + letter;
}

function untype() {

    comb1.style.height = "100px";
    comb1.style.width = "100px";
    comb1.style.left = "1px";
    comb1.style.top = "51px";
    comb2.style.height = "100px";
    comb2.style.width = "100px";
    comb2.style.left = "80px";
    comb2.style.top = "1px";
    comb3.style.height = "100px";
    comb3.style.width = "100px";
    comb3.style.left = "159px";
    comb3.style.top = "51px";
    comb4.style.height = "100px";
    comb4.style.width = "100px";
    comb4.style.left = "1px";
    comb4.style.top = "149px";
    comb5.style.height = "100px";
    comb5.style.width = "100px";
    comb5.style.left = "80px";
    comb5.style.top = "199px";
    comb6.style.height = "100px";
    comb6.style.width = "100px";
    comb6.style.left = "159px";
    comb6.style.top = "149px";
    comb7.style.height = "100px";
    comb7.style.width = "100px";
    comb7.style.left = "80px";
    comb7.style.top = "100px";
}

function display() {
    var didtouch = 0;

    play1.src = letters[0] + ".png";
    play1.style.left = "21px";
    play1.style.top = "51px";
    play1.ontouchstart = function () { didtouch = 1; type(letters[0], 1) };
    play1.onmousedown = function () { if (didtouch != 1) { type(letters[0], 1) } };
    play1.style.display = "block";
    play1.onmouseup = function () { untype() };
    play1.ondragend = function () { untype() };
    play1.ontouchend = function () { untype() };
    play1.ontouchcancel = function () { untype() };

    play2.src = letters[1] + ".png";
    play2.style.left = "100px";
    play2.style.top = "1px";
    play2.ontouchstart = function () { didtouch = 1; type(letters[1], 2) };
    play2.onmousedown = function () { if (didtouch != 1) { type(letters[1], 2) } };
    play2.style.display = "block";
    play2.onmouseup = function () { untype() };
    play2.ondragend = function () { untype() };
    play2.ontouchend = function () { untype() };
    play2.ontouchcancel = function () { untype() };

    play3.src = letters[2] + ".png";
    play3.style.left = "179px";
    play3.style.top = "51px";
    play3.ontouchstart = function () { didtouch = 1; type(letters[2], 3) };
    play3.onmousedown = function () { if (didtouch != 1) { type(letters[2], 3) } };
    play3.style.display = "block";
    play3.onmouseup = function () { untype() };
    play3.ondragend = function () { untype() };
    play3.ontouchend = function () { untype() };
    play3.ontouchcancel = function () { untype() };

    play4.src = letters[3] + ".png";
    play4.style.left = "21px";
    play4.style.top = "149px";
    play4.ontouchstart = function () { didtouch = 1; type(letters[3], 4) };
    play4.onmousedown = function () { if (didtouch != 1) { type(letters[3], 4) } };
    play4.style.display = "block";
    play4.onmouseup = function () { untype() };
    play4.ondragend = function () { untype() };
    play4.ontouchend = function () { untype() };
    play4.ontouchcancel = function () { untype() };

    play5.src = letters[4] + ".png";
    play5.style.left = "100px";
    play5.style.top = "199px";
    play5.ontouchstart = function () { didtouch = 1; type(letters[4], 5) };
    play5.onmousedown = function () { if (didtouch != 1) { type(letters[4], 5) } };
    play5.style.display = "block";
    play5.onmouseup = function () { untype() };
    play5.ondragend = function () { untype() };
    play5.ontouchend = function () { untype() };
    play5.ontouchcancel = function () { untype() };

    play6.src = letters[5] + ".png";
    play6.style.left = "179px";
    play6.style.top = "149px";
    play6.ontouchstart = function () { didtouch = 1; type(letters[5], 6) };
    play6.onmousedown = function () { if (didtouch != 1) { type(letters[5], 6) } };
    play6.style.display = "block";
    play6.onmouseup = function () { untype() };
    play6.ondragend = function () { untype() };
    play6.ontouchend = function () { untype() };
    play6.ontouchcancel = function () { untype() };

    play7.src = letters[6] + ".png";
    play7.style.left = "100px";
    play7.style.top = "100px";
    play7.ontouchstart = function () { didtouch = 1; type(letters[6][1], 7) };
    play7.onmousedown = function () { if (didtouch != 1) { type(letters[6][1], 7) } };
    play7.style.display = "block";
    play7.onmouseup = function () { untype() };
    play7.ondragend = function () { untype() };
    play7.ontouchend = function () { untype() };
    play7.ontouchcancel = function () { untype() };
}

function update_rank() {
    var rank;

    if (points >= rank9) {
        if (win == 0) {
            alert("You earned the rank of Queen Bee!\n\nCan you find all the words?");
            win = 1;
        }
        rank = "Queen Bee!";
    } else if (points >= rank8) {
        rank = "Outstanding";
    } else if (points >= rank7) {
        rank = "Marvellous";
    } else if (points >= rank6) {
        rank = "Superb";
    } else if (points >= rank5) {
        rank = "Excellent";
    } else if (points >= rank4) {
        rank = "Skilled";
    } else if (points >= rank3) {
        rank = "Fine";
    } else if (points >= rank2) {
        rank = "Novice";
    } else {
        rank = "Newbie";
    }

    document.getElementById("rank-update").innerHTML = rank;
}

function set_rank() {
    rank1 = 0;
    rank2 = Math.floor(total * 0.02);
    rank3 = Math.floor(total * 0.05);
    rank4 = Math.floor(total * 0.08);
    rank5 = Math.floor(total * 0.15);
    rank6 = Math.floor(total * 0.25);
    rank7 = Math.floor(total * 0.40);
    rank8 = Math.floor(total * 0.50);
    rank9 = Math.floor(total * 0.70);
}

function save_word() {
    localStorage.setItem("foundwords", JSON.stringify(foundlist));
}

function add_points() {
    var one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
    var i = 0, j = 0;

    if (daily_play === 1) {
        save_word();
    }

    i = guess.length;
    if (i < 7) {
        if (i == 4) {
            i = 1;
        }
        points = points + i;

        return;
    }

    i = 0;
    while (i < guess.length) {
        for (j = 0; j < 7; j++) {
            if (guess[i] == letters[j]) {
                if (j == 0) {
                    one = 1;
                }
                if (j == 1) {
                    two = 1;
                }
                if (j == 2) {
                    three = 1;
                }
                if (j == 3) {
                    four = 1;
                }
                if (j == 4) {
                    five = 1;
                }
                if (j == 5) {
                    six = 1;
                }
            }
        }
        i = i + 1;
    }

    if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
        points = points + guess.length + 7;
        document.getElementById("no-message").style.display = "none";
        document.getElementById("pangram").style.display = "inline";

        return;
    }

    points = points + guess.length;
}

function found_word() {
    var i;

    for (i = 0; i < found; i++) {
        if (guess == foundlist[i]) {
            document.getElementById("no-message").style.display = "none";
            document.getElementById("already-found").style.display = "inline";
            return 1;
        }
    }

    foundlist.push(guess);

    found = found + 1;

    add_points();

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");

    update_rank();

    if (found == words) {
        alert("Congratulations! You found all the words!");
        all = 1;
    }

    return 0;
}

function check() {
    var center = 0, i;

    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";

    if (replaying === 0) {
        guess = document.getElementById("guess").value.toLowerCase();
        document.getElementById("player-guess").reset();
    } else {
        guess = guess.toLowerCase();
    }

    for (i = 0; i < guess.length; i++) {
        if ("7" + guess[i] == letters[6]) {
            center = 1;
        }
    }

    if (guess.length < 4) {
        document.getElementById("no-message").style.display = "none";
        document.getElementById("too-short").style.display = "inline";
        return 1;
    }

    if (center == 0) {
        document.getElementById("no-message").style.display = "none";
        document.getElementById("center-letter").style.display = "inline";
        return 1;
    }

    for (i = 0; i < words; i++) {
        if (guess == wordlist[i]) {
            i = found_word();
            return i;
        }
    }
    document.getElementById("no-message").style.display = "none";
    document.getElementById("not-in-list").style.display = "inline";

    return 1;
}

function replay_words() {
    var i, replay;

    replaying = 1;

    replay = JSON.parse(localStorage.getItem("foundwords"));

    localStorage.removeItem("foundwords");

    for (i = 0; i < replay.length; i++) {
        guess = replay[i];

        if (check() == 1) {
            localStorage.removeItem("foundwords");

            for (i = 0; i < found; i++) {
                foundlist.pop();
            }

            all = 0;
            found = 0;
            points = 0;
            rank = "Newbie";
            win = 0;

            document.getElementById("no-message").style.display = "inline";
            document.getElementById("pangram").style.display = "none";
            document.getElementById("already-found").style.display = "none";
            document.getElementById("center-letter").style.display = "none";
            document.getElementById("too-short").style.display = "none";
            document.getElementById("not-in-list").style.display = "none";

            replaying = 0;

            return;
        }
    }

    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";

    replaying = 0;
}

function daily() {
    var i;

    daily_play = 1;

    for (i = 0; i < found; i++) {
        foundlist.pop();
    }

    all = 0;
    found = 0;
    points = 0;
    rank = "Newbie";
    replaying = 0;
    win = 0;

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
    document.getElementById("rank-update").innerHTML = rank;
    document.getElementById("yesterday-or-random").innerHTML = "Yesterday's answers";
    document.getElementById("random-answers").style.display = "none";
    document.getElementById("restart-daily-button").style.visibility = "hidden";
    document.getElementById("update-random").innerHTML = "";
    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";
    play1.style.display = "none";
    play2.style.display = "none";
    play3.style.display = "none";
    play4.style.display = "none";
    play5.style.display = "none";
    play6.style.display = "none";
    play7.style.display = "none";

    letters[0] = todayletters[0];
    letters[1] = todayletters[1];
    letters[2] = todayletters[2];
    letters[3] = todayletters[3];
    letters[4] = todayletters[4];
    letters[5] = todayletters[5];
    letters[6] = todayletters[6];
    words = todaywords;
    total = todaytotal;
    wordlist = todaywordlist;
    set_rank();
    if (localStorage.hasOwnProperty("foundwords") === true) {
        replay_words();
    }
    document.getElementById("update-random").innerHTML = yesterdaywordlist.join("<br />") + "<br />" + "<br />Total words:  " + yesterdaywords + "<br />Total points: " + yesterdaytotal + "<br />Points for Queen Bee: " + Math.floor(yesterdaytotal * 0.70);
    display();
}

function get_yesterday() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            yesterdaywords = gameObj.words;
            yesterdaytotal = gameObj.total;
            yesterdaywordlist = gameObj.wordlist;
        }
    };

    xhttp.open("GET", "yesterday", true);
    xhttp.send();
}

function get_today() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            todayletters[0] = gameObj.letters[0];
            todayletters[1] = gameObj.letters[1];
            todayletters[2] = gameObj.letters[2];
            todayletters[3] = gameObj.letters[3];
            todayletters[4] = gameObj.letters[4];
            todayletters[5] = gameObj.letters[5];
            todayletters[6] = "7" + gameObj.center;
            todaywords = gameObj.words;
            todaytotal = gameObj.total;
            todaywordlist = gameObj.wordlist;
            daily();
        }
    };

    xhttp.open("GET", "today", true);
    xhttp.send();
}

window.onload = function () {
    comb1 = document.getElementById('comb1')
    comb2 = document.getElementById('comb2')
    comb3 = document.getElementById('comb3')
    comb4 = document.getElementById('comb4')
    comb5 = document.getElementById('comb5')
    comb6 = document.getElementById('comb6')
    comb7 = document.getElementById('comb7')
    comb1.style.height = "100px";
    comb1.style.width = "100px";
    comb1.style.left = "1px";
    comb1.style.top = "51px";
    comb2.style.height = "100px";
    comb2.style.width = "100px";
    comb2.style.left = "80px";
    comb2.style.top = "1px";
    comb3.style.height = "100px";
    comb3.style.width = "100px";
    comb3.style.left = "159px";
    comb3.style.top = "51px";
    comb4.style.height = "100px";
    comb4.style.width = "100px";
    comb4.style.left = "1px";
    comb4.style.top = "149px";
    comb5.style.height = "100px";
    comb5.style.width = "100px";
    comb5.style.left = "80px";
    comb5.style.top = "199px";
    comb6.style.height = "100px";
    comb6.style.width = "100px";
    comb6.style.left = "159px";
    comb6.style.top = "149px";
    comb7.style.height = "100px";
    comb7.style.width = "100px";
    comb7.style.left = "80px";
    comb7.style.top = "100px";
    get_yesterday();
    get_today();
    if (localStorage.hasOwnProperty("useDarkMode") === true) {
        dark = Number(localStorage.getItem("useDarkMode"));
    } else {
        dark = 1;
    }
    darkmode();
};

function shuffle() {
    var i, j, t;

    for (i = 5; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        t = letters[j];
        letters[j] = letters[i];
        letters[i] = t;
    }

    display();
}

function random() {
    var xhttp = new XMLHttpRequest();
    var i;

    daily_play = 0;

    for (i = 0; i < found; i++) {
        foundlist.pop();
    }

    all = 0;
    found = 0;
    points = 0;
    rank = "Newbie";
    win = 0;

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
    document.getElementById("rank-update").innerHTML = rank;
    document.getElementById("yesterday-or-random").innerHTML = "Answers";
    document.getElementById("update-random").innerHTML = "";
    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";
    document.getElementById("play1").style.display = "none";
    document.getElementById("play2").style.display = "none";
    document.getElementById("play3").style.display = "none";
    document.getElementById("play4").style.display = "none";
    document.getElementById("play5").style.display = "none";
    document.getElementById("play6").style.display = "none";
    document.getElementById("play7").style.display = "none";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            letters[0] = gameObj.letters[0];
            letters[1] = gameObj.letters[1];
            letters[2] = gameObj.letters[2];
            letters[3] = gameObj.letters[3];
            letters[4] = gameObj.letters[4];
            letters[5] = gameObj.letters[5];
            letters[6] = "7" + gameObj.center;
            words = gameObj.words;
            total = gameObj.total;
            wordlist = gameObj.wordlist;
            set_rank();
            display();
            document.getElementById("random-answers").style.display = "block";
            document.getElementById("restart-daily-button").style.visibility = "visible";
        }
    };

    xhttp.open("GET", "../../cgi-bin/random", true);
    xhttp.send();
}

function show_random() {
    document.getElementById("update-random").innerHTML = wordlist.join("<br />") + "<br />" + "<br />Total words:  " + words + "<br />Total points: " + total + "<br />Points for Queen Bee: " + Math.floor(total * 0.70);
}

function delete_letter() {
    var str = document.getElementById("guess").value;
    var len = str.length;

    str = str.slice(0, len - 1) + str.slice(len, len);
    document.getElementById("guess").value = str;
}