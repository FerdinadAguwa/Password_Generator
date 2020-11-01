// Assignment Code\
var generateBtn = document.querySelector("#generate");

// Added Event listener to the generate button 

generateBtn.addEventListener("click",writePassword);




// Function that will generate users password
function writePassword() {

  var allChar =[]


   //- - - - - - - - - ARRAYS  - - - - - - - - - - - -
var numberChar =[0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]

var upperChar =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"]

var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"]

var specChar = [ "!", "#" ,"&" ,"^", "*", "@", "~", "_", "-", ">","<","?"] 

//var for the password length

var passwordLength = prompt("How many characters would you like for you password? (Password must contain at least 8 characters.)")
var numberCharLength = parseInt(passwordLength);

//if else statements to ensure the user meets the password length requirements.
if (passwordLength > 128){
alert ("Your password cannot exceed 124 characters.");
return;
}
if (passwordLength <8) {
  alert("Password must be at least 8 characters.");
  return;
}

if (!numberCharLength){
  alert("Please input numbers only for your password length.");
return;
}
else{
  alert("Your password will be  " +passwordLength+ " characters long.");
}


// What will this password contain...Numbers/Uppercase/Lowercase or Special Characters
var numberCase = confirm ("Would you like your password to contain numbers?");
var lowerCase= confirm  ("Would you like your password to contain lowercase characters?");
var upperCase= confirm ("Would you like your password to contain uppercase characters?");
var specialCase= confirm ("Would you like your password to contain special characters?");

//if the user failes to choose at least one of the confirms the screen will alert him to do so. 
if(!numberCase && !lowerCase && !upperCase && !specialCase){
  alert("You must confirm at least one in order to move forward.");
return;
}

//if the user selects one of the arrays then the characters from the given array will be pushed into the allChar variable.

if(numberCase){ 
  addChar(numberChar);
  }
 
 if(lowerCase){ 
    addChar(lowerChar);
    }
 if(upperCase){ 
      addChar(upperChar);
  
    }

 if(specialCase){ 
        addChar(specChar);
      }        
console.log(allChar)





//A function that pushes all the strings and numbers into one variable. 
  function addChar(arr) {
    for ( var j =0; j <arr.length; j++){
      allChar.push(arr[j])
    }
  }

  var generatePassword = []

  for(var i=0; i<passwordLength;i++){
    var randomIndex = Math.floor(Math.random()* allChar.length);
  

  generatePassword = generatePassword+allChar[randomIndex];
  console.log(generatePassword)

  }
  
  var passwordText = document.querySelector("#password");
    

  passwordText.value = generatePassword

}



