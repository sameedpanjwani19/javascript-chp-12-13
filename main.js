var character = prompt("Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter");
var value = character.charCodeAt(0);

if (value >= 48 && value <= 57){
    alert(character + " is number");
}

else if (value >= 65 && value <= 90 ){
    alert(character + " is Uppercase Letter");
}

else if (value >= 97 && value <= 122 ){
    alert(character + " is Lowercase Letter");
}

else{
    alert("Given input is not a number or letter");
}

var firstNumber = +prompt("Enter First Number: ");
var secondNumber = +prompt("Enter Second Number: ");

if(firstNumber > secondNumber){
    alert(firstNumber + " is larger than " + secondNumber);
}

else if(firstNumber < secondNumber){
    alert(secondNumber + " is larger than " + firstNumber);
}

else{
    alert(firstNumber + " and " + secondNumber + " both are eqaul");
}

var num = +prompt("Enter a number to check its state: ");

if (num > 0){
    alert(num + " is Positive");
}

else if (num < 0){
    alert(num + " is Negative");
}

else{
    alert("The number is " + num);
}

var character = prompt("Enter character to check vowel or not");

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
    alert(character + " is vowel");
}

else if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U"){
    alert(character + " is vowel");
}

else{
    alert(character + " is not vowel");
}

var password = "Sameed";
var check = prompt("Enter your password: ");
if (check === ""){
    check = prompt("Please enter your password");
}
if (check === password){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect Password");
}


var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good day";
    alert(greeting);
}
else{
    greeting = "Good evening";
    alert(greeting);
}

var time = +prompt("Please enter 24 hours clock format time \nlike: 1900 = 7pm.");

if (time >= 1000 && time < 1200){
    alert("Good Morning");
}

else if (time >= 1200 && time < 1700){
    alert("Good Afternoon");
}

else if (time >= 1700 && time < 2100){
    alert("Good Evening");
}

else if (time >= 2100 && time <= 2359){
    alert("Good Night");
}

else{
    alert("Invalid Input");
}