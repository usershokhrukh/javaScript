// toUpperCase & to LowerCase & padEnd & padStart & length

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
console.log("-".repeat(15) + " ('-' repeated 15 times)");

//replace & replaceAll
console.log("this apple will replaced soon, I love apple =>" + "this apple will replaced soon, I love apple".replace("apple", "banana"));
console.log("all apples will replaced soon, do you like apple? => " + "all apples will replaced soon, do you like apple?".replaceAll("apple", "fruit"));

//includes
console.log("is this text includes some apples? => " + "is this text includes some apples?".includes("apples"));
console.log("in a word 'bulb', is there letter 'b'? => " + "in a word 'bulb', is there letter 'b'".includes("b"));
console.log("is there a 5 in 12341 => " + "12341".includes("5"));
console.log("does Milky Way has letter M => " + "Milky Way".includes('M'));

//endswith & startswith
console.log("beginning 'beg' bilan boshlanadimi? => " + 'beginning'.startsWith('beg'));
console.log("ending 'ing' bilan tugaydimi? => " + 'ending'.endsWith('ing'));
console.log("smartphone 'mart' bilan boshlanadimi? => " + 'smartphone'.startsWith('mart'));
console.log("laptop 'pto' bilan tugaydimi? => " + 'laptop'.endsWith('pto'));

//indexof & lastIndexOf
console.log("which index has the 'i' in 'index'? =>" + "index".indexOf('i'));
console.log("which index has the 's' in 'smarts'? =>" + "smarts".indexOf('s'));
console.log("which last index has the 'n' in 'banana'? =>" + "banana".lastIndexOf('n'));
console.log("which last index has the 'p' in 'apple'? =>" + "apple".lastIndexOf('p'));

//slice 
console.log("give me slice of banana => " + "banana".slice(0, 4));
console.log("Jamshid after sliced => " + "Jamshid".slice(0, -4));
console.log("I put my laptop on ? of the box => " + "laptop".slice(3));

//substring & substr
console.log("it is method with substring => " + "method".substring(0,4));
console.log("substr is old method, slice is new method => " + "substr".substring(0, 5));

//concat 
console.log("ha, after concat 'ha' => " + 'ha'.concat("ha", "ha", "ha"));
console.log("ba, before concat, but after adding 'na' => " + "ba".concat("na", "na"));


//split
console.log("Hello will split soon => " + "Hello".split(''));
console.log("1|2|3|4|5 => " + "1|2|3|4|5".split('|'));
console.log("I, love, programming => " + "I, love, programming".split(',') + " (index 0 will be) " + "I, love, programming".split(',')[0]);
console.log("99-000-79-53 => " + "99-000-79-53".split('-'));


//charAt & charCodeAt & at
console.log("there is charAt => " + 'char'.charAt(0) + " in 'char'");
console.log("the a's unicode will be ?, for example 'apple'" + 'apple'.charCodeAt(0));
console.log("the p's unicode will be ?, for example 'pineapple'" + 'pineapple'.charCodeAt(0));
console.log("the p's unicode will be ?, for example 'pineapple'" + 'pineapple'.charCodeAt(0));
console.log("in index of -3, exist '" + 'GitHub'.at(-3) + "', in GitHub");


//search
console.log("search first indexof 'yyyy' in \"Today's year 2025, after two months it will be 2026\" (next line)");
console.log("Today's year 2025, after two months it will be 2026".search(/(\d+)/g));

//match & matchAll

console.log("find 'yyyy of month' in \"Today is year 2025 of November, after two months it will be 2026 of January\"(next line)");
console.log("Today's year 2025 of November, after two months it will be 2026 of January".match(/\d{4} of January|November/g));

var matchAllList = [...("1-qator\n2-qator\n3-qator".matchAll(/(\d)-qator/mgi))];
console.log("1-qator\n2-qator\n3-qator to matchAll => " + matchAllList);      



//localeCompare
console.log("a harifini b harifiga ket-ma ketligini tekshirish, a oldinroqmi?: " + 'a'.localeCompare('b'));
console.log("endi b harifini a harifiga  tekshirish, b oldinroqmi?: " + 'b'.localeCompare('a'));
console.log("Salam ni salam ga, Salam oldinroqmi?: " + 'Salam'.localeCompare('salam'));
console.log("abc ni abc ga, abc oldinroqmi?: " + 'abc'.localeCompare('abc'));


//codePointAt
console.log("中 ni unicode ni tekshirish " + "中".codePointAt());
console.log("中 ni unicode ni tekshirish " + "中".codePointAt());


//isWellFormed
console.log("-> \uDE00 bu well formatmi? " + "bu well formatmi? \uDE00".isWellFormed());
console.log("well formatga o'tkazish a\uDE00b => " + "a\uDE00b".toWellFormed());





















// notice to user
alert("String methods, console da!");



