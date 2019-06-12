var departments =  ["d001", "d002", "d003"];

var employeeDepartments = ["e7001, d003", "e7002, d001", "e7004, d001", "e7003, d002", "e7005, d003", "e7006, d003"];

var employees =  [ ];

for (var i = 0; i < departments.length; i++) {
    employees.push([]);
} 

//Split the department and push into sub array
// for (var i = 0; i < employeeDepartments.length; i++){
//     var splitEmployeeDepartments = employeeDepartments[i].split(", ");
//     employees[departments.indexOf(splitEmployeeDepartments[1])].push(splitEmployeeDepartments[0]);
    
// }


// for (var i = 0; i < departments.length; i++) { // loops departments
//     console.log("The employees in department", departments[i], "are:");
//      for (var j = 0; j < employees[i].length; j++) {
//          console.log("--Employee:",employees[i][j]);
//      }
// } 
   