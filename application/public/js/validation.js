const flash = require("express-flash");

function username_validation(){
    var username = document.getElementById('username').value;

    //checks if username begins with a character and 3 or more alphanumeric characters to print the right message
    if(("a" > username.charAt(0) || username.charAt(0) > "z") &&
    ("A" > username.charAt(0) || username.charAt(0) > "Z") && username.length < 3){
        alert("Please enter a username that begins with a character and is 3 or more alphanumeric characters. ");
        return false;
    }

    //checks if username begins with a character to print the right message
    if(("a" > username.charAt(0) || username.charAt(0) > "z") &&
    ("A" > username.charAt(0) || username.charAt(0) > "Z")){
        alert("Please enter a username that begins with a character. ");
        return false;
    }

    //checks if username is 3 or more alphanumeric characters to print the right message
    if(username.length < 3){
        alert("Please enter a username that is 3 or more alphanumeric characters. ");
        return false;
    }
}

function password_length(){
    var pass_word = document.getElementById("pass_word").value;

    //checks password length
    if(pass_word.length < 8){
        alert("Please enter a password that is 8 or more characters. ");
        return false;
    }
}

function password_number(){
    var pass_word = document.getElementById("pass_word").value;
    var num=/[0-9]/;

    //checks if there is at least 1 number
    if(!(pass_word.match(num))){
        alert("Please enter a password that contains at least 1 number. ");
        return false;
    }
}

function password_uppercase(){
    var pass_word = document.getElementById("pass_word").value;
    var uppercase=/[A-Z]/;

    //checks if there is at least 1 uppercase letter
    if(!(pass_word.match(uppercase))){
        alert("Please enter a password that contains at least 1 uppercase letter. ");
        return false;
    }
}

function password_special_char(){
    var pass_word = document.getElementById("pass_word").value;
    var special_character=/[(/*-+!@#$^&*)]/;

    //checks if there is at least 1 special key
    if(!(pass_word.match(special_character))){
        alert("Please enter a password that contains at least 1 special character. ");
        return false;
    }
    
}

function confirm_password_validation(){
    var confirm_password = document.getElementById("confirm_password").value;
    var pass_word = document.getElementById("pass_word").value;

    //checks if password is the same as confirm password
    if(!(confirm_password.match(pass_word))){
        alert("Password does not match, passwords must be the same. ");
        return false;
    }
}

function validation(){
    username_validation(username);
    password_length(pass_word);
    password_number(pass_word);
    password_uppercase(pass_word);
    password_special_char(pass_word);
    confirm_password_validation(confirm_password);
}

function setFlashMessageFadeOut(){
    setTimeout(() => {
        let currentOpacity = 1.0;
        let timer = setInterval(() => {
            if(currentOpacity < 0.05){
                clearInterval(timer);
                flashElement.remove();
            }
            currentOpacity = currentOpacity - 0.05;
            flashElement.style.opacity = currentOpacity;
        }, 50);
    },4000);
}

let flashElement = document.getElementById('flash-message');
if(flashElement){
    setFlashMessageFadeOut();
}





