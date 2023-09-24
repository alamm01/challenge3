// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let pwdLength;
  let parsedLength;
  let useLowercase, useUppercase, useNumeric, useSpecial;
  let password = '';

  // Characters to include in the password
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeric = '0123456789';
  //special characters for pwd from OWASP
  const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


  while (true) {
    pwdLength = prompt("Please enter password length between 8 to 128 characters: ");
    
    if (pwdLength === null) {
      console.log("User canceled the operation.");
      return;
    }
    
    parsedLength = parseInt(pwdLength, 10);

    if (isNaN(parsedLength)) {
      alert("That's not a valid number. Please try again.");
    } else if (parsedLength >= 8 && parsedLength <= 128) {
      console.log("Valid password length:", parsedLength);
      break;
    } else {
      alert("Incorrect length! Please enter a length between 8 to 128 characters.");
    }
  }

  while (true) {
    useLowercase = confirm("Do you want to include lowercase characters?");
    useUppercase = confirm("Do you want to include uppercase characters?");
    useNumeric = confirm("Do you want to include numeric characters?");
    useSpecial = confirm("Do you want to include special characters?");

    if (useLowercase || useUppercase || useNumeric || useSpecial) {
      break;
    } else {
      alert("You must select at least one character type.");
    }
  }

  // Build the character set to use for generating the password
  var characterSet = '';
  if (useLowercase) characterSet += lowercase;
  if (useUppercase) characterSet += uppercase;
  if (useNumeric) characterSet += numeric;
  if (useSpecial) characterSet += special;

  // Generate the password
  for (let i = 0; i < parsedLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  console.log("Generated password:", password);

  // Return the password
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
