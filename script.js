// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  // Empty variable that will store the list of characters from the user selected password parameters
  let passwordReqs = '';

  // List of password parameters
  const special = '!@#$&';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789';

  // Numberical values for Random Password Fix
  let specialFix = 0;
  let lowerFix = 0;
  let upperFix = 0;
  let numberFix = 0;

  // Prompts user to enter the number of characters to genereate new random password. 
  // A while loop ensures that the user enters a number between 8 and 128 characters
  let lengthPrompt = prompt('How many characters does your password require? Enter a number between 8 and 128.'); {
  while (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt) === true ) {
    lengthPrompt = prompt('Please enter a number of characters between 8 and 128.');
  };
  lengthPassword = parseInt(lengthPrompt);
  };
  
  // Prompts user if their password requires special characters
  let specialConfirm = confirm('Will your password require special characters?\n\nClick "Okay" for Yes or "Cancel" for No');
  specialPassword = specialConfirm;
  
  // Prompts user if their password requires lowercase characters
  let lowerConfirm = confirm('Will your password require lowercase letters?\n\nClick "Okay" for Yes or "Cancel" for No');
  lowerPassword = lowerConfirm;
  
  // Prompts user if their password requires uppercase characters
  let upperConfirm = confirm('Will your password require uppercase letters?\n\nClick "Okay" for Yes or "Cancel" for No');
  upperPassword = upperConfirm;
  
  // Prompts user if their password requires numerical characters
  let numberConfirm = confirm('Will your password require numbers?\n\nClick "Okay" for Yes or "Cancel" for No');
  numberPassword = numberConfirm;

  // Alerts the user if no parameters have been selected
  if (specialPassword === false && lowerPassword === false && upperPassword === false && numberPassword ===false) {
    alert('You must select at least one required character type. Please try again.');
  };

  // Adds the special characters parameters to the passwordReqs variable
  if (specialPassword === true) {
    passwordReqs = passwordReqs.concat(special);
    specialFix = 1;
  }; 

  // Adds the lowercase characters parameters to the passwordReqs variable
  if (lowerPassword === true) {
    passwordReqs = passwordReqs.concat(lower);
    lowerFix = 1;
  };

  // Adds the uppercase characters parameters to the passwordReqs variable
  if (upperPassword === true) {
    passwordReqs = passwordReqs.concat(upper);
    upperFix = 1;
  }; 

  // Adds the numerical characters parameters to the passwordReqs variable
  if (numberPassword === true) {
    passwordReqs = passwordReqs.concat(number);
    numberFix = 1;
  };
  
  // Randomly selects characters from the passwordReqs and creates a random password 
  let passwordRandom = '';
  for (i = 0; i < lengthPassword; i++) {
    passwordRandom += passwordReqs.charAt(Math.floor(Math.random() * passwordReqs.length));
  };   

  // Password fix: randomly selects a character that the user requires and concatinates it to the generated password
  if (specialPassword === true) {
    passwordRandom = passwordRandom.concat(special.charAt(Math.floor(Math.random() * special.length)));
  };

  if (lowerPassword === true) {
    passwordRandom = passwordRandom.concat(lower.charAt(Math.floor(Math.random() * lower.length)));
  };

  if (upperPassword === true) {
    passwordRandom = passwordRandom.concat(upper.charAt(Math.floor(Math.random() * upper.length)));
  };

  if (numberPassword === true) {
    passwordRandom = passwordRandom.concat(number.charAt(Math.floor(Math.random() * number.length)));
  };

  // fixLength is number of characters that will need to be removed from the beginning of the generated password so that the user length is correct
  const fixLength = specialFix + lowerFix + upperFix + numberFix;

  // Removes the number of extra characters from the beginning of the generated password
  password = passwordRandom.replace(passwordRandom.substr(0, fixLength),'');
  
  // Returns the final generated password to the HTML
  return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
