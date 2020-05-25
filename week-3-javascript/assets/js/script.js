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

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
	var characterLength = prompt(
		"how many characters would you like in your password?\nYou must choose between 8 and 128 characters"
	);
	characterLength = parseInt(characterLength);
	if (characterLength >= 8 && characterLength <= 128) {
		alert("your password will be " + characterLength + " characters long.");
	} else {
		return alert("Invalid entry");
	}

	var userLower = confirm("Would you like to use lowercase characters?");
	var userUpper = confirm("Would you like to use uppercase characters?");
	var userNum = confirm("Would you like to use numbers?");
	var userSpecial = confirm("Would you like to use special characters?");
	var collection = [];

	if (userLower === true) {
		collection = collection.concat(lower);
		// console.log(collection);
		//push to new array
	}
	//if only one is used
	if (
		//push to new array
		userUpper === true
	) {
		collection = collection.concat(upper);
		//randomize and output
	}
	//if all but num is chosen
	if (userNum === true) {
		collection = collection.concat(num);
		// console.log(collection);
		// push to new array
	}
	//if all but lower is used
	if (userSpecial === true) {
		collection = collection.concat(special);
		// push to new array combine randomiz and output
	}
	function loop(arr) {
		for (var i = 0; i < characterLength; i++) {
			var key = collection[Math.floor(Math.random() * characterLength)];
			return key;
		}
	}
	loop(collection);
	// 	console.log(collection);
	// 	console.log("----------------");
	// 	loop(collection);
	// 	return i;
	// 	console.log(collection);
}
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

// loop(collection);

// console.log(collection);
// console.log("-------------------");

// // loop(num);
// // console.log("------------------");
// // loop(lower);
// // console.log("------------------");
// // loop(upper);
// // console.log("------------------");
// // loop(special);
// // console.log("------------------");
