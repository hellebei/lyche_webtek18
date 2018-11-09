
//declaring variables
let d = new Date();
let day = d.getDay(); 
let time = d.getHours();


//print different strings to HTML depending on time of the day and weekday
function openingNo () {
    if (time >= 16 && time <23 && day <= 4) {
    document.getElementById("openNo").innerHTML = "Åpent! Stenger kl. 23";
    }
    else if ((time >= 16) && ((day===5) || (day===6)) || ((time < 2) && ((day===6) || (day===7)))) {
    document.getElementById("openNo").innerHTML = "Åpent! Stenger kl. 02";
    }
    else if ((time >= 16) && (time < 22) && (day === 7)) {
        document.getElementById("openNo").innerHTML = "Åpent! Stenger kl. 22";
    }
    else {
        document.getElementById("openNo").innerHTML = "Stengt. Åpner kl. 16";
    }
}
openingNo();

function openingEn () {
    if (time >= 16 && time <23 && day <= 4) {
    document.getElementById("openEn").innerHTML = "Open! Closing at 11 pm";
    }
    else if ((time >= 16) && ((day===5) || (day===6)) || ((time < 2) && ((day===6) || (day===7)))) {
    document.getElementById("openEn").innerHTML = "Open! Closing at 02 am";
    }
    else if ((time >= 16) && (time < 22) && (day === 7)) {
        document.getElementById("openEn").innerHTML = "Open! Closing at 10 pm";
    }
    else {
        document.getElementById("openEn").innerHTML = "Closed. Opens at 4 pm";
    }
}
openingEn();

