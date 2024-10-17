/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("d6").addEventListener("click", rolld6);
document.getElementById("d8").addEventListener("click", rolld8);
document.getElementById("enter").addEventListener("click", say_hello);

/*** Functions ***/

// Return a random integer from `min` to `max`, inclusive
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rolld6() {
    let roll6 = randInt(1, 6);
    document.getElementById("die_roll").textContent = roll6;
}

function rolld8() {
    let roll8 = randInt(1, 8);
    document.getElementById("die_roll").textContent = roll8;
}

function say_hello() {
    //Get user name as entered
    let name = document.getElementById("user_input").value;
    
    //And say hello!
    document.getElementById("greeting").textContent = `Hello ${name}!`;
}