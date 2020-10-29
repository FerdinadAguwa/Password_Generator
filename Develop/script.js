// Assignment Code\
var generateBtn = document.querySelector("#generate");

// Added Event listener to the generate button 

generateBtn.addEventListener("click",writePassword);




// Function that will generate users password
function writePassword() {

  var allChar =[]
  var passwordFinal =[]

   //- - - - - - - - - ARRAYS  - - - - - - - - - - - -
var numberChar =[0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]

var upperChar =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"]

var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"]

var specChar = [ "!", "#" ,"&" ,"^", "*", "@", "~", "_", "-",] 

//var for the password length

var passwordLength = prompt("How many characters would you like for you password? (Password must contain at least 8 characters.)")
var numberCharLength = parseInt(passwordLength);

//if else statements for the password length requirements.
if (passwordLength > 124){
alert ("Your password cannot exceed 124 characters.");
return;
}
if (passwordLength <8) {
  alert("Password must be at least 8 characters.")
  return;
}

if (!numberCharLength){
  alert("Please input numbers only for your password length.");
return;
}
else{
  alert("Your password will be  " +passwordLength+ " characters long.");
}



//make sure the 



  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    

  passwordText.value = password;

}


