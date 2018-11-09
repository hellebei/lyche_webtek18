
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
        console.log("lang === 'en'");

        if(mailInput[1].value.match(mailformat)){
            console.log("en, return true");
            
            mailInput[1].focus();
            return true;
        }
        else{
            console.log("en, return false");
            
            alert("You have entered an invalid email address!");
            mailInput[1].focus();
            return false;
        }
    }
    else if(lang === 'no'){
        console.log("lang === 'no'");
        
        
        if(mailInput[0].value.match(mailformat)){
            console.log("no, return true");
            
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


//hvorfor funker ikke getLang() :((((
function confirm_order(e){
    if (ValidateEmail('no')){
        window.open("confirmation.html");
    }
    else {
        e.preventDefault();
    }
}

function confirm_order_en(e){
    if (ValidateEmail('en')) {
        window.open("confirmation.html");
   }
   else {
    e.preventDefault();
    }
}
