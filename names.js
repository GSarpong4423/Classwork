var namesList = "Stuart Yoshi Denton Hayley Indigo Timothy Brianna Nathaniel Ezekiel Cairo Tate Ruby Ria Laith Kieran Solomon Patricia Nicholas Carl Randall Nomlanga Nita Daria Courtney Minerva Burke Beatrice Ella Candice Brennan Garrett Lois Alfonso Camilla Luke Kirk Olga Ayanna Honorato Alexandra Ora Sigourney Ronan Bo Alma Oliver Hunter Kyle Maile Evelyn Kieran Farrah Carly Claude Arnell Austin Autumn Jessica George Deanna Shannon Beck Chancellor Christian Yeo Keegan Regina Kyle Herrod Harper Timon Amanda Craig Hu Noble Yoko Shay Octavia Kamal Linus Sierra Martena Callum Ivana Michelle Veda Yetta Rana Felix Inga Arnell Summer Allistair Martena Vincent Laith Kim Maria Ciara Desirae Inga Emily Janna Kasimir Tatiana Emily"

// Convert the list of names into an array using javascript
var namesArray = namesList.split(" "); 

// Determine how many names are in the list 
    // var counter = 0;
    // console.log(namesArray.length);


// Determine the position (number placement) of the name "Arnell"
    // for(var i = 0; i < namesArray.length; i++) {
    //     if (namesArray[i] == "Arnell"){
    //         console.log("Arnell is number ", i+1, "in the list")
    //     }
    // }
    
// How to use the counter 
    // for(var i = 0; i < namesArray.length; i++) {
    //     if (namesArray[i] == "Arnell"){
    //         counter++;
    //           if (counter == 1){
    //               console.log("Arnell is number ", i+1, "in the list");
    //           }
            
    //     }
    // }

console.log( "The placement of the name Arnell is number", namesArray.indexOf("Arnell")+1);