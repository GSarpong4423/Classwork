var newString = "";
var string = "Life is what you make of it";
var counter = string.length;

for (counter  ;counter > 0 ;counter -- ) { 
         newString += string.substring(counter-1, counter); 
      } 
console.log(" Reversed is " + newString + "!"); 