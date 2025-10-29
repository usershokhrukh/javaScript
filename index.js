// get information from user
var name = prompt("Your name: ");
var secondName = prompt("your second name: ");
var birthYear = prompt(name + ", your birth year: ");
var birthMonth = prompt("birth month? : ");
var birthDay = prompt("birth day: ");
var email = prompt(name + "'s google email: ");
var region = prompt(name + ", your region: ");
var isStudent = prompt(name + ", are you a student? [Y/n]: ");
var color = prompt(name + "'s favorite color: ");
var hobby = prompt("interest or hobby: ");
var whichWeb = prompt("which browser are you in? : ");
var date = prompt("what about date? [dd.mm.yyyy]: ");
var meridiem = prompt("which meridiem is it? [AM/PM]: ");
var time = prompt("what time is it now? : ");
var pLanguage = prompt("which programming language are you chose, or your favorite programming language? :");
var password = prompt("password for super admin: ");

// printing biography of user

console.log("name: " + name);
console.log("second name: " + secondName);
console.log("birthday: " + birthDay +  "." + birthMonth + "." + birthYear);
console.log("contact: " + email);
console.log("region: " + region);
console.log("is student: " + isStudent);
console.log("color: " + color);
console.log("interested in: " + hobby);
console.log("browser: " + whichWeb);
console.log("registration day: " + date);
console.log("registration time: " + time);
console.log("exactly time: " + meridiem);
console.log("uses: " + pLanguage);
console.log("password: " + password);

console.log("\ntype of information: " + typeof whichWeb)

// road to information with alert()
alert("Your information already in console!");