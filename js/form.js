
//kan bare velge datoer fra "imorgen"
var tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);
const time = tommorow.toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', time);



//validates email adress on change. Not norwegian chars
function ValidateEmail(){
    let mailInput = document.getElementById("mail");
    console.log(mailInput);
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailInput.value.match(mailformat))
    {
        mailInput.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        mailInput.focus();
        return false;
    }
}


function getInformation() {
    var inputs = document.getElementById("form1").elements;
// iterate over the form controls
    for (i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        /* (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
            inputs[i].value.toLocaleUpperCase();  // update text input
        }*/
    }
}

function confirm_order_no() {
    var myWindow = window.open("confirmation.html");
}

function confirm_order_en(){
    var myWindow = window.open("confirmation.html");

}

