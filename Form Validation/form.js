console.log('lets go');

function validation() {

    var username = document.getElementById('user').value;
    var Emailid = document.getElementById('email').value;
    var Password = document.getElementById('password').value;
    var Confpassword = document.getElementById('Confirmpassword').value;
    var Mobile = document.getElementById('mobile').value;


    if (username == "") {
        document.getElementById('name').innerHTML = " ** PLS ENTER THE USERNAME";
        return false;
    }
    if ((username.length <= 2) || (username.length > 20)) {
        document.getElementById('name').innerHTML = " ** USERNAME MUST BE BETWEEN 3 AND 20";
        return false;
    }
    if (!isNaN(username)) {
        document.getElementById('name').innerHTML = " ** ONLY CHARACTERS ARE ALLOWED";
        return false;
    }



    if (Emailid == "") {
        document.getElementById('mail').innerHTML = "PLS ENTER THE VALID EMAIL ID";
        return false;
    }


    if (Password == "") {
        document.getElementById('pass').innerHTML = "PLS ENTER CORRECT PASSWORD";
        return false;
    }
    if ((Password.length <= 5) || (Password.length > 20)) {
        document.getElementById('pass').innerHTML = "PASSWORD MUST BE BETWEEN 5 AND 20";
    }


    if (Confpassword == "") {
        document.getElementById('conpass').innerHTML = "PLS ENTER THE PASSWORD";
        return false;
    }
    if (Password != Confpassword) {
        document.getElementById('conpass').innerHTML = "PASSWORD NOT MATCHED";
        return false;
    }


    if (Mobile == "") {
        document.getElementById('number').innerHTML = "PLS ENTER NO.";
        return false;
    }
    if (isNaN(Mobile)) {
        document.getElementById('number').innerHTML = "PLS ENTER ONLY DIGITS";
        return false;
    }
    if (Mobile.length > 10) {
        document.getElementById('number').innerHTML = "PLS ENTER ONLY 10 DIGITS";
        return false;
    }


}