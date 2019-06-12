var names = ["Peter", "Jack", "John", "Sally", "Jill", "Mary", "Muffet"];
var times = [11.3, 12.2, 10.9, 10.5, 11.9, 10.2, 28.7];


var firstTime = 111111;
var secondTime = 111111;
var thirdTime = 111111;

var firstName = "";
var secondName = "";
var thirdName = "";

// First place
for (var i = 0; i < times.length; i++) {
    if (times[i] < firstTime) {
        firstTime = times[i];
    }   
}

//figuring out the name  that matches the time- index 5
firstName = names[times.indexOf(firstTime)];

// //remove the name that matches with the firstTime
names.splice(times.indexOf(firstTime),1);
// remove firstTime from the times array
times.splice(times.indexOf(firstTime),1);



//Second place
for (var i = 0; i < times.length; i++) {
    if (times[i] < secondTime) {
        secondTime = times[i];
    }   
}

// second place and name
secondName = names[times.indexOf(secondTime)];
 //remove the name that matches with the secondTime
names.splice(times.indexOf(secondTime),1);
// remove secondTime from the times array
times.splice(times.indexOf(secondTime),1);

console.log("First Place:", firstName, "with a time of", firstTime, "Second Place:", secondName, "with a time of", secondTime);
// console.log(firstTime, secondTime);



//third place
for (var i = 0; i < times.length; i++) {
    if (times[i] < thirdTime) {
        thirdTime = times[i];
    }   
}

// second place and name
thirdName = names[times.indexOf(thirdTime)];
 //remove the name that matches with the secondTime
names.splice(times.indexOf(thirdTime),1);
// remove secondTime from the times array
times.splice(times.indexOf(thirdTime),1);

console.log("First Place:", firstName, "with a time of", firstTime, "Second Place:", secondName, "with a time of", secondTime, "Third Place:", thirdName, "with a time of", thirdTime);
// console.log(firstTime, secondTime);