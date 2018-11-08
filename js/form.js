
//kan bare velge datoer fra "imorgen"
var tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);
const time = tommorow.toISOString().split('T')[0];
const dates = document.getElementsByName("date");
for (let i = 0; i < dates.length; i++) {
    dates[i].setAttribute('min', time);
}


//validates email adress on change. Not norwegian chars
function ValidateEmail(){

    let mailInput = document.getElementsByName("email");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    for( let j = 1; j < mailInput.length; j++){
        if(mailInput[j].value.match(mailformat)){
            mailInput[j].focus();
            return true;
        }
        else
        {
            alert("You have entered an invalid email address!");
            mailInput[j].focus();
            return false;
        }

    }
}

function confirm_order_no(){
    if (ValidateEmail()) {
        let myWindow = window.open("confirmation.html");
    }
}

function confirm_order_en(){
    if (ValidateEmail()) {
        let myWindow = window.open("confirmation.html");
    }
}