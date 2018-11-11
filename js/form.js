
//Only chose the day after this day
const tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);
const time = tommorow.toISOString().split('T')[0];
const dates = document.getElementsByName("date");

for (let i = 0; i <dates.length; i++) {
    dates[i].setAttribute('min', time);
}


//validates email adress on change. Not norwegian chars
function ValidateEmail(lang){
    const mailInput = document.getElementsByName("email");
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


//gets the choosen language 
let language = getLang();

//checks if the inputs are ok, if they are, you are sent to confirmation.html
function confirm_order(e){
    if(language === 'no') {
        if(ValidateEmail('no')){
            window.open("confirmation.html");
        }
        else {
            e.preventDefault();
        }
    }
    else if(language === 'en'){
        if (ValidateEmail('en')) {
            window.open("confirmation.html");
        }
        else {
            e.preventDefault();
        }

    }
}

