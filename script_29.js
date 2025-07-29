 
// Optimize decision making using if-else statements

// const userName = prompt("Enter your name: ") || "Guest";
// const userAge =  parseInt(prompt("Enter your age: ")) || undefined;

// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`); 

//  if (userAge >= 5 && userAge <= 16 ) {
//      console.log(`${userName} is a school student`);
//      console.log("And he/she is learning maths and science");
//     }

// else if (userAge >= 18 && userAge <= 25 ) {
//      console.log(`${userName} is a college student`);
//      console.log("And he/she is learning JavaScript");
//     }

// else if (userAge >= 25 && userAge <= 40) {
//     console.log(`${userName} is a working professional`);
//     console.log("And he/she is Web Developer");
// }

// else if (userAge > 45) {  
//     console.log(`${userName} is a retired person`);
//     console.log("And he/she is enjoying life");
// }
// else {
//     console.log('Invalid age provided');
// }

// console.log("Program Ended");

const user = prompt("Enter a number: ");
const number = parseInt(user);

console.log(`${number}`);

if (number > 0) {
    console.log("The number is positive.");
}

else if (number < 0) {
    console.log("The number is negative.");
}



