// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  let passwordReqs = '';
  const special = '!@#$&';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789';
  let specialFix = 0;
  let lowerFix = 0;
  let upperFix = 0;
  let numberFix = 0;

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
  
  let numberConfirm = confirm('Will your password require numbers?\n\nClick "Okay" for Yes or "Cancel" for No');
  numberPassword = numberConfirm;
  console.log('Number = ' + numberPassword);

  if (specialPassword === false && lowerPassword === false && upperPassword === false && numberPassword ===false) {
    alert('You must select at least one required character type. Please try again.');
  };

  if (specialPassword === true) {
    passwordReqs = passwordReqs.concat(special);
    specialFix = 1;
  }; 
  if (lowerPassword === true) {
    passwordReqs = passwordReqs.concat(lower);
    lowerFix = 1;
  };
  if (upperPassword === true) {
    passwordReqs = passwordReqs.concat(upper);
    upperFix = 1;
  }; 
  if (numberPassword === true) {
    passwordReqs = passwordReqs.concat(number);
    numberFix = 1;
  };
  console.log(passwordReqs);
  
  let passwordRandom = '';
  for (i = 0; i < lengthPassword; i++) {
    passwordRandom += passwordReqs.charAt(Math.floor(Math.random() * passwordReqs.length));
  }
  console.log(passwordRandom);    

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
  console.log(passwordRandom);

  const fixLength = specialFix + lowerFix + upperFix + numberFix;
  console.log(fixLength);

  password = passwordRandom.replace(passwordRandom.substr(0, fixLength),'');
  console.log(password);
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
