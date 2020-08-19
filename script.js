// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let passwordReqs = '';
const special = '!@#$&';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '0123456789';

function generatePassword() {
  let lengthPrompt = prompt('How many characters does your password require? Enter a number between 8 and 128.'); {
  while (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt) === true ) {
    lengthPrompt = prompt('Please enter a number of characters between 8 and 128.');
  };
  lengthPassword = parseInt(lengthPrompt);
  console.log('Length = ' + lengthPassword);
  };
  
  let specialConfirm = confirm('Will your password require special characters?\n\nClick "Okay" for Yes or "Cancel" for No');
  specialPassword = specialConfirm;
  console.log('Special = ' + specialConfirm);
  
  let lowerConfirm = confirm('Will your password require lowercase letters?\n\nClick "Okay" for Yes or "Cancel" for No');
  lowerPassword = lowerConfirm;
  console.log('Lower = ' + lowerPassword);
  
  let upperConfirm = confirm('Will your password require uppercase letters?\n\nClick "Okay" for Yes or "Cancel" for No');
  upperPassword = upperConfirm;
  console.log('Upper = ' + upperPassword)
  
  let numberConfirm = confirm('Will your password require numbers?');
  numberPassword = numberConfirm;
  console.log('Number = ' + numberPassword);

  if (specialPassword === false && lowerPassword === false && upperPassword === false && numberPassword ===false) {
    alert('You must select at least one required character type. Please try again.');
  } else if (specialPassword === true) {
    passwordReqs = passwordReqs.concat(special);
  } if (lowerPassword === true) {
    passwordReqs = passwordReqs.concat(lower);
  } if (upperPassword === true) {
    passwordReqs = passwordReqs.concat(upper);
  } if (numberPassword === true) {
    passwordReqs = passwordReqs.concat(number);
  }
  console.log(passwordReqs);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
