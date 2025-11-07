// toUpperCase & to LowerCase & padEnd padStart

const userName = prompt("Ismingizni kiriting: ");
const userDate = prompt(`${userName}, yaxshi korgan yil oyi?: `);
const userCar = prompt("Yaxshi korgan mashinangizni nomi: ");
const userBook = prompt("Yaxshi ko'rgan kitobingizni nomi: ");
const userRegion = prompt("Qayerda yashaysiz?: ");
let printProcess = 'Standard';
let printSecondProcess = 'toUpperCase';
let printThirdProcess = 'toLowerCase';
// find largest text to print
const theMaxLength = Math.max(Math.max(Math.max(userName.length, userDate.length) , Math.max(userCar.length, userBook.length)),
                              Math.max(Math.max(printProcess.length, printSecondProcess.length), Math.max(printThirdProcess.length, userRegion.length))
);

//print
const printSecondProcessSpace = (theMaxLength + printSecondProcess.length + 8) / 2;
const userNameSpace = (theMaxLength + userName.length + 8) / 2;
const userDateSpace = (theMaxLength + userDate.length + 8) / 2;
const userCarSpace = (theMaxLength + userCar.length + 8) / 2;
const userBookSpace = (theMaxLength + userBook.length + 8) / 2;
const userRegionSpace = (theMaxLength + userRegion.length + 8) / 2;

console.log(printProcess.padEnd(theMaxLength + 4, " ") + " " +
            printSecondProcess.padStart(printSecondProcessSpace, " ").padEnd(theMaxLength + 7, " ") + " " +
            printThirdProcess.padStart(theMaxLength + 4, " ")
          );

console.log(userName.padEnd(theMaxLength + 4, " ") + "|" +
            userName.toUpperCase().padStart(userNameSpace,  " ").padEnd(theMaxLength + 7, " ") + "|" +
            userName.toLowerCase(). padStart(theMaxLength + 4, " ")
);

console.log(userDate.padEnd(theMaxLength + 4, " ") + "|" +
            userDate.toUpperCase().padStart(userDateSpace, " ").padEnd(theMaxLength + 7, " ") + "|" +
            userDate.toLowerCase(). padStart(theMaxLength + 4, " ")
);

console.log(userCar.padEnd(theMaxLength + 4, " ") + "|" +
            userCar.toUpperCase().padStart(userCarSpace, " ").padEnd(theMaxLength + 7 , " ") + "|" +
            userCar.toLowerCase(). padStart(theMaxLength + 4, " ")
);

console.log(userBook.padEnd(theMaxLength + 4, " ") + "|" +
            userBook.toUpperCase().padStart(userBookSpace, " ").padEnd(theMaxLength + 7 , " ") + "|" +
            userBook.toLowerCase(). padStart(theMaxLength + 4, " ")
);

console.log(userRegion.padEnd(theMaxLength + 4, " ") + "|" +
            userRegion.toUpperCase().padStart(userRegionSpace, " ").padEnd(theMaxLength + 7, " ") + "|" +
            userRegion.toLowerCase(). padStart(theMaxLength + 4, " ")
);


//trim & trimEnd & trimStart
console.log("not trimmed:" + '  trim  ' + "<-");
console.log("trimmed:" + '  trim  '.trim() + "<-");
console.log("not trimmed end:" + "   trim   " + "<-");
console.log("trimmed end:" + "   trim   ".trimEnd() + "<-");
console.log("not trimmed start:" + "   trim   " + "<-");
console.log("trimmed start:" + "   trim   ".trimStart() + "<-");

// repeat
console.log("-".repeat(15));

//replace & replaceAll
console.log("this apple will replaced soon, I love apple =>" + "this apple will replaced soon, I love apple".replace("apple", "banana"));
console.log("all apples will replaced soon, do you like apple? => " + "all apples will replaced soon, do you like apple?".replaceAll("apple", "fruit"));


// notice to user
alert("toUpperCase & toLowerCase, console da!");


