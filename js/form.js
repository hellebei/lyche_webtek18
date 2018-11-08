
//kan bare velge datoer fra "imorgen"
var tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);
const time = tommorow.toISOString().split('T')[0];
const dates = document.getElementsByName("date");
for (let i = 0; i < dates.length; i++) {
    dates[i].setAttribute('min', time);
}


//validates email adress on change. Not norwegian chars
function ValidateEmail(lang){

    const mailInput = document.getElementsByName("email");
    console.log(mailInput);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (lang === 'en'){
        if(mailInput[1].value.match(mailformat)){
            mailInput[1].focus();
            return true;
        }
        else{
            alert("You have entered an invalid email address!");
            mailInput[1].focus();
            return false;
        }
    }
    else if(lang === 'no'){
        if(mailInput[0].value.match(mailformat)){
            mailInput[0].focus();
            return true;
        }
        else{
            alert("You have entered an invalid email address!");
            mailInput[0].focus();
            return false;
        }
    }
}

function confirm_order_no(){
    if (ValidateEmail(lang)) {
        let myWindow = window.open("confirmation.html");
    }
}

function confirm_order_en(){
    if (ValidateEmail(lang)) {
        let myWindow = window.open("confirmation.html");
   }
}