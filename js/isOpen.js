
var d = new Date();
day = d.getDay();
console.log(day); 
time = d.getHours();


function opening () {
    if (time >= 16 && time <=23 && day <= 4) {
    document.getElementById("open").innerHTML = "Åpent! Stenger 23";
    }
    else if ((time >= 16 && (day===5 || day===6)) || (time <= 2 && (day ===6 || day===7))) {
    document.getElementById("open").innerHTML = "Åpent! Stenger 02";
    }
    else if (time >= 16 && time <= 22 && day === 7) {
        document.getElementById("open").innerHTML = "Åpent! Stenger 02";
    }
    else {
        document.getElementById("open").innerHTML = "Stengt. Åpner kl 16"
    }
}

opening();

