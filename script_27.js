
// Truthy and Falsy values in JavaScript

// Falsy values: 
// 0 
// ''
// null 
// undefined
//  NaN

// Comparison Operators
// == (equal)
// === (strict equal)       
// != (not equal)
// !== (strict not equal)
// > (greater than)
// < (less than)
// >= (greater than or equal)
// <= (less than or equal)

userName1 = '24';
userName2 = 24;
userName3 =  21;
userName4 = 24;

console.log(userName1 == userName2);

console.log(userName1 === userName2); 

console.log(userName1 != userName2); 

console.log(userName1 !== userName2);

console.log(userName3 >= userName4);

// Logical Operators
// && (logical AND) 
// || (logical OR)
// ! (logical NOT)

// Example of logical operators

let isLoggedIn = true;
let isAdmin = false;
let canAccess = isLoggedIn && isAdmin; 
console.log(canAccess);

let UserAge = 18;
let isCollegeStudent = UserAge >= 16 && UserAge <= 25;
let isSchoolStudent = UserAge >= 5 && UserAge <= 25;

let isStudent = isCollegeStudent || isSchoolStudent;

console.log(isStudent);

const andResult2 = 'Hello' && null;
const oorResult2 = 'Hello' || null;

console.log(andResult2); 
console.log(oorResult2); 

const andResult3 = '' &&  'Hello' 
const orResult3 = '' || null;

console.log(andResult3); 
console.log(orResult3); 


const andResult4 = 'Hello' &&  4 + 8; 
const orResult4 = 'undefined'|| 4 + 8 * 4;   

console.log(andResult4); 
console.log(orResult4); 


const andResult5 = 'Hello' &&  console.log('Hello1'); 
const orResult5 = 'undefined'|| console.log('Hello2');   

console.log(andResult5); 
console.log(orResult5);




 