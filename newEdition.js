var teamSections = ["BB1", "BBD", "SS"];

var members = ["Ronny, BBD", "Bobby, BB1", "Ricky, BBD", "Ralph, SS", "Mike, BBD", "Johnny, SS"];

var teams = [ ];

//this is the set up for when I push the members into each array
for(var i = 0; i < teamSections.length; i++) {
    teams.push([]);
}

//split the the teamSections in the members array and push them into sub array
for (var i = 0; i < members.length; i++){
    var splitMembers = members[i].split(", ");
    members[teamSections.indexOf(splitMembers[1])].push(splitMembers[0]);
}
console.log(teams);

for (var i = 0; i < teamSections.length; i++) { // loops departments
    console.log("The teams in this section", teamSections[i], "are:");
     for (var j = 0; j < teams[i].length; j++) {
         console.log("--Group:",teams[i][j]);
     }
} 