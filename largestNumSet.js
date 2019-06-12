var numberSets = [[4, 5, 1,2, 3,-11], [13, -3,27, 18, 2,26], [32, ,-5,35,2, 37, 39], [1000,2, -7,1001, 857, 1]];
console.log(numberSets.length)
var newArr = [];

for(var i=0; i<numberSets.length; ++i) {           // Iterate array
    var maximum = -Infinity;                               // Initial maximum
    for(var j=0; j<numberSets[i].length; ++j)        // Iterate subarrays
      if(numberSets[i][j] > maximum)                 // Compare
        maximum = numberSets[i][j];                  // Update maximum
       newArr.push(maximum);                     // Store the real maximum 
}
 console.log(newArr);