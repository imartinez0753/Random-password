// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	// you can create a function named generatePassword that creates the password
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// -------------------------------------------------------------------------
function loop(arr) {
	for (i = 0; i < characterLength; i++);
	result = arr[Math.floor(Math.random() * characterLength) + 1];
	console.log(result);
}

var lower = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

var upper = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
var special = [
	",",
	".",
	"/",
	"<",
	">",
	"?",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"-",
	"_",
	"=",
	"+",
	"[",
	"]",
	"{",
	"}",
];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var characterLength = prompt(
	"how many characters would you like in your password?\nYou must choose between 8 and 128 characters"
);
if (characterLength >= 8 && characterLength <= 128) {
	alert("your password will be " + characterLength + " characters long.");

	var userLower = confirm("Would you like to use lowercase characters?");
	var userUpper = confirm("Would you like to use uppercase characters?");
	var userNum = confirm("Would you like to use numbers?");
	var userSpecial = confirm("Would you like to use special characters?");
	characterLength = parseInt(characterLength);
}

//if all are aplied
if (
	userLower === true &&
	userUpper === true &&
	userSpecial === true &&
	userNum === true
) {
	//combine randomize and output
}
//if only one is used
else if (
	userLower === true ||
	userUpper === true ||
	userNum === true ||
	userSpecial === true
) {
	//randomize and output
}
//if all but num is chosen
else if (
	userNum === false &&
	userLower === true &&
	userUpper === true &&
	userSpecial === true
) {
	//combine randomize and output
}
//if all but lower is used
else if (
	userLower === false &&
	userUpper === true &&
	userSpecial === true &&
	userNum === true
) {
	//combine randomiz and output
}

// loop(num);
// console.log("------------------");
loop(lower);
// console.log("------------------");
// loop(upper);
// console.log("------------------");
// loop(special);
// console.log("------------------");
