function validateForm() {
    var w = document.forms["myForm"]["name"].value;
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["password"].value;

var submit = true;

    if (w == "" || w == null) {
        var error1 = "First name cannot be empty";


        document.getElementById("nameErr").innerHTML = error1;
         document.getElementById("nameErr").style.color = "red";
        document.getElementById("nameErr").style.textAlign = "right";
        document.getElementById("nameErr").style.fontSize = "0.6rem";

        submit = false;

    } else if (x == "" || x == null) {
        var error2 = "Last name cannot be empty";

        document.getElementById("lNameErr").innerHTML = error2;
        document.getElementById("lNameErr").style.color = "red";
        document.getElementById("lNameErr").style.textAlign = "right";
        document.getElementById("lNameErr").style.fontSize = "0.6rem";


        submit = false;

    } else if (y == "" || y == null) {
        var error3 = "Looks like this is not an email";

        document.getElementById("emailErr").innerHTML = error3;
        document.getElementById("emailErr").style.color = "red";
        document.getElementById("emailErr").style.textAlign = "right";
        document.getElementById("emailErr").style.fontSize = "0.6rem";

    } else if (z == "" || z == null) {
        var error4 = "Password cannot be empty";

        document.getElementById("passwordErr").innerHTML = error4;
        document.getElementById("passwordErr").style.color = "red";
        document.getElementById("passwordErr").style.textAlign = "right";
        document.getElementById("passwordErr").style.fontSize = "0.6rem";
        submit = false;
    } else {

       return submit;

 }
}